# my-docs

Docusaurus + Redocusaurus starter (no CLI scaffold used).

## Before you push

1. Replace `openapi/my-api.yaml` with your real OpenAPI spec (keep the filename or update
   `docusaurus.config.js` -> `plugins[0][1].specs[0].spec`).
2. In `docusaurus.config.js`, replace:
   - `url`: `https://YOUR-ORG.github.io`
   - `baseUrl`: `/YOUR-REPO/`
   - `organizationName` / `projectName`
   - GitHub link in `themeConfig.navbar.items`
## Zero local tooling

No Node, npm, or Java needed on your machine. Just edit the text files above,
then:

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/YOUR-REPO.git
git push -u origin main
```

`.github/workflows/deploy.yml` runs `npm install` and `npm run build` entirely
on GitHub's runner — there's no committed `package-lock.json`, so nothing
needs to be generated locally first.

In your repo: **Settings → Pages → Source → GitHub Actions**. The first push
to `main` triggers the build and deploy.

## Local dev (optional, not required)

If you ever want to preview locally:

```bash
npm install
npm start
```
