"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Image from "next/image";

const portfolios = [
    "/images/Imagen 6.jpg",
    "/images/Imagen 7.jpg",
    "/images/Imagen 8.jpg"
];

export default function PortfolioCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % portfolios.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + portfolios.length) % portfolios.length);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card md:col-span-6 flex flex-col group"
        >
            <div className="flex justify-between items-center mb-4 z-20">
                <h3 className="text-2xl md:text-3xl font-black text-brand-cyan drop-shadow-[0_0_10px_rgba(0,209,255,0.5)]">Portfolios Digitales</h3>
                <BookOpen className="text-brand-cyan drop-shadow-[0_0_10px_rgba(0,209,255,1)]" size={28} />
            </div>

            <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[220px]">
                <div className="card-glow-overlay bg-[radial-gradient(circle,rgba(0,209,255,0.1)_0%,transparent_60%)] z-10" />

                <div className="absolute inset-0">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={portfolios[currentIndex]}
                                alt={`Portfolio ${currentIndex + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-brand-cyan/30 hover:border-brand-cyan transition-all backdrop-blur-sm z-20"
                    onClick={prevSlide}
                >
                    <ChevronLeft size={20} />
                </div>
                <div
                    className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-brand-cyan/30 hover:border-brand-cyan transition-all backdrop-blur-sm z-20"
                    onClick={nextSlide}
                >
                    <ChevronRight size={20} />
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {portfolios.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === i
                                    ? "bg-brand-cyan scale-125 shadow-[0_0_10px_#00D1FF]"
                                    : "bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
