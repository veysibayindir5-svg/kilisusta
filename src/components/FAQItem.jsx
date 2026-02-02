import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item card ${isOpen ? 'open' : ''}`}>
            <button
                className="faq-question-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="question-text">{question}</span>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="faq-answer-content">
                            <p>{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
