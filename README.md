# 🌸 Hanami — Boutique e-commerce sakura

Hanami est une boutique e-commerce de démonstration sur le thème des cerisiers en
fleurs japonais : douceur, positivité et bonne humeur. Elle propose des thés,
de la papeterie, des bijoux, des bougies et des accessoires, avec un panier
fonctionnel côté client.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Panier persistant via React Context + `localStorage`

## Démarrer le projet

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Accueil (hero animé de pétales, collections, best-sellers, avis, newsletter)
- `/boutique` — Catalogue complet avec filtres par catégorie
- `/boutique/[slug]` — Fiche produit détaillée
- `/panier` — Panier avec quantités, sous-total et livraison
- `/a-propos` — Histoire et valeurs de la marque
- `/contact` — Formulaire de contact

> Le paiement n'est pas connecté à un prestataire réel : il s'agit d'une
> maquette fonctionnelle destinée à la démonstration.

## Scripts

```bash
npm run dev     # serveur de développement
npm run build   # build de production
npm run start   # démarre le build de production
npm run lint    # ESLint
```
