'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import styles from "./page.module.css";
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/layout/ScrollStagger';

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
                <motion.div 
                    className={styles.introContainer}
                    initial={{ 
                        opacity: 0, 
                        x: "-50%",
                        y: "-40%"
                    }}
                    animate={{ 
                        opacity: 1, 
                        x: "-50%",
                        y: "-50%"
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
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
                </motion.div>
            </section>

            {/* COMPETENCY */}
            <section className={styles.competencySection}>
                <motion.div 
                    className={styles.competencyTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>핵심 역량</h2>
                    <p>프로젝트의 품질과 사용자 경험(UX)을 향상시키기 위한 주요 강점</p> 
                </motion.div>

                <motion.div 
                    className={styles.competencyContainer}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.div className={styles.competencyCard} variants={itemVariants}>
                        <div className={styles.competencyIcon}>
                            <Image src="/images/icons/competency1.png" alt="아이콘" width={30} height={30} />
                        </div>
                        <h3>탄탄한 퍼블리싱 기반의 구조적 설계</h3>
                        <p>
                            HTML5/CSS3/JS의 퍼블리싱 기본기를 바탕으로 디자인을 완벽하게 재현하며, PHP의 `include` 구조에서 얻은 통찰을 React의 컴포넌트 아키텍처로 확장했습니다. 단순한 UI 구현을 넘어 코드의 재사용성과 유지보수성을 극대화하는 구조적인 모듈화 설계에 강점이 있습니다.
                        </p>
                    </motion.div>

                    <motion.div className={styles.competencyCard} variants={itemVariants}>
                        <div className={styles.competencyIcon}>
                            <Image src="/images/icons/competency2.png" alt="아이콘" width={30} height={30} />
                        </div>
                        <h3>데이터 흐름을 이해하는 동적 웹 구현</h3>
                        <p>
                            공공데이터 및 지도 API 등 다양한 API를 fetch로 직접 다룬 경험을 통해 데이터의 요청과 수신, 특히 비동기 파라미터(params) 처리를 명확히 이해하고 있습니다. 이러한 데이터 흐름에 대한 이해를 Next.js의 파일 기반 라우팅에 접목하여 최적화된 사용자 경험(UX)을 구축합니다.
                        </p>
                    </motion.div>

                    <motion.div className={styles.competencyCard} variants={itemVariants}>
                        <div className={styles.competencyIcon}>
                            <Image src="/images/icons/competency3.png" alt="아이콘" width={30} height={30} />
                        </div>
                        <h3>백엔드 협업 지향적 기술 스택</h3>
                        <p>
                            Adminer 환경에서 SQL(SELECT, INSERT 등)을 직접 다루며 데이터베이스를 관리해본 경험은 백엔드 개발자와의 원활한 소통을 가능하게 합니다. 여기에 TypeScript의 타입 안정성을 더해 런타임 에러를 방지하고, 전체 서비스의 견고함을 높이는 개발 문화를 지향합니다.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* STACK */}
            <section className={styles.stackSection}>
                <motion.div 
                    className={styles.stackTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    <h2>스킬</h2>
                    <p>주요 기술과 스택 상세</p>
                </motion.div>
                
                <motion.div 
                    className={styles.stackContainer}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                >
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
                    <motion.div 
                        key={selectedCategory}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className={styles.stackList}
                    >
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
                    </motion.div>
                </motion.div>
            </section>

            {/* PROJECT */}
            <motion.section 
                className={styles.projectSection}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <div className={styles.projectContainer}>
                    <div className={styles.projectTop}>
                        <div className={styles.projectTitle}>
                            <h2>최근 작업한 프로젝트</h2>
                            <p>React, Next.js를 사용한 프로젝트부터 퍼블리싱을 이용한 최근 작업 목록입니다.</p>
                        </div>
                        <div className={styles.navigationControl}>
                            <div ref={prevRef} className={styles.customPrevButton}>
                                <Image src="/images/icons/prev.png" alt="이전" width={20} height={20} />
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
            </motion.section>

            {/* CONTACT */}
            <section className={styles.contactSection}>
                <motion.div 
                    className={styles.contactContainer}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>함께 성장하며 최고의 결과를 만들어<br />낼 준비된 프론트엔드 개발자입니다.</h2>
                    <p>빠르게 변화하는 기술 트렌드를 학습하고 적용하는 능력을 바탕으로,<br />팀의 목표 달성에 가장 능동적으로 기여하는 동료가 되겠습니다.</p>
                    <Link href="/contact">CONTACT</Link>
                </motion.div>
            </section>
        </main>
    );
}