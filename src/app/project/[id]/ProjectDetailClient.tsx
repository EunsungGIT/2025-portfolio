'use client'; 

import React, { useState, useMemo } from 'react'; // useMemo 추가
import Image from 'next/image';
import Link from 'next/link';

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

// 🌟 STACKS 구조에 맞는 타입 정의 (stackData.ts와 일치해야 합니다)
interface StackIcon {
    name: string;
    src: string;
    description: string;
}
interface StackCategory {
    menu: string;
    icons: StackIcon[];
}

// Swiper 썸네일 타입 정의 (타입스크립트 사용 시 필요)
interface ThumbsSwiper {
    el: HTMLElement;
    init: boolean;
    // ...
}

// Props 타입 정의: Server Component에서 받은 project 객체
interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    const { 
        title, 
        thumbnail, 
        mock1, 
        mock2, 
        mock3, 
        tech,
        description, 
        work, 
        period, 
        headCount, 
        githubLink, 
        figmaLink, 
        resultLink 
    } = project;

    const images = [thumbnail, mock1, mock2, mock3].filter(img => img);

    // 🌟 핵심 로직: project.tech 이름으로 STACKS에서 src와 name을 가져옵니다.
    const techStacks = useMemo(() => {
        // 1. STACKS 데이터를 이름(소문자)을 키로 하는 Map으로 변환하여 검색 속도를 높입니다.
        const allStacksMap = STACKS.reduce((acc, category: StackCategory) => {
            category.icons.forEach(icon => {
                // Map의 키는 검색할 때 일치시키기 위해 소문자로 통일
                acc[icon.name.toLowerCase()] = icon; 
            });
            return acc;
        }, {} as Record<string, StackIcon>);

        // 2. project.tech 배열을 순회하며 매칭되는 정보를 가져옵니다.
        return tech
            .map(techName => {
                const stackInfo = allStacksMap[techName.toLowerCase()];
                
                if (stackInfo) {
                    // STACKS에서 찾은 정확한 name과 src를 반환
                    return {
                        name: stackInfo.name,
                        src: stackInfo.src,
                        // description 등 다른 정보도 필요하면 여기에 추가
                    };
                }
                
                // STACKS에 없는 경우를 대비한 대체값 또는 필터링
                console.warn(`[경고]: STACKS 데이터에서 기술 "${techName}"에 대한 정보를 찾을 수 없습니다.`);
                return {
                    name: techName,
                    src: '/images/stacks/default.png', // 대체 이미지 경로
                };
            })
            .filter(stack => stack); // 혹시 모를 null/undefined 필터링
    }, [tech]);


    return (
        <main>
            <section className={styles.detailSection}>
                <div className={styles.detailContentWrap}>
                    {/* 1. Swiper 영역 (생략, 기존과 동일) */}
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
                                        height={600} 
                                        layout="responsive"
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
                                        height={150} 
                                        objectFit="cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* 2. 사용 기술 스택 (수정된 techStacks 사용) */}
                    <div className={styles.detailStackWrap}>
                        <h3>사용한 기술</h3>
                        <div className={styles.detailStack}>
                            {techStacks.map((stack, index) => (
                                <button key={index} type="button" className={styles.stackButton}>
                                    {/* 🌟 STACKS에서 가져온 stack.src 사용 */}
                                    <Image src={stack.src} alt={stack.name} width={20} height={20} />
                                    <span>{stack.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.detailWork}>
                        <h3>주요 기여 및 작업 내용</h3>
                        <p>{work}</p> 
                    </div>
                </div>
                <div className={styles.detailTitle}>
                    <h2>{title}</h2>
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
                                <Link href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                    <Image src='/images/stacks/github.png' alt="GitHub" width={20} height={20} />
                                </Link>
                            )}
                            {figmaLink && (
                                <Link href={figmaLink} target="_blank" rel="noopener noreferrer" aria-label="Figma Link">
                                    <Image src='/images/stacks/figma.png' alt="Figma" width={20} height={20} />
                                </Link>
                            )}
                        </div>
                    </div>
                    <Link href={resultLink} target="_blank" rel="noopener noreferrer" className={styles.resultButton}>사이트 이동</Link>
                </div>
            </section>
        </main>
    );
}