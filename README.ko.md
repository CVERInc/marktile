[English](README.md) · [日本語](README.ja.md) · **한국어** · [繁體中文](README.zh-TW.md)

# marktile

**마커를 숨기지 않는 Markdown 에디터: 제목은 커지고, `## `는 제자리에 남습니다. [Obsidian](https://obsidian.md)의 진짜 패널로.**

marktile(mark + tile)은 렌더링 레이어 없이 Markdown을 읽기 좋게 만듭니다: 보이는 것이
파일 그 자체입니다. 제목은 커지고 `## ` 마커는 제자리에. 스마트 Enter로 목록을 이어
쓰고, **Tab** 들여쓰기(tab과 스페이스를 구분하는 룰러 포함), 두 가지 모드
(**양념/담백**), 그리고 드래그로 순서를 바꾸는 **목차**까지. `.md`를 더 빠르게 편집하는,
딱 그만큼의 도구입니다.

전환 가능한 패널입니다: 헤더 버튼으로 Obsidian 네이티브 에디터로 돌아가고,
[tugtile](https://github.com/CVERInc/tugtile)이 설치되어 있으면 카드 테이블로도 갈 수
있습니다. 같은 파일, 락인 없음.

## 하이라이트

- **마커는 숨지 않습니다**: 렌더링 레이어도, live-preview 마법도 없습니다. 보이는
  파일이 디스크의 파일입니다.
- **편집의 편안함**: 스마트 Enter 목록 이어쓰기, 룰러 포함 Tab 들여쓰기, 양념/담백 두
  모드, 목차를 드래그하면 섹션째 이동.
- **휴대폰에서 살아남는 에디터**: 2단 툴바, iOS/iPad 가상 키보드를 따라가는 레이아웃.
- **CJK 우선, 구체적으로**: IME 조합 중에는 재하이라이트를 멈춰 한국어 입력이 끊기지
  않습니다.
- **네트워크 없음, 텔레메트리 없음**: 노트는 vault 밖으로 나가지 않습니다.

## 설치

- **수동:** [최신 릴리스](../../releases/latest)에서 `main.js`, `manifest.json`,
  `styles.css`를 vault의 `.obsidian/plugins/marktile/`에 넣고, 설정 → 커뮤니티
  플러그인에서 **marktile**을 활성화하세요.
- **[BRAT](https://github.com/TfTHacker/obsidian42-brat):** 베타 플러그인 `CVERInc/marktile` 추가.

자매 플러그인: **[tugtile](https://github.com/CVERInc/tugtile)**: Markdown 노트를 위한
카드 테이블. marktile은 거기서 독립해 자란 에디터입니다.

---

**CVER Inc.** · [cver.net](https://cver.net) · MIT License
