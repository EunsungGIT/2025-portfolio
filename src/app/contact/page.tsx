'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';

/* 애니메이션 설정값 임포트 */
import { containerVariants, itemVariants } from '@/components/layout/ScrollStagger';

const WEB3FORMS_ACCESS_KEY = "a0129262-883a-4f73-9c6c-4c9ef6ffb980"; 

interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!WEB3FORMS_ACCESS_KEY) {
            alert('Web3Forms Access Key를 설정해주세요!');
            return;
        }

        setStatus('sending');
        try {
            const data = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: `[2025 프론트엔드 포트폴리오] ${formData.name}님으로부터`,
                ...formData,
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); 
                alert('메세지가 전송되었습니다.');
            } else {
                setStatus('error');
                alert(`메시지 전송에 실패했습니다: ${result.message || '알 수 없는 오류'}`);
            }
        } catch (error) {
            setStatus('error');
            alert('네트워크 오류가 발생했습니다.');
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
                {/* 1. 로봇 애니메이션 영역: 톡 튀어나오는 효과 */}
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

                {/* 2. 텍스트 타이틀 영역 */}
                <motion.h2 variants={itemVariants}>언제든 성실하게 달려갈 준비가 되었습니다.</motion.h2>
                <motion.p variants={itemVariants}>
                    제안, 기술 질문 또는 기타 문의 사항은 아래 폼을 통해 연락주시면 확인 후 빠르게 답변드리겠습니다.
                </motion.p>

                {/* 3. 입력 폼 영역: 필드들이 하나씩 등장 */}
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