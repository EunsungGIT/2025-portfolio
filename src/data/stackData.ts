// 1. 개별 스킬 아이콘의 타입 정의
export interface StackIcon {
    name: string; // 예: "React"
    src: string;  // 예: "/images/stacks/react.png"
    description: string; // 추가: 해당 스택으로 할 수 있는 내용
}

// 2. 카테고리(메뉴) 그룹의 타입 정의
export interface StackCategory {
    menu: '개발' | '디자인' | '배포'; // 카테고리 메뉴
    icons: StackIcon[];
}

// 3. 실제 스택 데이터
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
            description: 'Flexbox, Grid 등을 활용하여 다양한 반응형 UI를 구현합니다.'
        },
        { 
            name: "JavaScript", 
            src: "/images/stacks/javascript.png", 
            description: 'ES6+ 문법을 활용하여 클라이언트 측 동적 로직을 구현합니다.'
        },
        { 
            name: "Sass", 
            src: "/images/stacks/sass.png", 
            description: '변수, 믹스인 등 전처리기 기능을 활용하여 스타일 코드를 체계적으로 관리합니다.'
        },
        { 
            name: "Jquery", 
            src: "/images/stacks/jquery.png", 
            description: '기존 프로젝트 유지보수 및 DOM 조작을 빠르고 효율적으로 처리할 수 있습니다.'
        },
        { 
            name: "Firebase", 
            src: "/images/stacks/firebase.png", 
            description: 'Firestore, Authentication 등을 이용한 간단한 서버리스 애플리케이션 개발 경험이 있습니다.'
        },
        { 
            name: "TypeScript", 
            src: "/images/stacks/typescript.png", 
            description: '정적 타입을 사용하여 코드 안정성과 개발 생산성을 향상시킵니다.'
        },
        { 
            name: "Next.js", 
            src: "/images/stacks/next.png", 
            description: '정적 타입을 사용하여 코드 안정성과 개발 생산성을 향상시킵니다.'
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
            description: '빠른 개발 환경 구축 및 번들링 최적화 경험이 있습니다.'
        },
        ]
    },
];