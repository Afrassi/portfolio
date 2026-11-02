# Portfolio — Imane Afrassi

Portfolio personnel construit avec **React + Vite**, avec le CV PDF accessible depuis le site.

## Prérequis
- Node.js (version LTS recommandée)
- npm

## Lancer le projet en local

```bash
npm install
npm run dev
```

Vite affichera une adresse locale, généralement `http://localhost:5173`.

## Construire la version de production

```bash
npm run build
npm run preview
```

Le site compilé sera généré dans le dossier `dist/`.

## CV
Le CV fourni est placé dans `public/cv.pdf`. Les boutons « Mon CV » et « Télécharger mon CV » permettent de le télécharger directement.

Pour remplacer le CV, remplace simplement `public/cv.pdf` par ton nouveau fichier en conservant ce nom.

## Publier sur GitHub

1. Crée un nouveau dépôt GitHub, par exemple `imane-afrassi-portfolio`.
2. Dans le terminal, depuis ce dossier :

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/TON-IDENTIFIANT/imane-afrassi-portfolio.git
git push -u origin main
```

Remplace `TON-IDENTIFIANT` par ton nom d’utilisateur GitHub.

## Mettre le site en ligne avec Vercel

1. Connecte-toi sur https://vercel.com avec GitHub.
2. Clique sur **Add New → Project**.
3. Importe `imane-afrassi-portfolio`.
4. Garde les paramètres détectés par Vercel (Vite).
5. Clique sur **Deploy**.

Vercel donnera une adresse publique du type `https://imane-afrassi-portfolio.vercel.app`, que tu pourras mettre sur ton CV et LinkedIn.

## À personnaliser avant publication
- Ajouter ton vrai identifiant GitHub dans le lien GitHub de la page.
- Ajouter les URL des dépôts ou démonstrations de tes projets si tu les publies.
- Vérifier que les dates et la disponibilité indiquées sur le portfolio sont toujours exactes.
- Le CV contient des coordonnées personnelles : le fichier sera publiquement téléchargeable depuis le site, comme demandé.
