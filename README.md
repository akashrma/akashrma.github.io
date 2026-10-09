# Akash Sharma's website

Quartz 5 publishes the Obsidian notes from `../blog` at https://akashrma.github.io/.
The `main` branch contains the site source; GitHub Actions builds and deploys `public/`.

Based on [Quartz's latest v5 source](https://github.com/jackyzha0/quartz/commit/97a2d05f80c4c50534959b1d0d41cc4b3895625e), version 5.0.0.
Setup follows the [installation guide](https://quartz.jzhao.xyz/getting-started/installation)
and [GitHub Pages guide](https://quartz.jzhao.xyz/hosting#github-pages).

## Install and preview

Use Node.js 22 or later and npm 10.9.2 or later. Deployment uses Node.js 24.

```sh
npm ci
npx quartz plugin install --from-config
npx quartz build --serve
```

The preview runs at http://localhost:8080. The committed `content/` snapshot also
works on another computer without the original Obsidian vault.

## Publish edits from Obsidian

Edit the vault in `../blog`, then copy its current content into this repository:

```sh
git switch main
git pull --ff-only origin main
npm run sync-vault
npx quartz build
git add content
git commit -m "Update blog notes"
git push origin main
```

For a vault in another location, use `npm run sync-vault -- /path/to/vault`.
The copy excludes `.obsidian`, `.git`, `.DS_Store`, and `node_modules`.
The vault remains the source of truth; copying refreshes the whole `content/` snapshot.

In the GitHub repository's Settings → Pages, select **GitHub Actions** as the
source. A successful push to `main` then builds and deploys the site automatically.

## Configuration

`quartz.config.yaml` sets the site title, base URL, absolute vault links, KaTeX,
search, graph, backlinks, and profile links. Publication dates come from note
frontmatter. Analytics is disabled.

Quartz is available under the MIT license in `LICENSE.txt`.
