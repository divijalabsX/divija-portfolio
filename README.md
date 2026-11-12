# Divija Jain — Portfolio

React + Vite portfolio for Divija Jain. Uses a click-to-transition, route-based layout with responsive navigation.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Current project case studies

The Projects section currently features:
1. NexusAI — document intelligence and RAG.
2. FraudShieldAI — UPI transaction anomaly/risk analysis.

BharatExtractAI and Automation are intentionally excluded from the visible project list for now.

Each project case study includes:
- Overview
- Architecture
- Engineering decisions
- Challenges
- Next steps and key takeaways

The technology stack and GitHub/README actions are fixed beneath the project title. Demo and video buttons will appear when actual public URLs are added.

## Update project content

Edit `src/data/content.js`. Each project object contains its description, contribution, technology stack, repository URLs, architecture stages, decisions, challenges and next steps.

Do not publish unverified metrics. For FraudShieldAI, add model evaluation results only after testing against a labelled, representative dataset. For NexusAI, add retrieval and answer-quality metrics only after creating a reproducible evaluation set.

## Personalise before publishing

Update the `profile` object in `src/App.jsx` with verified email, GitHub, LinkedIn and resume details. Add the final PDF under `public/` and set its path in the profile object.

## Deployment

The included `vercel.json` configures SPA route fallback so nested React Router URLs can be refreshed and shared on Vercel.
