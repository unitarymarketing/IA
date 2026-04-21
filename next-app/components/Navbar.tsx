"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-0 h-20 z-50 backdrop-blur-md flex items-center border-b border-white/5 bg-[#050505]/50"
        >
            <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 flex justify-between items-center">
                {/* Logo - "U" + Unitary Marketing AI */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <span className="text-3xl font-black text-brand-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                            U
                        </span>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-sm font-bold tracking-tighter uppercase text-white">Unitary</span>
                        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-brand-cyan/80">Marketing IA</span>
                    </div>
                </Link>

                {/* Central Navigation Links */}
                <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
                    {["Inicio", "Servicios", "Institucional", "Redes Sociales"].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTA Principal */}
                <div className="flex items-center">
                    <button className="bg-[#00FFFF] text-black font-semibold rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]">
                        COTIZADOR IA
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
