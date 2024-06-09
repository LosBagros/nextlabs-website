# NextLabs

Ročníkový projekt.

Projekt je rozdělen na dvě části:

- Externí api - FastAPI - ovládá docker kontejnery
- Controll panel - Next.js - frontend a správa uživatelů

Databáze slouží jen pro authentifikaci uživatelů.

## Navod na instalaci

Předpokládáme, že backend už běží.

1. Vytvořte si oauth aplikaci na githubu / discordu

- nastavte potřebné redirect uri:
  - `http://localhost:3000/api/auth/callback/github`
  - `http://localhost:3000/api/auth/callback/discord`

2. Zkopírujte soubor `.env.example` do `.env` a doplňte do něj vaše nastavení
3. Nainstalujte knihovny `npm install`
4. Vytvořte prisma clienta `npx prisma generate`
5. Vytvořte databázi `npx prisma db push` (pokud nemáte root práva, bude potřeba vytvořit shadow databázi pro migrace, více v [prisma dokumentaci](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/shadow-database))
6. Spusťte server `npm run dev`
7. Otevřete si aplikaci na `http://localhost:3000`
