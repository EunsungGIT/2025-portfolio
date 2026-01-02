/* 기술 타입 */
export interface StackIcon {
    name: string;
    src: string;
    description: string;
    level: number;
    status: string;
}

/* 기술 메뉴 타입 */
export interface StackCategory {
    menu: '개발' | '디자인' | '배포';
    icons: StackIcon[];
}

/* 기술 데이터 */
export const STACKS: StackCategory[] = [
    {
        menu: "개발",
        icons: [
            {
                name: "React",
                src: "/images/stacks/react.png",
                level: 85,
                status: "Steady Pace",
                description: '컴포넌트 단위의 UI 설계와 상태 관리를 활용하여 개인 포트폴리오 및 웹 서비스를 구축한 경험이 있습니다.'
            },
            {
                name: "Next.js",
                src: "/images/stacks/next.png",
                level: 85,
                status: "Steady Pace",
                description: 'App Router 기반의 SSR 구현 및 문화관광 API를 활용한 데이터 조회 서비스를 개발하며 실무 역량을 키웠습니다.'
            },
            {
                name: "TypeScript",
                src: "/images/stacks/typescript.png",
                level: 80,
                status: "Steady Pace",
                description: '정적 타입 시스템을 도입하여 코드의 안정성을 높이고 유지보수가 용이한 개발 환경을 구축하는 데 익숙합니다.'
            },
            {
                name: "HTML5",
                src: "/images/stacks/html5.png",
                level: 95,
                status: "Top Speed",
                description: '1년 6개월간의 실무 경험을 바탕으로 웹 표준과 시맨틱 마크업을 준수하여 견고한 구조를 설계합니다.'
            },
            {
                name: "CSS3",
                src: "/images/stacks/css3.png",
                level: 95,
                status: "Top Speed",
                description: '반응형 UI 구현 및 CSS 변수를 활용한 디자인 시스템 관리에 능숙하며, 디테일한 스타일링을 추구합니다.'
            },
            {
                name: "JavaScript",
                src: "/images/stacks/javascript.png",
                level: 90,
                status: "Top Speed",
                description: '실무 API 연동 경험을 통해 비동기 처리 및 ES6+ 문법에 능숙하며, 동적 로직 최적화가 가능합니다.'
            },
            {
                name: "API Integration",
                src: "/images/stacks/api.png",
                level: 90,
                status: "Top Speed",
                description: '공공데이터, 지도, OpenAPI(챗봇) 등 다양한 외부 데이터를 연동하여 비즈니스 요구사항을 해결한 경험이 풍부합니다.'
            },
            {
                name: "PHP",
                src: "/images/stacks/php.png",
                level: 75,
                status: "Keep Running",
                description: '실무에서 DB 쿼리문 제어 및 백엔드 연동을 경험하며 풀스택적 흐름에 대한 높은 이해도를 보유하고 있습니다.'
            },
            {
                name: "Firebase",
                src: "/images/stacks/firebase.png",
                level: 70,
                status: "Keep Running",
                description: 'Authentication을 활용한 보안 인증 및 onSnapshot 기반의 실시간 데이터 처리 기능을 직접 구현했습니다.'
            },
            {
                name: "Sass",
                src: "/images/stacks/sass.png",
                level: 65,
                status: "Warm-up",
                description: '스타일 모듈화의 필요성을 이해하며, 프로젝트 가이드에 맞춰 체계적인 스타일 구조를 관리할 수 있습니다.'
            },
            {
                name: "Jquery",
                src: "/images/stacks/jquery.png",
                level: 60,
                status: "Warm-up",
                description: '레거시 코드의 구조를 분석하고 유지보수할 수 있는 기초 역량을 갖추고 있습니다.'
            },
        ]
    },
    {
        menu: "디자인",
        icons: [
            {
                name: "Figma",
                src: "/images/stacks/figma.png",
                level: 85,
                status: "Steady Pace",
                description: '기획 의도를 분석하고 디자인 시스템을 정확히 파악하여 개발 생산성을 높이는 협업에 능숙합니다.'
            },
            {
                name: "Photoshop",
                src: "/images/stacks/photoshop.png",
                level: 65,
                status: "Warm-up",
                description: '디자이너와의 원활한 소통을 위해 툴의 메커니즘을 이해하며, 웹용 이미지 최적화 작업을 수행합니다.'
            },
            {
                name: "Illustrator",
                src: "/images/stacks/illustrator.png",
                level: 60,
                status: "Warm-up",
                description: '간단한 벡터 그래픽 수정 및 아이콘 리소스를 편집하여 개발에 활용할 수 있습니다.'
            },
        ]
    },
    {
        menu: "배포",
        icons: [
            {
                name: "Git & Github",
                src: "/images/stacks/github.png",
                level: 85,
                status: "Steady Pace",
                description: '버전 관리 전략을 준수하며 팀 프로젝트의 코드 통합 및 배포 환경을 주도적으로 관리합니다.'
            },
            {
                name: "Vite",
                src: "/images/stacks/vite.png",
                level: 80,
                status: "Steady Pace",
                description: '최신 번들링 환경을 구축하여 빠른 개발 피드백 루프를 형성하고 성능을 최적화합니다.'
            },
            {
                name: "Notion",
                src: "/images/stacks/notion.png",
                level: 85,
                status: "Steady Pace",
                description: '지식 베이스 구축 및 프로젝트 문서화, 협업 일정 관리를 위해 체계적으로 활용합니다.'
            },
        ]
    },
];