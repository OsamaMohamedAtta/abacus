# Nordisk Beredskab — dansk Shopify-tema

Et komplet Shopify-tema (Online Store 2.0) på dansk, inspireret af moderne
beredskabs-webshops (hero-banner, USP-bjælke, udvalgte produkter, "hvorfor os"-sektion,
kundeanmeldelser og nyhedsbrev). Farver: jordnær off-white baggrund, mørkegrøn/sort
og brændt orange som accentfarve.

## Sådan installerer du temaet

1. Zip **indholdet** af denne mappe (mapperne `assets`, `config`, `layout`, `locales`,
   `sections`, `snippets`, `templates` skal ligge i roden af zip-filen):

   ```bash
   cd shopify-theme
   zip -r ../nordisk-beredskab.zip assets config layout locales sections snippets templates
   ```

2. I Shopify admin: **Webshop → Temaer → Tilføj tema → Upload zip-fil**.
3. Klik **Tilpas** for at vælge billeder, menuer og tekster — al demo-tekst er
   allerede på dansk.
4. Sæt butikkens sprog til dansk under **Indstillinger → Sprog**, og valutaen til DKK
   under **Indstillinger → Generelt**.

Alternativt med Shopify CLI:

```bash
cd shopify-theme
shopify theme push --store DIN-BUTIK.myshopify.com
```

## Anbefalede produkter (som forbilledet)

Opret produkterne i admin og læg dem i en kollektion, som vælges i sektionen
"Udvalgte produkter" på forsiden:

- **HYDRA-X1 vandfilter-sugerør (1.500 L)** — 4-trins mikrofiltrering uden strøm,
  0,1 mikron hollow-fiber-membran, fjerner 99,999999 % af bakterier. Vejer kun 57 g.
- **THERMA-X1 nødsovepose (bivy)** — fastholder 90 % af kropsvarmen, fra −40 °C
  til +49 °C, vejer 113 g og fylder ingenting i handskerummet.
- **Familiepakken til strømsvigt** — solcelle-powerbank, 2 nødsoveposer,
  2 paracord-armbånd og teststrimler til drikkevand.

## Struktur

- `layout/theme.liquid` — grundlayout
- `templates/*.json` — forside, produkt, kollektion, kurv, sider, kontakt, blog, søgning, 404
- `sections/` — alle sektioner (kan omarrangeres i temaeditoren)
- `locales/da.default.json` — danske tekster som standardsprog
- `assets/base.css`, `assets/theme.js` — styling og let JavaScript (mobilmenu, variantvalg)
