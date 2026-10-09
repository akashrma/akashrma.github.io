# Akash Sharma's notes

Fresh Quartz 5 setup with content from the Obsidian vault at `../blog`.
The website is https://akashrma.github.io/.

## Setup

Use Node.js 24 and npm 10.9.2 or newer.

```sh
npm ci
npx quartz plugin install --from-config
```

## Edit and publish

Edit notes in the `blog` vault. The homepage is `index.md`.
Use YAML frontmatter for `title`, `date` (YYYY-MM-DD), and optional `tags`.
Aliases are optional alternate names, not copies of titles. Article headings
start at H2 because Quartz renders the page title as H1.
Wikilinks, callouts and LaTeX are supported.

```sh
git switch main
git pull --ff-only origin main
npm run sync-vault
npm run preview
# After reviewing the preview:
git add content
git commit -m "Update notes"
git push origin main
```

GitHub Actions builds and deploys pushes to `main`. Obsidian settings are excluded
from the published content. `quartz.config.yaml` starts from Quartz's default
v5 template; the Properties panel is hidden and tags remain visible as links.

Quartz documentation: https://quartz.jzhao.xyz/
