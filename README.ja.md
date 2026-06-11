[English](README.md) · **日本語** · [한국어](README.ko.md) · [繁體中文](README.zh-TW.md)

# marktile

**マーカーを隠さない Markdown エディタ：見出しは大きくなり、`## ` はその場に残ります。[Obsidian](https://obsidian.md) の本物のペインとして。**

marktile（mark + tile）は、レンダリング層なしで Markdown を読みやすくします：見えて
いるのはファイルそのものです。見出しは大きく、`## ` マーカーはその場に。スマート Enter
でリストを継続、**Tab** インデント（tab とスペースを見分けるルーラー付き）、2 つの
モード（**アジツケ／プレーン**）、そしてドラッグで並べ替えられる**目次**。`.md` を
より速く編集する、それだけの道具です。

切り替え可能なペインです：ヘッダーのボタンで Obsidian ネイティブエディタへ戻れて、
[tugtile](https://github.com/CVERInc/tugtile) があればカードテーブルへも。同じファイル、
ロックインなし。

## ハイライト

- **マーカーは隠れない**：レンダリング層も live-preview の魔法もなし。見えている
  ファイルが、ディスク上のファイルです。
- **編集の快適さ**：スマート Enter のリスト継続、ルーラー付き Tab インデント、
  アジツケ／プレーンの 2 モード、目次のドラッグでセクションごと移動。
- **スマホで生き残るエディタ**：2 段ツールバー、iOS／iPad の仮想キーボードに追従する
  レイアウト。
- **CJK ファースト、具体的に**：IME の変換中は再ハイライトを待機し、日本語入力を決して
  中断しません。
- **ネットワークなし、テレメトリなし**：ノートが vault の外に出ることはありません。

## インストール

- **手動：** [最新リリース](../../releases/latest) から `main.js`・`manifest.json`・
  `styles.css` を vault の `.obsidian/plugins/marktile/` に置き、設定 → コミュニティ
  プラグインで **marktile** を有効化。
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat)：** ベータプラグイン `CVERInc/marktile` を追加。

姉妹プラグイン：**[tugtile](https://github.com/CVERInc/tugtile)**：Markdown ノートのための
カードテーブル。marktile は、そこから独立して育ったエディタです。

---

**CVER Inc.** · [cver.net](https://cver.net) · MIT License
