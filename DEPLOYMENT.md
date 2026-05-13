# Deploy to Vercel

## Quick Start

### Via GitHub (Recommended)

1. **Commit and push:**
   ```bash
   git add .
   git commit -m "Flatten to single app structure"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New" → "Project"
   - Import your GitHub repo (`jorgepedret/School-of-Conscious-Communication`)
   - Vercel auto-detects everything
   - Click "Deploy"

3. **Auto-deploy on push:**
   - Every push to `main` now deploys to production

### Via Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

## What Gets Deployed

- **`/`** → Main React app (from `src/` and `index.html`)
- **`/card-renderer/`** → Static HTML (from `public/card-renderer/`)
- **`/time-translator/`** → Static HTML (from `public/time-translator/`)

Vite automatically copies everything in `public/` to the output, so all three apps are included in one simple build.

## Local Testing

```bash
npm run build   # Build everything
npm run preview # Preview the full production build locally
```

Then open http://localhost:4173/ and test all routes.

## After Deploy

1. Your custom subdomain: `inflow-matrix.vercel.app`
2. (Optional) Add a custom domain in Vercel Settings → Domains

Done! 🚀
