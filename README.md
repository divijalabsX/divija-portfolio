# Divija Jain — Portfolio

A React + Vite portfolio with simple, direct navigation. The home page acts as a clear starting point, and each section has its own shareable URL.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Navigation

- Main sections: Home, About, Projects, Experience, Skills and Contact.
- The header remains visible and highlights the current section.
- The home page lists every section so visitors can quickly understand what is available.
- Each project has a dedicated URL under `/work/:slug`. Use the “All projects” link to return to the project list.
- Browser back/forward and direct links are supported through React Router.
- Section changes use a restrained fade/slide transition; reduced-motion preferences are respected.
- Mobile visitors can use the menu button in the header.

## Projects currently listed

1. NexusAI
2. FraudShieldAI
3. BharatExtractAI
4. Automation

The Automation entry is intentionally marked as awaiting project details. Replace its description, contribution, stack and outcome in `src/data/content.js` once the exact use case is confirmed.

## Personalise before publishing

In `src/App.jsx`, update the `profile` object with verified contact links and the final resume path. Place the PDF at `public/Divija-Jain-Resume.pdf`. Do not publish placeholder contact details.

## Content accuracy

Project descriptions avoid unverified performance claims. Add measured metrics only after documenting the dataset, evaluation method and results. Update `src/data/content.js` with verified repository/demo links and implementation details.

## Deploy

The included `vercel.json` rewrites direct route requests to `index.html`, so nested portfolio URLs continue to work when refreshed or shared. Deploy the project root to Vercel after adding verified links and the final résumé.
