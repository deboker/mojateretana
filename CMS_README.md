# Moja Teretana - CMS Integration

Váš projekt je teraz prepojený s jednoduchým CMS backendom, ktorý umožňuje upravovať texty a obrázky na stránkach bez potreby programovania.

## 🎯 Čo bolo vytvorené

### 1. Backend CMS Server (`backend-simple/`)
- **Jednoduchý Node.js server** s Express
- **API endpoints** pre správu stránok
- **Upload obrázkov** s podporou
- **JSON databáza** (data.json) pre jednoduché použitie
- **CORS povolené** pre komunikáciu s frontom

### 2. Upravené React stránky
Tieto stránky teraz načítavajú obsah z CMS:
- ✅ **Terms** (`/obchodne-podmienky`) - Obchodné podmienky
- ✅ **GDPR** (`/gdpr`) - Ochrana osobných údajov
- ✅ **Operating Rules** (`/prevadzkovy-poriadok`) - Prevádzkový poriadok
- ✅ **Home** (budúca integrácia)

### 3. Admin Panel (`backend-simple/public/admin.html`)
- **Jednoduchý editor** pre úpravu stránok
- **Upload obrázkov**
- **Live ukládanie** zmien

## 🚀 Ako spustiť

### 1. Spustite Backend Server

```bash
cd backend-simple
npm install  # už bolo spustené
npm start
```

Server beží na: **http://localhost:1337**

### 2. Spustite React aplikáciu

V novom termináli:

```bash
cd client
npm run dev
```

Aplikácia beží na: **http://localhost:5173**

### 3. Otvorte Admin Panel

Otvorte v prehliadači:
```
http://localhost:1337/admin.html
```

## 📝 Ako upraviť obsah stránok

### Cez Admin Panel (Odporúčané)

1. Otvorte **http://localhost:1337/admin.html**
2. V ľavom menu kliknite na stránku ktorú chcete upraviť
3. Upravte **názov**, **obsah** (HTML formátovanie je podporované)
4. Voliteľne pridajte **obrázok**
5. Kliknite na **"Uložiť zmeny"**
6. Zmeny sa okamžite prejavia na web stránke

### Podporované HTML tagy v obsahu

```html
<h1>Hlavný nadpis</h1>
<h2>Podnadpis</h2>
<p>Odstavec textu</p>
<strong>Tučný text</strong>
<em>Kurzíva</em>
<ul>
  <li>Položka zoznamu</li>
</ul>
<a href="https://example.com">Odkaz</a>
```

### Priamo v data.json (Pre pokročilých)

Súbor: `backend-simple/data.json`

```json
{
  "pages": [
    {
      "id": 1,
      "attributes": {
        "title": "Domov",
        "slug": "home",
        "content": "<h1>Vitajte</h1><p>Obsah...</p>",
        "image": null
      }
    }
  ]
}
```

## 🔧 API Endpoints

Backend poskytuje tieto endpointy:

### Získať všetky stránky
```
GET http://localhost:1337/api/pages
```

### Získať stránku podľa ID
```
GET http://localhost:1337/api/pages/1
```

### Získať stránku podľa slug
```
GET http://localhost:1337/api/pages?filters[slug][$eq]=terms
```

### Aktualizovať stránku
```
PUT http://localhost:1337/api/pages/1
Content-Type: application/json

{
  "data": {
    "title": "Nový nadpis",
    "content": "<p>Nový obsah</p>"
  }
}
```

### Nahrať obrázok
```
POST http://localhost:1337/api/upload
Content-Type: multipart/form-data

files: [file]
```

## 📂 Štruktúra súborov

```
mojateretana/
├── backend-simple/          # CMS Backend
│   ├── server.js           # Express server
│   ├── package.json        # Dependencies
│   ├── data.json           # Databáza obsahu (generované)
│   └── public/
│       ├── admin.html      # Admin panel
│       └── uploads/        # Nahrané obrázky
│
├── client/                 # React aplikácia
│   ├── .env               # VITE_STRAPI_URL=http://localhost:1337
│   └── src/
│       ├── services/
│       │   └── strapi.ts  # API komunikácia
│       └── pages/
│           ├── Terms.tsx         # ✅ CMS integrované
│           ├── GDPR.tsx          # ✅ CMS integrované
│           ├── OperatingRules.tsx # ✅ CMS integrované
│           └── Home.tsx          # Statická (možno integrovať)
```

## 🎨 Prispôsobenie

### Zmena portu backendu

V súbore `backend-simple/.env`:
```
PORT=1337
```

Ak zmeníte port, nezabudnite aktualizovať `client/.env`:
```
VITE_STRAPI_URL=http://localhost:NOVY_PORT
```

### Pridanie novej stránky

1. Pridajte novú stránku do `backend-simple/data.json`:

```json
{
  "id": 5,
  "attributes": {
    "title": "Nová stránka",
    "slug": "nova-stranka",
    "content": "<h1>Obsah</h1>",
    "image": null,
    "publishedAt": "2024-01-01T00:00:00.000Z",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

2. Vytvorte novú React komponentu (napr. `client/src/pages/NovaStranka.tsx`):

```tsx
import { useEffect, useState } from "react";
import { fetchPageBySlug, getStrapiMediaUrl, type PageContent } from "@/services/strapi";

export default function NovaStranka() {
  const [page, setPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      const data = await fetchPageBySlug('nova-stranka');
      setPage(data);
      setLoading(false);
    };
    loadPage();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Načítavam...</p>
      ) : page ? (
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      ) : (
        <p>Stránka nenájdená</p>
      )}
    </div>
  );
}
```

## 🔐 Bezpečnosť

**UPOZORNENIE:** Tento backend je určený pre **lokálny vývoj a testovanie**.

Pre produkciu odporúčame:
- Pridať autentifikáciu do admin panelu
- Použiť databázu (PostgreSQL, MySQL)
- Nastaviť HTTPS
- Validovať vstupy
- Používať Strapi Cloud alebo inú CMS platformu

## 🐛 Riešenie problémov

### Backend sa nespustí

```bash
cd backend-simple
rm -rf node_modules
npm install
npm start
```

### React nevidí zmeny z backendu

1. Skontrolujte, či backend beží na porte 1337
2. Otvorte konzolu prehliadača a skontrolujte chyby CORS
3. Overte `.env` súbor v `client/`:
   ```
   VITE_STRAPI_URL=http://localhost:1337
   ```

### Obrázky sa nenačítavajú

Skontrolujte, či sa obrázky nahrali do `backend-simple/public/uploads/`

## 📚 Ďalšie kroky

1. ✅ Upravte obsah stránok cez admin panel
2. ✅ Pridajte obrázky k stránkam
3. 📝 Zvážte integráciu Home stránky s CMS
4. 🚀 Pri nasadení použite produkčný CMS (Strapi Cloud, Contentful, atď.)

## 💡 Tipy

- **Zálohovanie**: Pravidelne zálohujte `backend-simple/data.json`
- **HTML formátovanie**: V admin paneli používajte HTML tagy pre formátovanie
- **Obrázky**: Používajte optimalizované obrázky (WebP, komprimované JPG/PNG)

## 🤝 Podpora

Ak máte otázky alebo problémy:
1. Skontrolujte konzolu prehliadača
2. Skontrolujte terminál kde beží backend
3. Prečítajte si tento README znova

---

**Vytvorené pomocou:** Node.js + Express + React + TypeScript
**CMS Backend:** Simple Express API
**Frontend:** React s Wouter routing
