"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "KOMMO & N8N AUTOMATION",
        description: "Flujos inteligentes que trabajan por ti.",
        image: "/images/Fragmento 3.png",
    },
    {
        title: "MARKETING DIGITAL ESTRATÉGICO",
        description: "Campañas de alto impacto y ROI real.",
        image: "/images/Fragmento 4.png",
    },
    {
        title: "DISEÑO DE PORTFOLIOS WEB",
        description: "Tu vitrina digital al siguiente nivel.",
        image: "/images/Fragmento 5.png",
    },
    {
        title: "DESARROLLO WEB PREMIUM",
        description: "Velocidad y diseño sin concesiones.",
        image: "/images/Fragmento 6.png",
    },
];

export default function BentoGrid() {
    return (
        <section id="servicios" className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-magenta pb-2 uppercase tracking-tighter">
                    Nuestro Ecosistema
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-brand-cyan to-brand-magenta mx-auto mt-4" />
            </div>

            {/* 4-col uniform grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex flex-col p-6 rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm cursor-default
                                   transition-all duration-300
                                   hover:border-brand-cyan hover:shadow-[inset_0_0_24px_rgba(0,255,255,0.08),0_0_0_1px_rgba(0,255,255,0.3)]"
                    >
                        {/* Card inner glow on hover — contained, no floor projection */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                                        bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.07)_0%,transparent_70%)]" />

                        {/* Text block */}
                        <div className="relative z-10 flex flex-col gap-4 mb-6">
                            <h3 className="text-2xl font-semibold text-white leading-tight uppercase tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Image square */}
                        <div className="mt-auto relative w-full aspect-square rounded-xl overflow-hidden bg-black/40 border border-white/5 p-2">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
