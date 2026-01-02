'use client';

/* FRAMER */
import { AnimatePresence, motion, Variants } from 'framer-motion';

/* NEXT */
import { usePathname } from 'next/navigation';

/* REACT */
import React, { useEffect } from 'react';

/* 애니메이션 설정 */
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
};

interface TransitionProviderProps {
    children: React.ReactNode;
}

export default function TransitionProvider({ children }: TransitionProviderProps) {
    const pathname = usePathname();

    /* 스크롤 위치 초기화 */
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <AnimatePresence mode="wait"> 
            <motion.div
                key={pathname} 
                initial="initial"
                animate="animate"
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