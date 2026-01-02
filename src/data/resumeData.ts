/* RESUME 데이터 */
import { ResumeData, Experience, Education, LinkInfo } from './resumeType';

/* LINK */
const RESUME_LINKS: LinkInfo[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/EunsungGIT',
        iconSrc: '/images/stacks/github.png',
    },
    {
        name: 'Notion',
        url: 'https://almondine-tadpole-1ef.notion.site/43a32f3f27d34d3e91b3e02dae03469b?source=copy_link',
        iconSrc: '/images/stacks/notion.png',
    },
];

/* EXPERIENCE */
const EXPERIENCES_DATA: Experience[] = [
    {
        id: 'showm',
        company: '쇼엠',
        team: '플랫폼운영팀',
        position: '퍼블리셔 / 프론트엔드',
        period: '2024.04 - 2025.11',
        workList: [
            'PHP 기반 웹 및 웹뷰 환경에서 프로모션·서비스 페이지 퍼블리싱 및 기능 구현',
            '단기 일정의 소규모 프로젝트 중심으로 약 200건 내외의 페이지 제작 경험 보유',
            'HTML5, CSS3, JavaScript 기반 반응형 웹 및 크로스 브라우징 대응',
            '공통 UI 및 반복 작업 영역을 정리하여 재사용 가능한 구조로 관리',
            '공공데이터 API 및 지도 API 연동을 통한 동적 콘텐츠 구현',
            'Adminer를 활용한 SQL 쿼리 작성으로 데이터 조회 및 화면 로직 연동',
            'LocalStorage 및 DB 연동을 통한 회원 상태 처리 및 개인화 기능 구현',
        ],
        projects: [
            {
                id: 'showm-dust',
                title: '미세먼지 알리미',
                description: 'Geolocation를 활용하여 사용자의 현재 위치에 가장 가까운 미세먼지 측정소를 찾고, 공공 데이터(API)를 연동하여 실시간 미세먼지 및 오존 농도를 제공하는 서비스입니다. 데이터 기반의 상태 판별 및 UX 구현 경험을 보여줍니다.',
                images: [
                    '/images/works/dust/dust1.png',
                    '/images/works/dust/dust2.png',
                    '/images/works/dust/dust3.png',
                ],
            },
            {
                id: 'showm-cctv',
                title: '고속도로 CCTV',
                description: '지도 API(위도/경도)를 활용하여 고속도로 CCTV 위치에 마커를 동적으로 표시하고, 실시간 교통 정보 API(CCTV 영상, 돌발 정보, 주의 구간)를 연동하여 사용자에게 즉각적인 도로 상황 정보를 제공하는 서비스입니다. 지도 데이터 처리 능력을 강조합니다.',
                images: [
                    '/images/works/cctv/cctv1.png',
                    '/images/works/cctv/cctv2.png',
                    '/images/works/cctv/cctv3.png',
                ],
            },
            {
                id: 'showm-diet',
                title: '다이어트 플래너',
                description: 'Local Storage를 이용해 사용자의 체중, 목표 등을 클라이언트 측에서 관리하고, 기록된 일일 데이터를 Chart.js를 활용하여 주/월별 체중 변화 그래프로 시각화하는 서비스입니다. 데이터 저장 및 시각화 구현 경험을 보여줍니다.',
                images: [
                    '/images/works/diet/diet1.png',
                    '/images/works/diet/diet2.png',
                    '/images/works/diet/diet3.png',
                ],
            },
        ],
    },
];

/* EDUCATION */
const EDUCATION_DATA: Education[] = [
    {
        id: 'green',
        institution: '그린 컴퓨터 아카데미',
        period: '2023.10 - 2024.03',
        major: '프론트엔드 / 퍼블리셔 과정',
        contentList: [
            'HTML5, CSS3(SASS), JavaScript(ES6+)를 활용한 웹 표준 및 접근성 기반 UI 구현 학습',
            '다양한 디바이스 환경을 고려한 반응형 웹 레이아웃 설계 및 구현 실습',
            'JavaScript를 활용한 외부 API(ChatGPT OpenAPI, 공공·지도 API) 연동 및 비동기 처리 기초 학습',
            'Git/GitHub 기반 버전 관리 및 협업 프로세스 실습',
            'VS Code 환경에서의 개발 및 Netlify/Vercel을 활용한 간단한 프로젝트 배포 경험',
            'Figma 및 Photoshop을 활용한 디자인 시안 분석과 퍼블리싱 연계 실습',
            'React 라이브러리 환경 구성 및 컴포넌트 기반 UI 설계 기초 학습',
        ],
    },
];

/* RESUME */
export const RESUME_DATA: ResumeData = {
    name: '김은성',
    phone: '010-4098-9161',
    email: 'developerrdt@google.com',
    summary: 'React, Next.js, TypeScript 기반의 프론트엔드 개발자입니다. 웹 표준 및 웹 접근성을 준수하는 탄탄한 퍼블리싱 기본기를 바탕으로 데이터 처리 및 API 연동 경험을 통해 프로젝트의 완성도와 비즈니스 성과 향상에 기여합니다.',
    links: RESUME_LINKS,
    skillStacks: [
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React',
        'Next.js', 'Redux', 'Sass', 'Tailwind CSS', 'Figma', 'Git', 'Vercel'
    ],
    experience: EXPERIENCES_DATA,
    education: EDUCATION_DATA,
};