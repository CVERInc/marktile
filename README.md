# marktile

[English](#english) · [日本語](#日本語) · [한국어](#한국어) · [繁體中文](#繁體中文)

---

## English

**A Markdown editor that never hides your markers — headings grow while `## ` stays put. A real [Obsidian](https://obsidian.md) pane.**

marktile (mark + tile) makes Markdown comfortable to read without a rendering layer:
what you see is the literal file. Headings grow while the `## ` markers stay in place,
smart-Enter continues lists, **Tab** indents with a tab-vs-space ruler, two modes
(**Seasoned / Plain**), and a drag-reorderable **table of contents**. Just a faster way
to edit `.md`.

It's a switchable pane: a header button hops back to Obsidian's native editor, and — if
[tugtile](https://github.com/CVERInc/tugtile) is installed — over to the card table.
Same file, no lock-in.

### Highlights

- **The markers never hide** — no rendering layer, no live-preview magic; the file you
  see is the file on disk.
- **Editing comforts** — smart-Enter list continuation, Tab indentation with a ruler,
  Seasoned / Plain modes, and a table of contents you can drag to move whole sections.
- **An editor that survives phones** — two-row toolbar, virtual-keyboard-aware layout
  on iOS/iPad.
- **CJK-first, concretely** — re-highlighting waits while your IME is composing, so CJK
  input is never interrupted.
- **No network, no telemetry** — your notes never leave your vault.

### Install

- **Manual:** from the [latest release](../../releases/latest), download `main.js`,
  `manifest.json`, and `styles.css` into your vault's `.obsidian/plugins/marktile/` folder,
  then enable **marktile** in Settings → Community plugins.
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat):** add the beta plugin `CVERInc/marktile`.

Sister plugin: **[tugtile](https://github.com/CVERInc/tugtile)** — a card table for your
Markdown notes; marktile is its editor, grown standalone.

**[Read more on cver.net →](https://cver.net/oss/marktile)**

---

## 日本語

**マーカーを隠さない Markdown エディタ：見出しは大きくなり、`## ` はその場に残ります。[Obsidian](https://obsidian.md) の本物のペインとして。**

marktile（mark + tile）は、レンダリング層なしで Markdown を読みやすくします：見えて
いるのはファイルそのものです。見出しは大きく、`## ` マーカーはその場に。スマート Enter
でリストを継続、**Tab** インデント（tab とスペースを見分けるルーラー付き）、2 つの
モード（**アジツケ／プレーン**）、そしてドラッグで並べ替えられる**目次**。`.md` を
より速く編集する、それだけの道具です。

切り替え可能なペインです：ヘッダーのボタンで Obsidian ネイティブエディタへ戻れて、
[tugtile](https://github.com/CVERInc/tugtile) があればカードテーブルへも。同じファイル、
ロックインなし。

### ハイライト

- **マーカーは隠れない**：レンダリング層も live-preview の魔法もなし。見えている
  ファイルが、ディスク上のファイルです。
- **編集の快適さ**：スマート Enter のリスト継続、ルーラー付き Tab インデント、
  アジツケ／プレーンの 2 モード、目次のドラッグでセクションごと移動。
- **スマホで生き残るエディタ**：2 段ツールバー、iOS／iPad の仮想キーボードに追従する
  レイアウト。
- **CJK ファースト、具体的に**：IME の変換中は再ハイライトを待機し、日本語入力を決して
  中断しません。
- **ネットワークなし、テレメトリなし**：ノートが vault の外に出ることはありません。

### インストール

- **手動：** [最新リリース](../../releases/latest) から `main.js`・`manifest.json`・
  `styles.css` を vault の `.obsidian/plugins/marktile/` に置き、設定 → コミュニティ
  プラグインで **marktile** を有効化。
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat)：** ベータプラグイン `CVERInc/marktile` を追加。

姉妹プラグイン：**[tugtile](https://github.com/CVERInc/tugtile)**：Markdown ノートのための
カードテーブル。marktile は、そこから独立して育ったエディタです。

**[詳しくは cver.net で →](https://cver.net/ja-jp/oss/marktile)**

---

## 한국어

**마커를 숨기지 않는 Markdown 에디터: 제목은 커지고, `## `는 제자리에 남습니다. [Obsidian](https://obsidian.md)의 진짜 패널로.**

marktile(mark + tile)은 렌더링 레이어 없이 Markdown을 읽기 좋게 만듭니다: 보이는 것이
파일 그 자체입니다. 제목은 커지고 `## ` 마커는 제자리에. 스마트 Enter로 목록을 이어
쓰고, **Tab** 들여쓰기(tab과 스페이스를 구분하는 룰러 포함), 두 가지 모드
(**양념/담백**), 그리고 드래그로 순서를 바꾸는 **목차**까지. `.md`를 더 빠르게 편집하는,
딱 그만큼의 도구입니다.

전환 가능한 패널입니다: 헤더 버튼으로 Obsidian 네이티브 에디터로 돌아가고,
[tugtile](https://github.com/CVERInc/tugtile)이 설치되어 있으면 카드 테이블로도 갈 수
있습니다. 같은 파일, 락인 없음.

### 하이라이트

- **마커는 숨지 않습니다**: 렌더링 레이어도, live-preview 마법도 없습니다. 보이는
  파일이 디스크의 파일입니다.
- **편집의 편안함**: 스마트 Enter 목록 이어쓰기, 룰러 포함 Tab 들여쓰기, 양념/담백 두
  모드, 목차를 드래그하면 섹션째 이동.
- **휴대폰에서 살아남는 에디터**: 2단 툴바, iOS/iPad 가상 키보드를 따라가는 레이아웃.
- **CJK 우선, 구체적으로**: IME 조합 중에는 재하이라이트를 멈춰 한국어 입력이 끊기지
  않습니다.
- **네트워크 없음, 텔레메트리 없음**: 노트는 vault 밖으로 나가지 않습니다.

### 설치

- **수동:** [최신 릴리스](../../releases/latest)에서 `main.js`, `manifest.json`,
  `styles.css`를 vault의 `.obsidian/plugins/marktile/`에 넣고, 설정 → 커뮤니티
  플러그인에서 **marktile**을 활성화하세요.
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat):** 베타 플러그인 `CVERInc/marktile` 추가.

자매 플러그인: **[tugtile](https://github.com/CVERInc/tugtile)**: Markdown 노트를 위한
카드 테이블. marktile은 거기서 독립해 자란 에디터입니다.

**[cver.net에서 더 보기 →](https://cver.net/ko-kr/oss/marktile)**

---

## 繁體中文

**一個不把標記藏起來的 Markdown 編輯器：標題會放大，`## ` 留在原地。是 [Obsidian](https://obsidian.md) 的真分頁。**

marktile（mark + tile）讓 Markdown 變得好讀，卻不靠渲染層：你看到的就是檔案本身。標題
放大、`## ` 標記不動，智慧 Enter 接續清單，**Tab** 縮排（附分辨 tab 與空白的標尺），
兩種模式（**調味／原味**），加上可拖拉重排的**目錄**。就是更快地編輯 `.md`。

它是一個可切換的分頁：header 上的鈕能跳回 Obsidian 原生編輯器，若有裝
[tugtile](https://github.com/CVERInc/tugtile)，還能切到牌桌。同一份檔案，沒有鎖定。

### 亮點

- **標記永不躲藏**：沒有渲染層、沒有 live-preview 魔法，你看到的檔案就是磁碟上的檔案。
- **編輯的舒適**：智慧 Enter 接續清單、Tab 縮排附標尺、調味／原味兩種模式、拖拉目錄
  就能搬動整個章節。
- **在手機上活得下來的編輯器**：雙排工具列、iOS／iPad 虛擬鍵盤自動避讓。
- **CJK 優先，而且講得出細節**：IME 組字期間暫停重新上色，中文輸入絕不被打斷。
- **不連網、零遙測**：你的筆記永遠不會離開 vault。

### 安裝

- **手動：** 從[最新 release](../../releases/latest) 下載 `main.js`、`manifest.json`、
  `styles.css` 放進 vault 的 `.obsidian/plugins/marktile/`，然後在 設定 → 社群外掛 啟用
  **marktile**。
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat)：** 加入 beta 外掛 `CVERInc/marktile`。

姊妹外掛：**[tugtile](https://github.com/CVERInc/tugtile)**：為你的 Markdown 筆記開一張
牌桌；marktile 就是從那裡長成獨立外掛的編輯器。

**[在 cver.net 了解詳情 →](https://cver.net/zh-tw/oss/marktile)**

---

Published by **CVER Inc.** · [cver.net](https://cver.net) · MIT License.
