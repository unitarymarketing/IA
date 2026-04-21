"use client";

import { motion } from "framer-motion";

const partners = [
    "QUANTUM ANALYTICS",
    "CORE TECHNOLOGIES",
    "SYNAPSE SYSTEMS",
    "NEURALYNX",
    "DIGITAL HORIZONS",
];

export default function SocialProof() {
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section className="w-full py-24 overflow-hidden">
            {/* Section label */}
            <div className="text-center mb-14">
                <h2 className="text-sm font-medium uppercase tracking-[0.4em] text-gray-600">
                    Aliados de Élite
                </h2>
            </div>

            {/* Infinite ticker */}
            <div className="relative w-full">
                {/* Lateral fades */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-24 md:gap-32 items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center min-w-[160px]"
                        >
                            <span className="text-xl md:text-2xl font-bold text-white/40 transition-all duration-500 group-hover:text-white cursor-default select-none">
                                {partner}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
