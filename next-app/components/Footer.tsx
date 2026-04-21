"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-white/8 bg-[#050505] pt-12 pb-8">
            <div className="max-w-[1300px] mx-auto px-6 flex flex-col items-center text-center gap-6">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-black tracking-widest text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                >
                    UNITARY AI
                </motion.div>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
                    {["Términos de Servicio", "Política de Privacidad", "Política de Cookies"].map(link => (
                        <a
                            key={link}
                            href="#"
                            className="text-gray-500 hover:text-brand-magenta transition-all duration-300 hover:drop-shadow-[0_0_8px_#FF00FF]"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <p className="text-gray-600 text-xs">
                    &copy; 2026 Unitary Marketing IA — Innovación de Élite
                </p>
            </div>
        </footer>
    );
}
