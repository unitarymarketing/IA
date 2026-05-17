'use client';

import React from 'react';

export default function PortfolioCard() {
  return (
    <div className="relative w-full max-w-[1000px] min-h-[600px] bg-gradient-to-br from-[#0f111a] to-[#07080e] rounded-[24px] p-6 md:p-10 flex flex-col lg:flex-row gap-10 box-border shadow-[0px_0px_30px_rgba(0,242,254,0.15),0px_0px_50px_rgba(224,0,255,0.1)] before:content-[''] before:absolute before:-top-[2px] before:-bottom-[2px] before:-left-[2px] before:-right-[2px] before:bg-gradient-to-r before:from-[#00f2fe] before:via-[#4facfe] before:to-[#e000ff] before:rounded-[26px] before:-z-10 before:opacity-60 overflow-hidden md:col-span-2">
      
      {/* Columna Izquierda: Concepto y Textos */}
      <div className="flex-1 lg:flex-[1.2] flex flex-col justify-between gap-6">
        
        {/* Diagrama Concepto Simulado */}
        <div className="h-[250px] border border-dashed border-[#00f2fe]/30 rounded-2xl flex justify-center container items-center bg-white/[0.02] text-[#4facfe] text-sm p-4">
          <div className="border-2 border-[#e000ff] px-6 py-3 rounded-xl text-center shadow-[0_0_15px_rgba(224,0,255,0.4)] bg-[#07080e]/90">
            <div className="text-white font-black text-lg tracking-wider uppercase">Concepto</div>
            <div className="text-[#00f2fe] text-xs my-1">&lt; ··· &amp; ··· &gt;</div>
            <div className="text-white font-black text-lg tracking-wider uppercase">Visualización</div>
          </div>
        </div>

        {/* Textos Principales (100% Traducibles) */}
        <div className="text-left">
          <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-wide mb-4 leading-tight">
            Diseño de Portfolios
          </h2>
          <p className="text-[#b0b3c1] text-lg md:text-xl font-normal leading-relaxed">
            Impulsa tu carrera con portfolios profesionales y elegantes, diseñados para destacar tu talento al máximo.
          </p>
        </div>
      </div>

      {/* Columna Derecha: Dashboard y Slider de Marcas */}
      <div className="flex-1 flex flex-col justify-between gap-6 hidden md:flex">
        
        {/* Panel de Control / Dashboard Inteligente */}
        <div className="bg-[#0f121c]/70 border border-white/[0.08] rounded-2xl p-5 flex-1 flex flex-col justify-between">
          {/* Header estilo ventana Mac */}
          <div className="flex gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
          </div>
          
          {/* Grid de Gráficos con CSS puro */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04] flex flex-col justify-between items-center text-center">
              <span className="text-[#8fa0dd] text-[11px] font-bold tracking-wide block w-full text-left">KPIs de Portfolio</span>
              <div className="relative w-12 h-12 rounded-full bg-[conic-gradient(#00f2fe_70%,#e000ff_0)] flex items-center justify-center before:content-[''] before:absolute before:inset-2.5 before:bg-[#121420] before:rounded-full"></div>
            </div>
            
            <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04] flex flex-col justify-between">
              <span className="text-[#8fa0dd] text-[11px] font-bold tracking-wide block w-full text-left">Vistas por Mes</span>
              <div className="flex items-end justify-center gap-1 h-12 pt-2">
                <div className="w-2 h-5 bg-[#e000ff] rounded-sm"></div>
                <div className="w-2 h-8 bg-[#4facfe] rounded-sm"></div>
                <div className="w-2 h-12 bg-[#00f2fe] rounded-sm"></div>
              </div>
            </div>
            
            <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04] flex flex-col justify-between items-center text-center">
              <span className="text-[#8fa0dd] text-[11px] font-bold tracking-wide block w-full text-left">Nuevas Solicitudes</span>
              <div className="relative w-12 h-12 rounded-full bg-[conic-gradient(#e000ff_40%,#4facfe_0)] flex items-center justify-center before:content-[''] before:absolute before:inset-2.5 before:bg-[#121420] before:rounded-full"></div>
            </div>
            
            <div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04] flex flex-col justify-between text-center">
              <span className="text-[#8fa0dd] text-[11px] font-bold tracking-wide block w-full text-left">Tasa Conversión</span>
              <div className="text-[#00f2fe] text-2xl font-black flex items-center justify-center h-12">84%</div>
            </div>
          </div>
        </div>

        {/* Slider de Ecosistema Integrado */}
        <div className="bg-[#00f2fe]/[0.03] border-2 border-[#00f2fe]/30 rounded-2xl p-4 flex items-center justify-between shadow-[inset_0_0_15px_rgba(0,242,254,0.1)]">
          <span className="text-[#00f2fe] text-xl font-bold cursor-pointer select-none hover:scale-110 transition-transform">&lt;</span>
          <div className="flex gap-4 items-center font-bold text-white text-sm">
            <span className="bg-white/[0.05] px-3 py-1.5 rounded-lg text-[#ff7a00]">Adobe</span>
            <span className="bg-white/[0.05] px-3 py-1.5 rounded-lg text-[#a259ff]">Figma</span>
            <span className="bg-white/[0.05] px-3 py-1.5 rounded-lg font-black tracking-tighter">Bē</span>
          </div>
          <span className="text-[#00f2fe] text-xl font-bold cursor-pointer select-none hover:scale-110 transition-transform">&gt;</span>
        </div>
      </div>

    </div>
  );
}
