'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import styles from "./page.module.css";

/* DATA */
import { STACKS, StackCategory } from '@/data/stackData';
import { PROJECTS } from '@/data/projectData';

/* SWIPER */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
    /* 기술 */
    const CATEGORIES = STACKS.map(s => s.menu);
    const [selectedCategory, setSelectedCategory] = useState<StackCategory['menu']>('개발');
    const selectedStackGroup = STACKS.find(stack => stack.menu === selectedCategory);
    const filteredStacks = selectedStackGroup ? selectedStackGroup.icons : [];

    /* 최신 프로젝트 */
    const featuredProjects = PROJECTS.slice(0, 3);

    /* SWIPER 이전과 다음 */
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <main>
            {/* INTRO */}
            <section className={styles.introSection}>
                <video 
                    src="/videos/background.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.background}
                />
                <div className={styles.introContainer}>
                    <h2>Front-end Developer</h2>
                    <p>프론트엔드 개발과 퍼블리싱을 주로 다루며, 새로운 기술에 발빠르게 적응하고<br />단기간에 완성도 높은 결과물을 도출하는 <em>"스프린터 개발자"</em> 입니다.</p>
                    <div className={styles.introLink}>
                        <Link href="https://github.com/EunsungGIT" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                            <Image src='/images/stacks/github.png' alt="GitHub" width={20} height={20} />
                            GitHub
                        </Link>
                        <Link href="https://almondine-tadpole-1ef.notion.site/43a32f3f27d34d3e91b3e02dae03469b?source=copy_link" target="_blank" rel="noopener noreferrer" aria-label="Notion Link">
                            <Image src='/images/stacks/notion.png' alt="Notion" width={30} height={30} />
                            Notion
                        </Link>
                    </div>
                </div>
            </section>

            {/* COMPETENCY */}
            <section className={styles.competencySection}>
                <div className={styles.competencyTitle}>
                    <h2>핵심 역량</h2>
                    <p>프로젝트의 품질과 사용자 경험(UX)을 향상시키기 위한 저의 주요 강점입니다.</p> 
                </div>
                <div className={styles.competencyContainer}>
                    <div className={styles.competencyCard}>
                        <div className={styles.competencyIcon}>
                            <Image src="/images/icons/competency1.png" alt="타입스크립트 아이콘" width={30} height={30} />
                        </div>
                        <h3>견고한 TypeScript 기반 개발</h3>
                        <p>
                            **TypeScript 기반의 명확한 타입 정의**와 엄격한 규칙 적용을 통해 런타임에 발생 가능한 잠재적 에러를 **컴파일 단계에서 사전에 방지**합니다. 복잡도가 높은 대규모 애플리케이션 환경에서도 **유지보수 비용을 최소화하고 개발 생산성**을 높여 안정적인 서비스를 제공합니다.
                        </p>
                    </div>
                    <div className={styles.competencyCard}>
                        <div className={styles.competencyIcon}>
                            <Image src="/images/icons/competency2.png" alt="성능 아이콘" width={30} height={30} />
                        </div>
                        <h3>Next.js 기반 고성능 웹 구현</h3>
                        <p>
                            **SSR, SSG, ISR** 등 Next.js의 렌더링 전략을 프로젝트 요구사항에 맞춰 적극적으로 활용합니다. 이를 통해 **초기 로딩 속도(LCP)**와 **검색 엔진 최적화(SEO)** 성능을 극대화하고, 웹 바이탈(Core Web Vitals) 지표를 개선하여 최적의 사용자 경험(UX)을 달성합니다.
                        </p>
                    </div>
                    <div className={styles.competencyCard}>
                        <div className={styles.competencyIcon}>
                            <Image src="/images/icons/competency3.png" alt="컴포넌트 아이콘" width={30} height={30} />
                        </div>
                        <h3>재사용성 높은 컴포넌트 설계</h3>
                        <p>
                            **Atomic Design** 방법론을 참고하여 UI 요소를 기능별, 목적별로 **컴포넌트 단위로 모듈화**합니다. 이로써 코드 중복을 방지하고 일관된 디자인 시스템을 유지하며, 새로운 기능을 개발할 때 **확장성과 예측 가능성**을 높여 개발 속도를 가속화합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* STACK */}
            <section className={styles.stackSection}>
                <div className={styles.stackTitle}>
                    <h2>스킬</h2>
                    <p>주요 기술과 스택 상세</p>
                </div>
                <div className={styles.stackContainer}>
                    <div className={styles.stackMenu}>
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                className={`${selectedCategory === category ? styles.active : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className={styles.stackList}>
                        {filteredStacks.map(stack => (
                            <div key={stack.name} className={styles.stackItem}>
                                <div className={styles.stackIcon}>
                                    <Image 
                                        src={stack.src}
                                        alt={`${stack.name} 아이콘`} 
                                        width={50} 
                                        height={50} 
                                    />
                                </div>
                                <div className={styles.stackContent}>
                                    <h3>{stack.name}</h3>
                                    <p>{stack.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT */}
            <section className={styles.projectSection}>
                <div className={styles.projectContainer}>
                    <div className={styles.projectTop}>
                        <div className={styles.projectTitle}>
                            <h2>최근 작업한 프로젝트</h2>
                            <p>React, Next.js를 사용한 프로젝트부터 퍼블리싱을 이용한 최근 작업 목록입니다.</p>
                        </div>
                        <div className={styles.navigationControl}>
                            <div ref={prevRef} className={styles.customPrevButton}>
                                <Image src="/images/icons/prev.png" alt="이전" width={20} height={20}
                                />
                            </div>
                            <div ref={nextRef} className={styles.customNextButton}>
                                <Image src="/images/icons/next.png" alt="다음" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                    <Swiper
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                        style={{
                            '--swiper-navigation-color': 'var(--primary-color, #aaa)',
                            '--swiper-pagination-color': 'var(--primary-color, #aaa)',
                        } as React.CSSProperties}
                        modules={[Navigation]}
                        className={styles.projectSwiper}
                        slidesPerView={1}
                    >
                        {featuredProjects.map((project) => (
                            <SwiperSlide key={project.id}> 
                                <Link 
                                    href={`/project/${project.id}`} 
                                    className={styles.projectCard}
                                >
                                    <div className={styles.projectImage}>
                                        <Image 
                                            src={project.thumbnail} 
                                            alt={project.title} 
                                            width={600}
                                            height={300}
                                        />
                                    </div>
                                    <div className={styles.projectContent}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <p>{project.headCount}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={styles.projectButton}>
                        <Link href="/project">전체 프로젝트 보기</Link>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className={styles.contactSection}>
                <div className={styles.contactContainer}>
                    <h2>함께 성장하며 최고의 결과를 만들어<br />낼 준비된 프론트엔드 개발자입니다.</h2>
                    <p>빠르게 변화하는 기술 트렌드를 학습하고 적용하는 능력을 바탕으로,<br />팀의 목표 달성에 가장 능동적으로 기여하는 동료가 되겠습니다.</p>
                    <Link href="/contact">CONTACT</Link>
                </div>
            </section>
        </main>
    );
}