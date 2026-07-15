# ChatMate

AI 챗봇 / AI 대화 에이전트 소개 사이트입니다.

정적 HTML, CSS, JavaScript로 구성된 멀티페이지 웹사이트이며, 별도 빌드 없이 Vercel에 바로 배포할 수 있습니다.

## 페이지 구성

- `index.html` - Home
- `features.html` - 기능 소개
- `how-it-works.html` - 도입 절차
- `admin-console.html` - 관리자 콘솔
- `security.html` - 보안 및 거버넌스
- `pricing.html` - 요금제
- `faq.html` - FAQ
- `contact.html` - 문의
- `use-cases/` - 활용 사례 목록 및 상세 페이지
- `assets/site.css`, `assets/site.js` - 공통 스타일 및 스크립트

## 로컬 실행

```bash
cd chatmate
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## Vercel 배포

이 프로젝트는 정적 사이트로 배포됩니다.

- 프로젝트 루트는 `chatmate/` 디렉터리로 지정합니다.
- `vercel.json`이 포함되어 있어 `/features`, `/pricing`, `/use-cases/product-discovery` 같은 확장자 없는 경로도 열립니다.
- 기존 `.html` 경로도 그대로 동작합니다.
