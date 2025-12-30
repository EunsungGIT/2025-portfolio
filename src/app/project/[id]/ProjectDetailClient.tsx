'use client'; 

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
import { STACKS } from '@/data/stackData';

interface StackIcon {
    name: string;
    src: string;
    description: string;
}
interface StackCategory {
    menu: string;
    icons: StackIcon[];
}

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

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
    const images = [mock1, mock2, mock3, mock4].filter(img => img);

    const techStacks = useMemo(() => {
        const allStacksMap = STACKS.reduce((acc, category: StackCategory) => {
            category.icons.forEach(icon => {
                acc[icon.name.toLowerCase()] = icon; 
            });
            return acc;
        }, {} as Record<string, StackIcon>);

        return tech
            .map(techName => {
                const stackInfo = allStacksMap[techName.toLowerCase()];
                
                if (stackInfo) {
                    return {
                        name: stackInfo.name,
                        src: stackInfo.src,
                    };
                }
                
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
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}  className={styles.resultButton}>
                        <Link href={resultLink} target="_blank" rel="noopener noreferrer">
                            사이트 이동
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>
        </main>
    );
}