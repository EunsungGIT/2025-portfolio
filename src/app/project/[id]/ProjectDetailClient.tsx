'use client';

/* REACT */
import React, { useState, useMemo, useEffect } from 'react';

/* NEXT */
import Image from 'next/image';
import Link from 'next/link';

/* FRAMER */
import { motion } from 'framer-motion';

/* 컴포넌트 */
import { containerVariants, itemVariants } from '@/components/layout/ScrollStagger';

/* CSS */
import styles from './page.module.css';

/* SWIPER */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

/* DATA */
import { Project } from '@/data/projectData';
import { STACKS, StackIcon, StackCategory } from '@/data/stackData';

interface ProjectDetailClientProps {
    project: Project;
}

/* 상위 컴포넌트에서 조회된 PROJECT 데이터를 가져옴 */
export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <main className={styles.detailSection}>
                <div className={styles.detailContentWrap}>
                    <div 
                        style={{ 
                            width: '100%', 
                            height: '450px',
                            backgroundColor: '#f2f2f2', 
                            borderRadius: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#ccc'
                        }}
                    >
                        Loading Project...
                    </div>
                </div>
            </main>
        );
    }

    /* 필요한 데이터 가져옴 */
    const {
        title,
        mock1,
        mock2,
        mock3,
        mock4,
        tech,
        description,
        work,
        period,
        headCount,
        githubLink,
        figmaLink,
        resultLink
    } = project;

    /* 목업 이미지 나열 */
    const images = [mock1, mock2, mock3, mock4].filter(img => img);

    const techStacks = useMemo(() => {
        /* 기술명을 기준으로 데이터 확인 */
        const allStacksMap = STACKS.reduce((acc, category: StackCategory) => {
            category.icons.forEach(icon => {
                acc[icon.name.toLowerCase()] = icon;
            });
            return acc;
        }, {} as Record<string, StackIcon>);

        /* 기술 확인 후 기술명과 src 값 가져오기 */
        return tech
            .map(techName => {
                const stackInfo = allStacksMap[techName.toLowerCase()];

                if (stackInfo) {
                    return {
                        name: stackInfo.name,
                        src: stackInfo.src,
                    };
                }

                /* 해당 값이 없을 시 메세지와 기본 이미지로 노출 */
                console.warn(`해당하는 스택이 없습니다.`);
                return {
                    name: techName,
                    src: '/images/stacks/default.png',
                };
            })
            .filter(stack => stack);
    }, [tech]);


    return (
        <main>
            <motion.section
                className={styles.detailSection}
                initial="hidden"
                animate="show"
                variants={containerVariants}
            >
                {/* 왼쪽 영역 */}
                <motion.div className={styles.detailContentWrap} variants={itemVariants}>
                    <div className={styles.detailSwiperWrap}>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': 'var(--primary-color, #aaa)',
                                '--swiper-pagination-color': 'var(--primary-color, #aaa)',
                            } as React.CSSProperties}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={styles.mySwiper2}
                        >
                            {images.map((imgSrc, index) => (
                                <SwiperSlide key={index} className={styles.mySwiper2Slide}>
                                    <Image
                                        src={imgSrc}
                                        alt={`${title} 스크린샷 ${index + 1}`}
                                        width={1000}
                                        height={400}
                                        priority={index === 0}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className={styles.mySwiper}
                        >
                            {images.map((imgSrc, index) => (
                                <SwiperSlide key={index} className={styles.mySwiperSlide}>
                                    <Image
                                        src={imgSrc}
                                        alt={`썸네일 ${index + 1}`}
                                        width={200}
                                        height={100}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <p className={styles.message}>좌우로 스크롤 해주세요➡️</p>
                    </div>

                    <div className={styles.detailStackWrap}>
                        <h3>사용한 기술</h3>
                        <div className={styles.detailStack}>
                            {techStacks.map((stack, index) => (
                                <motion.button
                                    key={index}
                                    type="button"
                                    className={styles.stackButton}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Image src={stack.src} alt={stack.name} width={20} height={20} />
                                    <span>{stack.name}</span>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.detailWork}>
                        <h3>주요 기여 및 작업 내용</h3>
                        <p>{work}</p>
                    </div>
                </motion.div>

                {/* 오른쪽 영역 */}
                <motion.div className={styles.detailTitle} variants={itemVariants}>
                    <motion.h2
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {title}
                    </motion.h2>

                    <div className={styles.detailExplain}>
                        <h3>프로젝트 설명</h3>
                        <p>{description}</p>
                    </div>
                    <div className={styles.detailPeriod}>
                        <h3>작업 기간</h3>
                        <p>{period}</p>
                    </div>
                    <div className={styles.detailHeadcount}>
                        <h3>팀 / 개인</h3>
                        <p>{headCount}</p>
                    </div>
                    <div className={styles.detailLinkWrap}>
                        <h3>자료 링크</h3>
                        <div className={styles.detailLink}>
                            {githubLink && (
                                <Link href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                    <Image src='/images/stacks/github.png' alt="GitHub" width={20} height={20} />
                                </Link>
                            )}
                            {figmaLink && (
                                <Link href={figmaLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                                    <Image src='/images/stacks/figma.png' alt="Figma" width={20} height={20} />
                                </Link>
                            )}
                        </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={styles.resultButton}>
                        <Link href={resultLink} target="_blank" rel="noopener noreferrer">
                            사이트 이동
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>
        </main>
    );
}