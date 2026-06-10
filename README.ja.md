[English](README.md) · **日本語** · [한국어](README.ko.md) · [繁體中文](README.zh-TW.md)

# marktile

**任意の Markdown ノートを tugtile のエディタで、[Obsidian](https://obsidian.md) の本物のペインとして開く。**

marktile（mark + tile）は [tugtile](https://github.com/CVERInc/tugtile) ファミリーの単体
エディタです。`## ` マーカーをその場に残したまま見出しが大きくなり、スマート Enter による
リスト継続、**Tab** インデント（タブとスペースを見分ける罫線つき）、2 つのモード
（装飾あり / プレーン等幅）、そしてドラッグで並べ替えできる**目次**を備えます。CJK セーフ、
レンダリング層なし——ただ `.md` をより速く編集するためのもの。

切り替え可能なペインです。ヘッダーのボタンで Obsidian 純正エディタへ、そして tugtile が
入っていればカンバンボードへ移動できます。同じファイル、ロックインなし。

## インストール

- **手動：** [最新リリース](../../releases/latest) から `main.js`・`manifest.json`・
  `styles.css` を vault の `.obsidian/plugins/marktile/` に置き、設定 → コミュニティ
  プラグインで **marktile** を有効化します。
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat)：** ベータプラグインに
  `CVERInc/marktile` を追加します。

**MIT**・CJK フレンドリー。

---

提供：**CVER Inc.** · [cver.net](https://cver.net) · MIT License
