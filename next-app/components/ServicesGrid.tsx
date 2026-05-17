'use client';

import { useState } from 'react';

// Diccionario de traducciones integrado
const translations = {
  es: {
    title: "Nuestro Ecosistema",
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
    title: "Our Ecosystem",
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
    <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto bg-transparent">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="text-left w-full md:w-auto">
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 900,
                    background: 'linear-gradient(to right, #00FFFF, #8b5cf6, #FF00FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textTransform: 'uppercase',
                    letterSpacing: '-0.04em',
                    paddingBottom: '4px',
                    textShadow: '0 0 40px rgba(0, 255, 255, 0.3)'
                }}>
                    {t.title}
                </h2>
                <div style={{ width: '120px', height: '5px', background: 'linear-gradient(to right, #00FFFF, #FF00FF)', marginTop: '0.5rem', borderRadius: '4px' }}></div>
            </div>
            
            {/* Selector de Idioma Estilizado */}
            <div className="bg-[#0B0F19]/80 border border-white/10 p-1 rounded-xl flex gap-1 backdrop-blur-md mt-6 md:mt-0 self-start md:self-center">
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
            <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/40 backdrop-blur-2xl border border-white/10 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between min-h-[360px] shadow-2xl" style={{ backgroundImage: "url('Diseño 2/Automatización.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-all duration-500 z-0"></div>
                
                <div className="flex justify-end items-start relative z-10 mb-6">
                    <div className="text-cyan-300 font-bold tracking-widest text-[11px] uppercase bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Automation Hub</div>
                </div>

                <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-wide group-hover:text-cyan-300 transition-colors drop-shadow-xl" style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>{t.card1Title}</h3>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: "'Roboto', sans-serif", textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{t.card1Desc}</p>
                </div>
            </div>

            {/* Tarjeta 2 - Marketing */}
            <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/40 backdrop-blur-2xl border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between min-h-[360px] shadow-2xl" style={{ backgroundImage: "url('Diseño 2/Marketing.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-500 z-0"></div>
                
                <div className="flex justify-end items-start relative z-10 mb-6">
                    <div className="text-indigo-300 font-bold tracking-widest text-[11px] uppercase bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Growth</div>
                </div>

                <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-wide group-hover:text-indigo-300 transition-colors drop-shadow-xl" style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>{t.card2Title}</h3>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: "'Roboto', sans-serif", textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{t.card2Desc}</p>
                </div>
            </div>

            {/* Tarjeta 3 - Web Dev */}
            <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/40 backdrop-blur-2xl border border-white/10 rounded-2xl hover:border-fuchsia-500/50 transition-all duration-500 flex flex-col justify-between min-h-[360px] shadow-2xl" style={{ backgroundImage: "url('Diseño 2/Web.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl group-hover:bg-fuchsia-500/40 transition-all duration-500 z-0"></div>
                
                <div className="flex justify-end items-start relative z-10 mb-6">
                    <div className="text-fuchsia-300 font-bold tracking-widest text-[11px] uppercase bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.3)]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Development</div>
                </div>

                <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-wide group-hover:text-fuchsia-300 transition-colors drop-shadow-xl" style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>{t.card3Title}</h3>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: "'Roboto', sans-serif", textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{t.card3Desc}</p>
                </div>
            </div>

            {/* Tarjeta 4 - Portfolios */}
            <div className="relative group overflow-hidden p-8 bg-[#0B0F19]/40 backdrop-blur-2xl border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between min-h-[360px] shadow-2xl" style={{ backgroundImage: "url('Diseño 2/Portfolio.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/40 transition-all duration-500 z-0"></div>
                
                <div className="flex justify-end items-start relative z-10 mb-6">
                    <div className="text-purple-300 font-bold tracking-widest text-[11px] uppercase bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Design</div>
                </div>

                <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-wide group-hover:text-purple-300 transition-colors drop-shadow-xl" style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>{t.card4Title}</h3>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium" style={{ fontFamily: "'Roboto', sans-serif", textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{t.card4Desc}</p>
                </div>
            </div>

        </div>
    </section>
  );
}
