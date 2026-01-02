'use client';

/* REACT */
import React, { useState } from 'react';

/* CSS */
import styles from './page.module.css';

/* FRAMER */
import { motion } from 'framer-motion';

/* 컴포넌트 */
import { containerVariants, itemVariants } from '@/components/layout/ScrollStagger';

/* WEB3FORMS 키 받아오기 */
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

/* 폼 양식 타입 */
interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    /* 폼 데이터 초기값 */
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });

    /* 메세지 전송 상태 (대기, 진행, 성공, 실패) */
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /* 메세지 전송 로직 */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!WEB3FORMS_ACCESS_KEY) return;

        setStatus('sending');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `[Portfolio Contact] from ${formData.name}`,
                    ...formData,
                }),
            });

            if (!response.ok) throw new Error('전송 실패');

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            alert('메세지 전송이 완료되었습니다.')
        } catch (error) {
            setStatus('error');
            alert('메세지 전송이 실패하였습니다.')
        }
    };

    return (
        <main>
            <motion.section
                className={styles.contactSection}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* 로봇 영역 */}
                <motion.div
                    className={styles.introRobot}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                >
                    <div className={styles.robot}>
                        <div className={styles.head}></div>
                        <div className={`${styles.arm} ${styles.l}`}><div><div></div></div></div>
                        <div className={`${styles.leg} ${styles.l}`}><div><div></div></div></div>
                        <div className={`${styles.leg} ${styles.r}`}><div><div></div></div></div>
                        <div className={`${styles.arm} ${styles.r}`}><div><div></div></div></div>
                    </div>
                    <div className={styles.shadow}></div>
                </motion.div>

                {/* 텍스트 영역 */}
                <motion.h2 variants={itemVariants}>언제든 성실하게 달려갈 준비가 되었습니다.</motion.h2>
                <motion.p variants={itemVariants}>
                    제안, 기술 질문 또는 기타 문의 사항은 아래 폼을 통해 연락주시면 확인 후 빠르게 답변드리겠습니다.
                </motion.p>

                {/* 폼 영역 */}
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <motion.div className={styles.formGroup} variants={itemVariants}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === 'sending'}
                            placeholder="이름을 적어주세요"
                        />
                    </motion.div>

                    <motion.div className={styles.formGroup} variants={itemVariants}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === 'sending'}
                            placeholder="이메일을 적어주세요"
                        />
                    </motion.div>

                    <motion.div className={styles.formGroup} variants={itemVariants}>
                        <textarea
                            name="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status === 'sending'}
                            placeholder="내용을 적어주세요"
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className={styles.submitButton}
                        disabled={status === 'sending'}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {status === 'sending' ? '전송 중...' : '전송'}
                    </motion.button>
                </form>
            </motion.section>
        </main>
    );
}