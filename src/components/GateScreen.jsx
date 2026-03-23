
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VIDEO_SRC = "/Beautiful_cinematic_slowmotion_202602161452_b.mp4";
const CORRECT_PASSWORD = "007";

const GateScreen = ({ onReady }) => {
    const [phase, setPhase] = useState('password'); // 'password' | 'loading' | 'done'
    const [password, setPassword] = useState('');
    const [shake, setShake] = useState(false);
    const [error, setError] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const videoRef = useRef(null);
    const inputRef = useRef(null);

    // Focus input on mount
    useEffect(() => {
        if (phase === 'password' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [phase]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setPhase('loading');
        } else {
            setError(true);
            setShake(true);
            setTimeout(() => setShake(false), 600);
            setTimeout(() => setError(false), 2000);
        }
    };

    // Preload video when in loading phase
    useEffect(() => {
        if (phase !== 'loading') return;

        const video = document.createElement('video');
        videoRef.current = video;
        video.src = VIDEO_SRC;
        video.muted = true;
        video.playsInline = true;
        video.preload = 'auto';

        let progressInterval;

        const handleCanPlayThrough = () => {
            clearInterval(progressInterval);
            setLoadProgress(100);
            // Small delay for the progress bar animation to finish
            setTimeout(() => setPhase('done'), 600);
        };

        // Simulate progress while loading
        let fakeProgress = 0;
        progressInterval = setInterval(() => {
            fakeProgress += Math.random() * 8;
            if (fakeProgress > 90) fakeProgress = 90; // Cap at 90 until actually ready
            setLoadProgress(Math.floor(fakeProgress));
        }, 200);

        video.addEventListener('canplaythrough', handleCanPlayThrough);
        video.load();

        return () => {
            clearInterval(progressInterval);
            video.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
    }, [phase]);

    // Transition out when done
    useEffect(() => {
        if (phase === 'done') {
            const timer = setTimeout(() => onReady(), 800);
            return () => clearTimeout(timer);
        }
    }, [phase, onReady]);

    return (
        <AnimatePresence>
            {phase !== 'done' ? (
                <motion.div
                    key="gate"
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2d1a0e 50%, #1A1A1A 100%)' }}
                >
                    {/* Animated background particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full"
                                style={{
                                    width: Math.random() * 4 + 2,
                                    height: Math.random() * 4 + 2,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    background: `rgba(249, 168, 37, ${Math.random() * 0.3 + 0.1})`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.2, 0.6, 0.2],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>

                    {/* Center content */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* Logo */}
                        <motion.img
                            src="/logo.png"
                            alt="Sikkim Supreme"
                            className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-white font-serif text-2xl md:text-3xl font-medium tracking-wide text-center"
                        >
                            Sikkim Supreme
                        </motion.h1>

                        <AnimatePresence mode="wait">
                            {phase === 'password' && (
                                <motion.form
                                    key="password-form"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col items-center gap-5"
                                >
                                    <p className="text-gray-400 text-sm tracking-widest uppercase">
                                        Enter Access Code
                                    </p>

                                    <motion.div
                                        animate={shake ? { x: [-12, 12, -8, 8, -4, 4, 0] } : {}}
                                        transition={{ duration: 0.5 }}
                                        className="relative"
                                    >
                                        <input
                                            ref={inputRef}
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="• • •"
                                            className={`w-56 px-6 py-3.5 rounded-full text-center text-lg tracking-[0.5em] font-mono
                                                bg-white/5 border backdrop-blur-sm text-white placeholder-gray-500
                                                focus:outline-none focus:ring-2 transition-all duration-300
                                                ${error
                                                    ? 'border-red-500/60 focus:ring-red-500/30'
                                                    : 'border-white/10 focus:ring-accent/40 focus:border-accent/50'
                                                }`}
                                        />
                                    </motion.div>

                                    <AnimatePresence>
                                        {error && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0 }}
                                                className="text-red-400 text-xs tracking-wider"
                                            >
                                                Incorrect code
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="px-8 py-3 rounded-full bg-accent text-white text-sm font-semibold uppercase tracking-wider
                                                   shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow duration-300"
                                    >
                                        Enter
                                    </motion.button>
                                </motion.form>
                            )}

                            {phase === 'loading' && (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col items-center gap-6"
                                >
                                    <p className="text-gray-400 text-sm tracking-widest uppercase">
                                        Preparing Experience
                                    </p>

                                    {/* Progress bar */}
                                    <div className="w-56 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{
                                                background: 'linear-gradient(90deg, #F9A825, #C62828)',
                                            }}
                                            initial={{ width: '0%' }}
                                            animate={{ width: `${loadProgress}%` }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                        />
                                    </div>

                                    <p className="text-accent/80 text-xs font-mono tracking-wider">
                                        {loadProgress}%
                                    </p>

                                    {/* Subtle pulsing dots */}
                                    <div className="flex gap-2 mt-2">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="w-1.5 h-1.5 rounded-full bg-accent/60"
                                                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                                                transition={{
                                                    duration: 1.2,
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Bottom brand text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-6 text-gray-600 text-[10px] tracking-[0.3em] uppercase"
                    >
                        Government Fruit Preservation Factory, Sikkim
                    </motion.p>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default GateScreen;
