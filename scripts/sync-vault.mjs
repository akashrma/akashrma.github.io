import { cp, mkdir, readdir, rename, rm, stat } from "node:fs/promises"
import { basename, dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const source = resolve(process.argv[2] ?? join(root, "..", "blog"))
const content = join(root, "content")
const staging = join(root, ".quartz-cache", "vault-sync")
const ignored = new Set([".obsidian", ".git", ".DS_Store", "node_modules"])
if (source === root || source === content || source.startsWith(`${content}/`)) {
  throw new Error("Choose the Obsidian vault outside this repository.")
}
if (!(await stat(join(source, "index.md"))).isFile()) {
  throw new Error(`Vault homepage missing: ${source}/index.md`)
}
await rm(staging, { recursive: true, force: true })
await mkdir(staging, { recursive: true })
for (const name of await readdir(source)) {
  if (!ignored.has(name)) {
    await cp(join(source, name), join(staging, name), {
      recursive: true,
      filter: path => !ignored.has(basename(path)),
    })
  }
}
await rm(content, { recursive: true, force: true })
await rename(staging, content)
console.log(`Synced vault: ${source}`)
