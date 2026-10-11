#!/usr/bin/env python3
"""Segnala a IndexNow solo le pagine nuove o modificate.

Uso:
  indexnow.py prepara   (dopo la build, prima dell'upload)
      Confronta il contenuto di ogni pagina della sitemap con lo stato
      pubblicato l'ultima volta (STATO_URL), scrive in public/ il nuovo
      stato e salva in DA_INVIARE l'elenco delle pagine cambiate.
  indexnow.py invia     (dopo il deploy)
      Invia a IndexNow l'elenco preparato.

Del contenuto si confronta solo la parte dentro <article>...</article>,
così un cambiamento a menu, piè di pagina o CSS non fa risegnalare
tutto il sito. Le pagine dei tag sono escluse.
"""
import hashlib
import json
import os
import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET

HOST = "diodatiastro.github.io"
BASE = f"https://{HOST}/"
KEY = "5c3cbe8d8d274d45a7d5b7c74d6d8b77"
PUBLIC = "public"
STATO_FILE = "indexnow-stato.json"
STATO_URL = BASE + STATO_FILE
DA_INVIARE = "indexnow-da-inviare.json"


def urls_sitemap():
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    root = ET.parse(os.path.join(PUBLIC, "sitemap.xml")).getroot()
    urls = [u.find("sm:loc", ns).text.strip() for u in root.findall("sm:url", ns)]
    return [u for u in urls if "/tags/" not in u]


def impronta(url):
    percorso = url[len(BASE):] if url.startswith(BASE) else ""
    file = os.path.join(PUBLIC, percorso, "index.html")
    try:
        with open(file, encoding="utf-8") as f:
            html = f.read()
    except FileNotFoundError:
        return None
    inizio, fine = html.find("<article"), html.rfind("</article>")
    if inizio != -1 and fine > inizio:
        html = html[inizio:fine]
    return hashlib.sha256(html.encode("utf-8")).hexdigest()


def stato_precedente():
    try:
        with urllib.request.urlopen(STATO_URL, timeout=20) as r:
            return json.load(r)
    except (urllib.error.URLError, ValueError) as e:
        print(f"Stato precedente non disponibile ({e}): segnalo tutte le pagine.")
        return {}


def prepara():
    vecchio = stato_precedente()
    nuovo = {}
    for url in urls_sitemap():
        h = impronta(url)
        if h:
            nuovo[url] = h
    cambiate = [u for u, h in nuovo.items() if vecchio.get(u) != h]
    with open(os.path.join(PUBLIC, STATO_FILE), "w", encoding="utf-8") as f:
        json.dump(nuovo, f, indent=0, sort_keys=True)
    with open(DA_INVIARE, "w", encoding="utf-8") as f:
        json.dump(cambiate, f, indent=1)
    print(f"Pagine nella sitemap (senza tag): {len(nuovo)}")
    print(f"Pagine nuove o modificate: {len(cambiate)}")
    for u in cambiate:
        print("  " + u)


def invia():
    try:
        with open(DA_INVIARE, encoding="utf-8") as f:
            urls = json.load(f)
    except FileNotFoundError:
        print("Nessun elenco da inviare.")
        return
    if not urls:
        print("Nessuna pagina nuova o modificata: niente da segnalare.")
        return
    dati = {
        "host": HOST,
        "key": KEY,
        "keyLocation": f"{BASE}{KEY}.txt",
        "urlList": urls,
    }
    req = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(dati).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"},
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f"IndexNow: risposta {r.status}, pagine segnalate {len(urls)}")
    except urllib.error.HTTPError as e:
        # Un errore di IndexNow non deve far fallire la pubblicazione del sito
        print(f"IndexNow: errore {e.code} {e.reason}")
    except urllib.error.URLError as e:
        print(f"IndexNow: impossibile contattare il servizio ({e.reason})")


if __name__ == "__main__":
    {"prepara": prepara, "invia": invia}[sys.argv[1]]()
