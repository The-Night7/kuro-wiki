# [Nom du mod] — Wiki

Wiki en Next.js 14 (App Router) + Tailwind. Le contenu est piloté par un seul
fichier de données : ajouter une page = ajouter une entrée, pas de nouveau
fichier `.tsx` à créer.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Modifier le contenu

Tout le contenu du wiki vit dans `lib/wiki-data.ts` :

- `modName` : nom du mod, utilisé partout (titre, textes).
- `wiki` : tableau de sections (`label`) contenant des pages
  (`slug`, `title`, `tagline`, `blocks`).
- Chaque page est une liste de `blocks` typés : `p`, `h2`, `h3`, `ul`, `ol`,
  `code`, `note` (info/warn/tip), `kv` (tableau clé/valeur).

Ajouter une page : ajoute un objet dans la bonne section de `wiki`, avec un
`slug` unique. Elle apparaît automatiquement dans la sidebar, la recherche et
sur `/mon-slug` — rien d'autre à toucher.

## Design

- Palette et polices définies dans `tailwind.config.ts` et `app/globals.css`.
- Le cadre à coins (`bracket-frame`) est le seul accent fort de la mise en
  page — il ne sert que pour le hero et la 404, ne pas le dupliquer partout.

## Déployer sur GitHub + Vercel

```bash
git init
git add .
git commit -m "wiki initial"
git branch -M main
git remote add origin https://github.com/<ton-compte>/<ton-repo>.git
git push -u origin main
```

Puis sur [vercel.com](https://vercel.com) :

1. "Add New… → Project"
2. Importe le dépôt GitHub que tu viens de pousser
3. Framework preset : Next.js (détecté automatiquement)
4. Deploy

Chaque `git push` sur `main` redéploie automatiquement.

## Ajouter des images (captures d'écran du mod, etc.)

Place les fichiers dans `public/` puis référence-les avec `/nom-du-fichier.png`
dans un bloc de contenu, ou étends `PageBody.tsx` avec un nouveau type de
bloc `image` si tu veux ça géré depuis `wiki-data.ts`.
