'use client';

/* REACT */
import { useState, useEffect } from 'react';

/* FRAMER */
import { motion, AnimatePresence } from 'framer-motion';

/* CSS */
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    /* 현재 스크롤 위치 감지 */
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    /* 최상단으로 스무스하게 */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className={styles.topButton}
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#171717' }}
                    whileTap={{ scale: 0.9 }}
                >
                    Top
                </motion.button>
            )}
        </AnimatePresence>
    );
}