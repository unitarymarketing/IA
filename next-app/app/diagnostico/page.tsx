'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import rubrosData from '../../data/rubros.json';

export interface RubroDiagnostic {
  id: string;
  title: string;
  category: string;
  keywords: string[];
  operationalPain: string;
  solutionModules: string[];
  techStack: string[];
  ctaText: string;
  ctaUrl: string;
}

const rubros = rubrosData as RubroDiagnostic[];

function DiagnosticoContent() {
  const searchParams = useSearchParams();
  const initialRubroId = searchParams.get('rubro');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRubro, setSelectedRubro] = useState<RubroDiagnostic | null>(null);

  useEffect(() => {
    if (initialRubroId) {
      const found = rubros.find((r) => r.id === initialRubroId);
      if (found) {
        setSelectedRubro(found);
      }
    }
  }, [initialRubroId]);

  const filteredRubros = rubros.filter((rubro) => {
    const term = searchTerm.toLowerCase();
    return (
      rubro.title.toLowerCase().includes(term) ||
      rubro.category.toLowerCase().includes(term) ||
      rubro.operationalPain.toLowerCase().includes(term) ||
      rubro.keywords.some((kw) => kw.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#00FFFF]/30 relative">
      {/* Background Graphic Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <video autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover opacity-12 filter blur-[0.5px] hidden md:block">
          <source src="/videos/diagnostico-bg.mp4" type="video/mp4" />
          <source src="/videos/diagnostico-bg.webm" type="video/webm" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Logo Unitary.png" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[400px] h-auto opacity-10 blur-[0.5px] object-contain pointer-events-none block md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A0A0A]/90 to-[#0A192F] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00FFFF]/10 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] to-[#A0A0A0] relative z-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            Descubrí la arquitectura de IA e Infraestructura para tu empresa
          </h1>
          <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto relative z-10">
            Seleccioná tu industria o buscá tu rubro para conocer el ecosistema tecnológico exacto que multiplicará el ROI de tus operaciones B2B.
          </p>
        </div>

        {/* Predictive Search */}
        <div className="relative max-w-2xl mx-auto mb-10 z-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-[#A0A0A0]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full bg-[rgba(18,18,22,0.7)] border border-[#00FFFF]/20 rounded-full py-4 pl-12 pr-6 text-[#F5F5F5] placeholder-[#A0A0A0]/50 focus:outline-none focus:ring-2 focus:ring-[#00FFFF]/50 focus:border-[#00FFFF] transition-all shadow-[0_0_15px_rgba(0,255,255,0.05)]"
            placeholder="Ej: Estudio Jurídico, Logística, Salud..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Pill-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pb-4 md:pb-0 mb-12 relative z-10">
          {filteredRubros.map((rubro) => {
            const isActive = selectedRubro?.id === rubro.id;
            return (
              <button
                key={rubro.id}
                onClick={() => setSelectedRubro(rubro)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur ${
                  isActive
                    ? 'bg-[#00FFFF]/10 text-[#00FFFF] border border-[#00FFFF] shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                    : 'bg-[rgba(18,18,22,0.5)] text-[#A0A0A0] border border-[rgba(18,18,22,0.8)] hover:bg-[rgba(18,18,22,0.8)] hover:border-[#00FFFF]/50 hover:text-[#F5F5F5]'
                }`}
              >
                {rubro.title}
              </button>
            );
          })}
          {filteredRubros.length === 0 && (
            <div className="text-[#A0A0A0]/60 text-sm py-2 text-center w-full">No se encontraron resultados para tu búsqueda.</div>
          )}
        </div>

        {/* Interactive Card */}
        {selectedRubro && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative bg-[#121216]/80 backdrop-blur-md border border-[#00FFFF]/20 rounded-2xl p-6 md:p-12 hover:border-[#8A2BE2]/50 transition-all duration-300 shadow-[0_0_15px_rgba(138,43,226,0.15)] overflow-hidden z-10">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-[100px] opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FFFF]/10 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
              {/* Left Column */}
              <div className="flex-1 space-y-8">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-[#0A0A0A]/80 text-[#00FFFF] border border-[#00FFFF]/30 rounded-full text-xs font-bold tracking-wider uppercase mb-4 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                    {selectedRubro.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-[#F5F5F5] mb-2 leading-tight drop-shadow-[0_0_5px_rgba(138,43,226,0.3)]">{selectedRubro.title}</h2>
                </div>

                <div className="bg-red-950/10 border border-red-500/30 rounded-3xl p-6 relative overflow-hidden shadow-inner">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-950/30 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-bold mb-2">Dolor Operativo Mapeado</h3>
                      <p className="text-[#A0A0A0]/80 text-sm leading-relaxed">{selectedRubro.operationalPain}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F5F5F5] mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#8A2BE2]/10 border border-[#8A2BE2]/30 flex items-center justify-center">
                      <svg className="h-4 w-4 text-[#8A2BE2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    Stack Tecnológico Recomendado
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRubro.techStack.map((tech, idx) => (
                      <span key={idx} className="bg-[#8A2BE2]/10 border border-[#8A2BE2]/50 text-[#8A2BE2] px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_10px_rgba(138,43,226,0.2)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 bg-[#0A0A0A]/60 border border-[rgba(18,18,22,0.8)] rounded-3xl p-8 flex flex-col justify-between relative shadow-inner">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#00FFFF]/10 border border-[#00FFFF]/30 flex items-center justify-center">
                      <svg className="h-4 w-4 text-[#00FFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Módulos de Solución
                  </h3>
                  <ul className="space-y-5 mb-10">
                    {selectedRubro.solutionModules.map((module, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="h-6 w-6 rounded-full bg-[#00FFFF] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                          <svg className="h-3 w-3 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#A0A0A0]/90 font-medium text-sm md:text-base leading-relaxed">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/5491124026700?text=${encodeURIComponent('Hola Luan, quiero solicitar una demo para la arquitectura de ' + selectedRubro.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // Re-conecta el webhook de captación global
                    fetch('https://n8n-n8n.crypuw.easypanel.host/webhook/webpage', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ action: 'CTA_CLICK', rubro: selectedRubro.title, category: selectedRubro.category }),
                      mode: 'no-cors'
                    }).catch(() => {});
                  }}
                  className="w-full relative z-10 flex items-center justify-center gap-3 px-8 py-5 bg-[#00FFFF] text-[#0A0A0A] font-black text-lg rounded-2xl hover:bg-[#00FFFF]/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.4)] group"
                >
                  {selectedRubro.ctaText}
                  <svg className="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in {
          animation: fadeInSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
}

export default function DiagnosticoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#00FFFF] font-bold drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Cargando diagnóstico B2B...</div>}>
      <DiagnosticoContent />
    </Suspense>
  );
}
