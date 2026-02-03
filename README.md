# AptusFit Landing (Astro + GitHub Pages)

AptusFit landing page built with Astro and deployed via GitHub Pages.

## Local dev

- Install deps: `npm i`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## GitHub Pages deploy

- Workflow: `.github/workflows/deploy.yml` uses `withastro/action@v3` to build and `actions/deploy-pages@v4` to publish.

### Repo settings (one-time)

In the repo that contains this site:

1. GitHub → Settings → Pages
2. Source: **GitHub Actions**

## Custom domain (GoDaddy)

1. Decide the hostname you want (examples):
   - Apex: `aptusfit.com` (root domain)
   - Subdomain: `www.aptusfit.com` (recommended)

2. Update these files to match that hostname:
   - `CNAME` (this repo file)
   - `astro.config.mjs` → `site: "https://<your-domain>"`

3. In GoDaddy DNS:
   - If using `www`: add a **CNAME** record
     - Host: `www`
     - Points to: `<your-github-username>.github.io`
   - If using apex/root: use **A** records (and optionally AAAA) pointing to GitHub Pages IPs.

4. In GitHub → Settings → Pages:
   - Add the same custom domain
   - Enable "Enforce HTTPS" (after cert is issued)

Tip: you can override canonical URLs in CI by setting `PUBLIC_SITE`.
