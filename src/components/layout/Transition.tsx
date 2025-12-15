// src/components/layout/TransitionProvider.tsx (최종 수정)

'use client';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'; // useEffect 추가

// 페이지 애니메이션 설정 (Fade In/Out 효과)
const pageTransitionVariants: Variants = { 
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5, 
            ease: 'easeInOut',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5, 
            ease: 'easeInOut',
        },
    },
};

interface TransitionProviderProps {
    children: React.ReactNode;
}

export default function TransitionProvider({ children }: TransitionProviderProps) {
    const pathname = usePathname();

    // 스크롤 위치 초기화 로직 (유지)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        // mode="wait"을 사용하면, exit이 완료될 때까지 다음 페이지의 initial/animate를 대기시킵니다.
        <AnimatePresence mode="wait"> 
            <motion.div
                key={pathname} 
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransitionVariants}
                style={{ 
                    width: '100%', 
                    minHeight: '100vh', 
                    zIndex: 10 
                }} 
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}