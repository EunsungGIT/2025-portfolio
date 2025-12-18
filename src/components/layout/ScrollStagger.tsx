import { Variants } from 'framer-motion';

/* 부모 */
export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        },
    },
};

/* 자식 */
export const itemVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        transition: { duration: 0.4 } 
    },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    },
};