# 🌟 [2025 프론트엔드 포트폴리오]

## 🚀 1. 프로젝트 개요 (Project Overview)

[2025 프론트엔드 포트폴리오]는 개발자로서 저의 핵심 역량, 기술 스택, 그리고 주요 프로젝트 경험을 시각적으로 효과적으로 전달하기 위해 Next.js 환경에서 구축한 **개인 포트폴리오 웹사이트**입니다.

### 목표

* **성능 중심 설계**: Next.js App Router를 활용하여 Core Web Vitals 지표를 최적화하고 사용자 경험을 극대화합니다.
* **타입 안전성 확보**: TypeScript를 전면 도입하여 대규모 코드를 위한 견고한 개발 환경을 구축합니다.
* **접근성 및 반응성**: 모든 디바이스(PC, Tablet, Mobile)에서 최적화된 화면을 제공하며, 사용자 친화적인 동적 UI를 구현합니다.

## 🛠️ 2. 기술 스택 (Tech Stack)

| 분류 | 기술 스택 |
| :--- | :--- |
| **Frontend** | `Next.js (App Router)` / `TypeScript` / `React` |
| **Styling** | `CSS Modules` / `반응형 웹` |
| **Libraries** | `Framer Motion (애니메이션)` / `Swiper.js (슬라이드)` |
| **Deployment** | `Vercel` / `GitHub` |

## 💡 3. 기술적 도전 및 해결 과정 (Technical Challenges & Solutions)

### 3-1. Next.js Server Component 환경에서의 비동기 `params` 처리

**문제 인식**
프로젝트 상세 페이지(`/project/[id]`)에서 URL 파라미터(`params`)를 Server Component 내부에서 사용하여 데이터를 조회하려 할 때, Next.js의 비동기 처리 구조로 인해 `params` 객체가 **"React Promise" 타입**으로 래핑되어 ID에 직접 접근할 수 없었습니다.