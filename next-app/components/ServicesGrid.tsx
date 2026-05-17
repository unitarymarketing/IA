'use client';

import { useState } from 'react';

// Diccionario de traducciones integrado
const translations = {
  es: {
    title: "Nuestros Servicios",
    card1Title: "KOMMO & N8N AUTOMATIZACIÓN",
    card1Desc: "Centralizá tus leads con KOMMO y automatizá tus procesos con N8N para escalar tu negocio.",
    card2Title: "MARKETING DIGITAL",
    card2Desc: "Posicioná tu marca con campañas de alto impacto, diagnósticos precisos y propuestas a tu medida.",
    card3Title: "DESARROLLO WEB",
    card3Desc: "Sitios web ultra rápidos con diseño premium, arquitectura robusta y optimización SEO.",
    card4Title: "DISEÑO DE PORTFOLIOS",
    card4Desc: "Impulsá tu carrera con portfolios profesionales y elegantes, diseñados para destacar tu talento.",
  },
  en: {
    title: "Our Services",
    card1Title: "KOMMO & N8N AUTOMATION",
    card1Desc: "Centralize your leads with KOMMO and automate your processes with N8N to scale your business.",
    card2Title: "DIGITAL MARKETING",
    card2Desc: "Position your brand with high-impact campaigns, accurate diagnostics, and tailored proposals.",
    card3Title: "WEB DEVELOPMENT",
    card3Desc: "Ultra-fast websites with premium design, robust architecture, and SEO optimization.",
    card4Title: "PORTFOLIO DESIGN",
    card4Desc: "Boost your career with professional and elegant portfolios designed to showcase your talent.",
  }
};

export default function ServicesGrid() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = translations[lang];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-transparent">
      {/* Selector de Idioma Estilizado */}
      <div className="flex justify-end mb-10">
        <div className="bg-[#0B0F19]/80 border border-white/10 p-1 rounded-xl flex gap-1 backdrop-blur-md">
          <button 
            onClick={() => setLang('es')} 
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${lang === 'es' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
          >
            ES
          </button>
          <button 
            onClick={() => setLang('en')} 
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${lang === 'en' ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Grid de Tarjetas con gap-10 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Tarjeta 1 - Automatización */}
        <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between min-h-[320px]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <div className="text-cyan-400 font-bold tracking-widest text-[10px] uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Automation Hub</div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">{t.card1Title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t.card1Desc}</p>
          </div>
        </div>

        {/* Tarjeta 2 - Marketing */}
        <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-indigo-500/30 transition-all duration-500 flex flex-col justify-between min-h-[320px]">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
            </div>
            <div className="text-indigo-400 font-bold tracking-widest text-[10px] uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">Growth</div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-indigo-300 transition-colors">{t.card2Title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t.card2Desc}</p>
          </div>
        </div>

        {/* Tarjeta 3 - Web Dev */}
        <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-fuchsia-500/30 transition-all duration-500 flex flex-col justify-between min-h-[320px]">
          <div className="absolute top-0 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl group-hover:bg-fuchsia-500/20 transition-all duration-500"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-transparent border border-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e879f9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="text-fuchsia-400 font-bold tracking-widest text-[10px] uppercase bg-fuchsia-500/10 px-3 py-1 rounded-full border border-fuchsia-500/20">Development</div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-fuchsia-300 transition-colors">{t.card3Title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t.card3Desc}</p>
          </div>
        </div>

        {/* Tarjeta 4 - Portfolios */}
        <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between min-h-[320px]">
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M3 15h6"></path>
                <path d="M3 18h6"></path>
              </svg>
            </div>
            <div className="text-purple-400 font-bold tracking-widest text-[10px] uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">Design</div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-purple-300 transition-colors">{t.card4Title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{t.card4Desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
