'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Flashcard = ({ question, answer, category }: { question: string, answer: string, category: string }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full h-[450px] perspective-1000">
            <motion.div
                className="relative w-full h-full preserve-3d cursor-pointer group"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* Lado Frontal (Pregunta) */}
                <div className="absolute inset-0 backface-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-neutral-950/50 transition-shadow duration-300 flex flex-col p-8 items-center justify-center text-center">
                    <div className="absolute top-6 left-6">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest border border-neutral-300 dark:border-neutral-700 rounded-full">
                            {category}
                        </span>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center px-4">
                        <h2 className="text-2xl font-bold text-black dark:text-white leading-tight tracking-tight">
                            {question}
                        </h2>
                    </div>
                    
                    <div className="flex items-center gap-2 text-neutral-400 dark:text-neutral-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        <p className="text-xs font-medium">Click to reveal answer</p>
                    </div>
                </div>

                {/* Lado Trasero (Respuesta + Autoevaluación) */}
                <div
                    className="absolute inset-0 backface-hidden bg-linear-to-br from-neutral-900 to-black dark:from-neutral-100 dark:to-white border border-neutral-800 dark:border-neutral-200 rounded-2xl shadow-xl flex flex-col p-8 items-center justify-center text-center"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className="absolute top-6 left-6">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest border border-neutral-700 dark:border-neutral-300 rounded-full">
                            Answer
                        </span>
                    </div>

                    <div className="flex-1 flex items-center justify-center px-4 mt-8">
                        <p className="text-lg text-white dark:text-black leading-relaxed font-medium">
                            {answer}
                        </p>
                    </div>

                    {/* Botones de Retroalimentación (Método Japonés/SRS) */}
                    <div className="mt-6 flex gap-3 w-full" onClick={(e) => e.stopPropagation()}>
                        <button className="flex-1 group/btn relative overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-sm text-white dark:text-black py-3 rounded-xl text-xs font-bold border border-white/20 dark:border-black/20 hover:bg-white/20 dark:hover:bg-black/20 hover:border-white/30 dark:hover:border-black/30 transition-all duration-200 active:scale-95">
                            <span className="relative z-10 flex items-center justify-center gap-1">
                                <span className="text-lg">😓</span>
                                <span>HARD</span>
                            </span>
                        </button>
                        <button className="flex-1 group/btn relative overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-sm text-white dark:text-black py-3 rounded-xl text-xs font-bold border border-white/20 dark:border-black/20 hover:bg-white/20 dark:hover:bg-black/20 hover:border-white/30 dark:hover:border-black/30 transition-all duration-200 active:scale-95">
                            <span className="relative z-10 flex items-center justify-center gap-1">
                                <span className="text-lg">🤔</span>
                                <span>GOOD</span>
                            </span>
                        </button>
                        <button className="flex-1 group/btn relative overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-sm text-white dark:text-black py-3 rounded-xl text-xs font-bold border border-white/20 dark:border-black/20 hover:bg-white/20 dark:hover:bg-black/20 hover:border-white/30 dark:hover:border-black/30 transition-all duration-200 active:scale-95">
                            <span className="relative z-10 flex items-center justify-center gap-1">
                                <span className="text-lg">✨</span>
                                <span>EASY</span>
                            </span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Flashcard;