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
  priceRangeUSD: { min: number; max: number };
  estimatedTimeWeeks: string;
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
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500/30">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
            Descubrí la arquitectura de IA e Infraestructura para tu empresa
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Seleccioná tu industria o buscá tu rubro para conocer el ecosistema tecnológico exacto que multiplicará el ROI de tus operaciones B2B.
          </p>
        </div>

        {/* Predictive Search */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full bg-neutral-900/50 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all backdrop-blur-sm"
            placeholder="Ej: Estudio Jurídico, Logística, Salud..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Pill-Grid */}
        <div className="flex overflow-x-auto md:flex-wrap gap-2 pb-4 md:pb-0 mb-12 no-scrollbar md:justify-center">
          {filteredRubros.map((rubro) => {
            const isActive = selectedRubro?.id === rubro.id;
            return (
              <button
                key={rubro.id}
                onClick={() => setSelectedRubro(rubro)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 backdrop-blur ${
                  isActive
                    ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                    : 'bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {rubro.title}
              </button>
            );
          })}
          {filteredRubros.length === 0 && (
            <div className="text-neutral-500 text-sm py-2 text-center w-full">No se encontraron resultados para tu búsqueda.</div>
          )}
        </div>

        {/* Interactive Card */}
        {selectedRubro && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative bg-neutral-900/50 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10">
              {/* Left Column */}
              <div className="flex-1 space-y-8">
                <div>
                  <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">
                    {selectedRubro.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedRubro.title}</h2>
                </div>

                <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div>
                      <h3 className="text-red-300 font-medium mb-1">Dolor Operativo Mapeado</h3>
                      <p className="text-red-200/70 text-sm leading-relaxed">{selectedRubro.operationalPain}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRubro.techStack.map((tech, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 text-neutral-300 px-3 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 bg-black/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                    <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Módulos de Solución
                  </h3>
                  <ul className="space-y-4 mb-8">
                    {selectedRubro.solutionModules.map((module, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="h-3.5 w-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-neutral-300 text-sm md:text-base">{module}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col md:flex-row gap-3 mb-6 pt-6 border-t border-white/10">
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-between">
                      <span className="text-neutral-400 text-xs uppercase tracking-wider font-semibold">Inversión USD</span>
                      <span className="text-white font-bold text-sm">US${selectedRubro.priceRangeUSD.min.toLocaleString()} - ${selectedRubro.priceRangeUSD.max.toLocaleString()}</span>
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex items-center justify-between">
                      <span className="text-neutral-400 text-xs uppercase tracking-wider font-semibold">Plazo Estimado</span>
                      <span className="text-white font-bold text-sm">{selectedRubro.estimatedTimeWeeks}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={selectedRubro.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                  <span className="relative z-10">{selectedRubro.ctaText}</span>
                  <svg className="relative z-10 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
    <Suspense fallback={<div className="min-h-screen bg-neutral-950 flex items-center justify-center text-indigo-500">Cargando diagnóstico...</div>}>
      <DiagnosticoContent />
    </Suspense>
  );
}
