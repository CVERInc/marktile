**English** · [日本語](README.ja.md) · [한국어](README.ko.md) · [繁體中文](README.zh-TW.md)

# marktile

**A Markdown editor that never hides your markers — headings grow while `## ` stays put. A real [Obsidian](https://obsidian.md) pane.**

marktile (mark + tile) makes Markdown comfortable to read without a rendering layer:
what you see is the literal file. Headings grow while the `## ` markers stay in place,
smart-Enter continues lists, **Tab** indents with a tab-vs-space ruler, two modes
(**Seasoned / Plain**), and a drag-reorderable **table of contents**. Just a faster way
to edit `.md`.

It's a switchable pane: a header button hops back to Obsidian's native editor, and — if
[tugtile](https://github.com/CVERInc/tugtile) is installed — over to the card table.
Same file, no lock-in.

## Highlights

- **The markers never hide** — no rendering layer, no live-preview magic; the file you
  see is the file on disk.
- **Editing comforts** — smart-Enter list continuation, Tab indentation with a ruler,
  Seasoned / Plain modes, and a table of contents you can drag to move whole sections.
- **An editor that survives phones** — two-row toolbar, virtual-keyboard-aware layout
  on iOS/iPad.
- **CJK-first, concretely** — re-highlighting waits while your IME is composing, so CJK
  input is never interrupted.
- **No network, no telemetry** — your notes never leave your vault.

## Install

- **Manual:** from the [latest release](../../releases/latest), download `main.js`,
  `manifest.json`, and `styles.css` into your vault's `.obsidian/plugins/marktile/` folder,
  then enable **marktile** in Settings → Community plugins.
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat):** add the beta plugin `CVERInc/marktile`.

Sister plugin: **[tugtile](https://github.com/CVERInc/tugtile)** — a card table for your
Markdown notes; marktile is its editor, grown standalone.

---

Published by **CVER Inc.** · [cver.net](https://cver.net) · MIT License.
