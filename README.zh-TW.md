[English](README.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · **繁體中文**

# marktile

**一個不把標記藏起來的 Markdown 編輯器：標題會放大，`## ` 留在原地。是 [Obsidian](https://obsidian.md) 的真分頁。**

marktile（mark + tile）讓 Markdown 變得好讀，卻不靠渲染層：你看到的就是檔案本身。標題
放大、`## ` 標記不動，智慧 Enter 接續清單，**Tab** 縮排（附分辨 tab 與空白的標尺），
兩種模式（**調味／原味**），加上可拖拉重排的**目錄**。就是更快地編輯 `.md`。

它是一個可切換的分頁：header 上的鈕能跳回 Obsidian 原生編輯器，若有裝
[tugtile](https://github.com/CVERInc/tugtile)，還能切到牌桌。同一份檔案，沒有鎖定。

## 亮點

- **標記永不躲藏**：沒有渲染層、沒有 live-preview 魔法，你看到的檔案就是磁碟上的檔案。
- **編輯的舒適**：智慧 Enter 接續清單、Tab 縮排附標尺、調味／原味兩種模式、拖拉目錄
  就能搬動整個章節。
- **在手機上活得下來的編輯器**：雙排工具列、iOS／iPad 虛擬鍵盤自動避讓。
- **CJK 優先，而且講得出細節**：IME 組字期間暫停重新上色，中文輸入絕不被打斷。
- **不連網、零遙測**：你的筆記永遠不會離開 vault。

## 安裝

- **手動：** 從[最新 release](../../releases/latest) 下載 `main.js`、`manifest.json`、
  `styles.css` 放進 vault 的 `.obsidian/plugins/marktile/`，然後在 設定 → 社群外掛 啟用
  **marktile**。
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat)：** 加入 beta 外掛 `CVERInc/marktile`。

姊妹外掛：**[tugtile](https://github.com/CVERInc/tugtile)**：為你的 Markdown 筆記開一張
牌桌；marktile 就是從那裡長成獨立外掛的編輯器。

---

**CVER Inc.** 出品 · [cver.net](https://cver.net) · MIT License
