'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Cookies() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e2e8f0] font-sans selection:bg-[#00FFFF] selection:text-black">
      {/* Header Glassmorphism */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 shadow-[0_0_30px_rgba(0,209,255,0.05)]">
        <div className="max-w-[720px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group transition-all duration-300">
            <img src="/Diseño 2/Logo Unitary.png" alt="Unitary Logo" className="w-8 h-8 rounded-full border border-[#00FFFF]/50 group-hover:shadow-[0_0_15px_#00FFFF] transition-all" />
            <span className="font-bold text-[#fff] tracking-widest text-sm md:text-base">UNITARY MARKETING AI</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#A1A1AA] hover:text-[#00FFFF] transition-colors flex items-center gap-2">
            Volver al Inicio
          </Link>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-[720px] mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Política de Cookies</h1>
        <p className="text-[#A1A1AA] text-sm mb-12 tracking-widest uppercase font-semibold">Última actualización: Mayo 2026</p>

        <div className="space-y-12 text-lg leading-[1.8] text-gray-300">
          <section className="relative">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#00FFFF] to-transparent"></span>
              Uso de Tecnologías de Rastreo
            </h2>
            <p>
              Utilizamos cookies esenciales y de análisis para mantener las redes de sesión activas y medir de manera anónima el rendimiento de nuestras arquitecturas de marketing. Al continuar interactuando con esta terminal, apruebas el uso de herramientas de rastreo exclusivas para escalar la experiencia analítica.
            </p>
          </section>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

          <section className="relative">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#B026FF] to-transparent"></span>
              Gestión de Cookies
            </h2>
            <p className="mb-4">
              Puedes gestionar tus preferencias de cookies en cualquier momento a través de la configuración de tu navegador. Ten en cuenta que la desactivación de cookies operativas puede afectar el rendimiento de ciertas interfaces impulsadas por Inteligencia Artificial dentro de Unitary.
            </p>
          </section>
        </div>
      </main>

      {/* Botón Ir Arriba */}
      <button 
        onClick={scrollTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#0a0a0f]/80 backdrop-blur-md border border-[#00FFFF]/30 text-[#00FFFF] flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(0,209,255,0.2)] hover:bg-[#00FFFF]/10 hover:scale-110 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Ir arriba"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  );
}
