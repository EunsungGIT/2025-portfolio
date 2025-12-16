export interface StackIcon {
    name: string;
    src: string;
    description: string;
}

export interface StackCategory {
    menu: '개발' | '디자인' | '배포';
    icons: StackIcon[];
}

export const STACKS: StackCategory[] = [
    {
        menu: "개발",
        icons: [
        { 
            name: "React", 
            src: "/images/stacks/react.png", 
            description: '컴포넌트 기반 UI 개발 및 효율적인 상태 관리 능력을 갖추고 있습니다.'
        },
        { 
            name: "PHP", 
            src: "/images/stacks/php.png", 
            description: '레거시 시스템 유지보수 및 백엔드 연동 경험을 보유하고 있습니다.'
        },
        { 
            name: "HTML5", 
            src: "/images/stacks/html5.png", 
            description: '웹 접근성(A11y)과 시맨틱 마크업을 준수하여 구조를 설계합니다.'
        },
        { 
            name: "CSS3", 
            src: "/images/stacks/css3.png", 
            description: 'Flexbox, Grid 등을 활용한 반응형 UI 구현은 물론, CSS 변수를 이용한 디자인 토큰 관리 및 효율적인 스타일링을 추구합니다.'
        },
        { 
            name: "JavaScript", 
            src: "/images/stacks/javascript.png", 
            description: '비동기 처리(Promise, async/await) 및 ES6+ 최신 문법을 활용하여 클라이언트 측 동적 로직을 최적화하고 구현합니다.'
        },
        { 
            name: "Sass", 
            src: "/images/stacks/sass.png", 
            description: '변수, 믹스인, extends 등 전처리기 기능을 활용하여 스타일 코드를 모듈화하고 체계적인 구조로 관리합니다. (BEM 방법론 등)'
        },
        { 
            name: "Jquery", 
            src: "/images/stacks/jquery.png", 
            description: '레거시 프로젝트의 유지보수 및 단순 DOM 조작에 능숙하며, 브라우저 호환성 문제를 효율적으로 처리할 수 있습니다.'
        },
        { 
            name: "Firebase", 
            src: "/images/stacks/firebase.png", 
            description: 'Firestore, Authentication 등을 이용한 간단한 서버리스 애플리케이션 개발 경험이 있습니다.'
        },
        { 
            name: "TypeScript", 
            src: "/images/stacks/typescript.png", 
            description: '정적 타입 시스템을 도입하여 런타임 오류를 사전에 방지하고, 대규모 프로젝트의 코드 안정성과 유지보수성을 극대화합니다.'
        },
        { 
            name: "Next.js", 
            src: "/images/stacks/next.png", 
            description: 'App Router를 활용한 SSR/SSG/ISR 구현 및 SEO 최적화, 그리고 서버 컴포넌트 기반의 고성능 애플리케이션 개발 경험을 보유하고 있습니다.'
        },
        { 
            name: "API", 
            src: "/images/stacks/api.png", 
            description: 'Kakao, Naver 지도 API와 같은 외부 서비스 API를 활용하여 위치 기반 서비스를 구축할 수 있습니다. 또한, OpenAPI 기반의 챗봇 및 공공 데이터 API를 연동하여 데이터 수집 및 서비스 통합 기능을 구현한 경험이 있습니다.'
        },
        ]
    },
    {
        menu: "디자인",
        icons: [
        { 
            name: "Figma", 
            src: "/images/stacks/figma.png", 
            description: '디자인 파일을 분석하고 디자인 시스템을 이해하여 개발에 적용합니다.'
        },
        { 
            name: "Photoshop", 
            src: "/images/stacks/photoshop.png", 
            description: '웹용 이미지 편집 및 최적화 작업을 수행할 수 있습니다.'
        },
        { 
            name: "Illustrator", 
            src: "/images/stacks/illustrator.png", 
            description: '간단한 벡터 그래픽 및 아이콘 디자인 작업을 처리할 수 있습니다.'
        },
        ]
    },
    {
        menu: "배포",
        icons: [
        { 
            name: "Git", 
            src: "/images/stacks/git.png", 
            description: '버전 관리 및 협업을 위해 Git Flow 기반의 브랜치 전략을 준수합니다.'
        },
        { 
            name: "Github", 
            src: "/images/stacks/github.png", 
            description: '개인 및 팀 프로젝트 관리를 위해 Github를 능숙하게 사용합니다.'
        },
        { 
            name: "Vite", 
            src: "/images/stacks/vite.png", 
            description: '빠른 개발 환경 구축 및 번들링 최적화 경험이 있습니다.'
        },
        { 
            name: "Notion", 
            src: "/images/stacks/notion.png", 
            description: '프로젝트 문서화, 일정 관리 및 협업을 위해 Notion을 활용하여 효율성을 높입니다.' // Notion 설명 수정
        },
        ]
    },
];