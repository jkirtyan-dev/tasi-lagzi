# Tasi & Napsi — esküvői meglepetésoldal

Önálló, magyar nyelvű landing page. Nincs szükség telepítésre vagy buildre: az `index.html` böngészőben megnyitható, illetve a mappa bármely statikus tárhelyre feltölthető.

## A végleges videó cseréje

Az `assets/tasi-napsi-video.mp4` jelenleg a kapott, még nem végleges videó. A végleges videót ugyanilyen néven másold a helyére. Ha más fájlnevet vagy formátumot használsz, az `index.html` `<video>` elemében lévő `<source src="…" type="…">` sort is módosítsd.

## Megnyitás helyben

Nyisd meg az `index.html` fájlt, vagy a mappában indíts egy egyszerű szervert:

```sh
python3 -m http.server 8000
```

Ezután nyisd meg: `http://localhost:8000`.
