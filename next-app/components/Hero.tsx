"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="inicio" className="relative flex flex-col min-h-screen overflow-hidden bg-[#050505]">

            {/* ── Titular Superior centrado ───────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="w-full text-center pt-32 pb-8 px-6 z-10"
            >
                <p className="text-gray-400 font-light tracking-[0.6em] text-sm md:text-base uppercase select-none">
                    INNOVACIÓN SIN LÍMITES
                </p>
            </motion.div>

            {/* ── Split Layout: Texto | Video ─────────────────────────── */}
            <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-stretch w-full">

                {/* Columna Izquierda: Título masivo */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                    className="w-full lg:w-[45%] flex flex-col justify-center px-8 lg:pl-20 xl:pl-32 lg:pr-8 py-12 z-10"
                >
                    <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.85] tracking-tighter uppercase select-none text-left">
                        <span
                            className="bg-clip-text text-transparent animate-shimmer"
                            style={{
                                backgroundImage: "linear-gradient(135deg, #00FFFF 0%, #FFFFFF 50%, #FF00FF 100%)",
                                backgroundSize: "200% 200%",
                                filter: "drop-shadow(0 0 12px rgba(0, 255, 255, 0.25))",
                            }}
                        >
                            Unitary<br />
                            Marketing<br />
                            Digital AI
                        </span>
                    </h1>
                </motion.div>

                {/* Columna Derecha: Video con radial mask */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="w-full lg:w-[55%] h-[60vh] lg:h-auto flex items-center justify-center relative overflow-hidden"
                >
                    <div
                        className="w-full h-full"
                        style={{
                            maskImage: "radial-gradient(circle, black 50%, transparent 100%)",
                            WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 100%)",
                        }}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover mix-blend-screen"
                        >
                            <source src="/videos/p2v_Veo%203.1%20Image%20to%20Video_2026-03-10_14-18-18.mp4" type="video/mp4" />
                        </video>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
