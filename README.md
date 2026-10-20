# marktile

> A Markdown editor for the Mac that leaves your files exactly as it found them — and finds
> anything you have ever written.

marktile opens `.md` files and nothing else. Double-click one in Finder and it opens in a window,
with no vault, library or import step in between. The same file can be read three ways:

- **Seasoned** — the Markdown markers stay in the text, styled, so you see the structure you typed.
- **Rendered** — the document as a reader sees it.
- **Plain** — the raw text.

**Your file stays your file.** Open a document and save it without changes, and you get the same
bytes back: trailing spaces, Windows or Unix line endings — even a mix of both in one file — are all
kept. marktile reads and writes UTF-8 only, and says so instead of guessing at another encoding,
because a wrong guess quietly corrupts the file on the next save.

**Search every document** (⇧⌘F) finds a word across every Markdown file in the folders you let it
read, including the ones Spotlight does not index, with the matching passages on screen. Chinese,
Japanese and Korean need no quoting: a phrase matches as a phrase.

⌘-click a `[[wikilink]]` to open the note it names — a note beside it, or anywhere in the
Obsidian vault it belongs to. When several notes share the name, marktile asks which one.

Menus and the editor speak English, Japanese, Korean and Traditional Chinese.

## Get it

marktile is coming to the Mac App Store. This page will link to it when it is there.

## Support

[Open an issue](https://github.com/CVERInc/marktile/issues/new/choose). Say what you did, what you
expected and what happened instead, with your macOS version and marktile's version (marktile ▸
About marktile). Please don't attach a private document — a few lines that show the problem are
enough.

## Privacy

marktile collects nothing. No account, no analytics, no network requests of its own; your documents
never leave your Mac. The details are in [PRIVACY.md](PRIVACY.md).

## Where the code lives

This repository is the app's home: support, privacy, and release notes. The code is open source
(MIT) in two other places:

- [CVERInc/tile](https://github.com/CVERInc/tile/tree/main/hosts/mac) — the Mac app, next to the
  editor engine it shares with the marktile plugin for Obsidian, so the two cannot drift apart.
- [CVERInc/flintfind](https://github.com/CVERInc/flintfind) — the search engine. It is also a
  command-line tool, `ff`.
