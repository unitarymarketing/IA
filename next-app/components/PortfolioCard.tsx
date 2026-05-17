'use client';

import React from 'react';

export default function PortfolioCard() {
  return (
    <div 
      className="relative w-full max-w-[1200px] min-h-[680px] rounded-[32px] p-6 lg:p-[45px] box-border flex flex-col lg:flex-row gap-10 overflow-hidden md:col-span-2 font-sans"
      style={{
        background: '#090b11',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(0, 242, 254, 0.03)'
      }}
    >
      {/* Línea de Borde de Neón Perimetral */}
      <div 
        className="absolute inset-0 rounded-[32px] pointer-events-none"
        style={{
          padding: '1.5px',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.4), rgba(79, 172, 254, 0.1), rgba(224, 0, 255, 0.3), rgba(13, 17, 28, 0.9))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      ></div>

      {/* Columna Izquierda */}
      <div className="flex-[1.2] flex flex-col justify-between gap-[35px] z-10">
        
        {/* BLOQUE IZQUIERDO: DIAGRAMA DE FLUJO NEÓN */}
        <div className="relative h-[320px] flex items-center justify-center rounded-[24px] p-[30px]" style={{ background: 'rgba(4, 5, 10, 0.6)', border: '1px dashed rgba(0, 242, 254, 0.2)' }}>
          {/* SVG de conexiones */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#4facfe" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e000ff" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#e000ff" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            <path d="M 120 70 L 220 140" stroke="url(#cyan-grad)" strokeWidth="2" fill="none" />
            <path d="M 120 150 L 200 150" stroke="url(#cyan-grad)" strokeWidth="2" fill="none" />
            <path d="M 120 230 L 220 170" stroke="url(#cyan-grad)" strokeWidth="2" fill="none" />
            <path d="M 440 150 L 360 150" stroke="url(#purple-grad)" strokeWidth="2" fill="none" />
          </svg>

          <div className="flex w-full justify-between items-center relative z-[2] max-w-[500px] mx-auto">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2.5 items-center p-2.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.4)]" style={{ background: 'rgba(15, 18, 28, 0.8)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(0,242,254,0.1)', color: '#00f2fe' }}>UI</div>
                <span className="text-[11px] font-semibold text-white hidden sm:inline">Wireframes</span>
              </div>
              <div className="flex gap-2.5 items-center p-2.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.4)]" style={{ background: 'rgba(15, 18, 28, 0.8)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(79,172,254,0.1)', color: '#4facfe' }}>UX</div>
                <span className="text-[11px] font-semibold text-white hidden sm:inline">User Flow</span>
              </div>
            </div>

            <div className="border-2 rounded-2xl text-center px-4 sm:px-[30px] py-[20px] z-[5]" style={{ borderColor: '#e000ff', background: '#07080e', boxShadow: '0 0 30px rgba(224, 0, 255, 0.3), inset 0 0 15px rgba(224, 0, 255, 0.2)' }}>
              <div className="font-black text-sm sm:text-[20px] tracking-[1.5px] uppercase text-white">Concepto</div>
              <div className="my-1 text-[10px] sm:text-[14px] opacity-80" style={{ color: '#00f2fe' }}>&lt; ··· &amp; ··· &gt;</div>
              <div className="font-black text-sm sm:text-[20px] tracking-[1.5px] uppercase text-white">Visualización</div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-2.5 items-center p-2.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.4)]" style={{ background: 'rgba(15, 18, 28, 0.8)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(224,0,255,0.1)', color: '#e000ff' }}>3D</div>
                <span className="text-[11px] font-semibold text-white hidden sm:inline">Assets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Textos Principales */}
        <div className="mt-2.5 text-center lg:text-left">
          <h1 className="text-4xl lg:text-[56px] font-black uppercase tracking-[-1px] m-0 mb-4 leading-[1.05]" style={{ background: 'linear-gradient(to bottom, #ffffff 70%, #a5b4fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Diseño de<br className="hidden lg:block"/> Portfolios
          </h1>
          <p className="font-light text-base lg:text-[20px] leading-[1.5] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#b0b3c1' }}>
            Impulsa tu carrera con portfolios profesionales y elegantes, diseñados para destacar tu talento al máximo.
          </p>
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="flex-1 flex flex-col justify-between gap-[25px] z-10 hidden lg:flex">
        
        {/* BLOQUE DERECHO: DASHBOARD ANALÍTICO COMPLEJO */}
        <div className="rounded-[24px] p-[24px] flex-1 flex flex-col justify-between" style={{ background: 'rgba(13, 17, 28, 0.7)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)' }}>
          <div className="flex gap-1.5 mb-5">
            <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            
            {/* Metric Tile 1 */}
            <div className="rounded-2xl p-4 relative" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <div className="flex justify-between items-center text-[12px] font-bold tracking-[0.5px] mb-3" style={{ color: '#8fa0dd' }}>
                <span>KPIs de Portfolio</span>
              </div>
              <div className="flex items-center gap-3 justify-center pt-1">
                <div className="w-16 h-16 rounded-full relative" style={{ background: 'conic-gradient(#00f2fe 0% 55%, #e000ff 55% 80%, #4facfe 80% 100%)' }}>
                  <div className="absolute inset-3 rounded-full" style={{ background: '#0d111c' }}></div>
                </div>
                <div className="flex flex-col gap-1 text-[9px]" style={{ fontFamily: "'Inter', sans-serif", color: '#b0b3c1' }}>
                  <div className="flex items-center gap-1"><div className="w-[5px] h-[5px] rounded-full" style={{ background: '#00f2fe' }}></div> UI Design</div>
                  <div className="flex items-center gap-1"><div className="w-[5px] h-[5px] rounded-full" style={{ background: '#e000ff' }}></div> Brand</div>
                  <div className="flex items-center gap-1"><div className="w-[5px] h-[5px] rounded-full" style={{ background: '#4facfe' }}></div> 3D</div>
                </div>
              </div>
            </div>

            {/* Metric Tile 2 */}
            <div className="rounded-2xl p-4 relative" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <div className="flex justify-between items-center text-[12px] font-bold tracking-[0.5px] mb-3" style={{ color: '#8fa0dd' }}>
                <span>Vistas por Mes</span>
              </div>
              <div className="flex items-end justify-between h-[65px] px-2.5 relative border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-[10px] rounded-t-[3px] flex flex-col-reverse overflow-hidden" style={{ height: '40px' }}>
                  <div style={{ height: '40%', background: '#00f2fe' }}></div><div style={{ height: '35%', background: '#4facfe' }}></div>
                </div>
                <div className="w-[10px] rounded-t-[3px] flex flex-col-reverse overflow-hidden" style={{ height: '55px' }}>
                  <div style={{ height: '40%', background: '#00f2fe' }}></div><div style={{ height: '35%', background: '#4facfe' }}></div><div style={{ height: '25%', background: '#e000ff' }}></div>
                </div>
                <div className="w-[10px] rounded-t-[3px] flex flex-col-reverse overflow-hidden" style={{ height: '48px' }}>
                  <div style={{ height: '40%', background: '#00f2fe' }}></div><div style={{ height: '25%', background: '#e000ff' }}></div>
                </div>
                <div className="w-[10px] rounded-t-[3px] flex flex-col-reverse overflow-hidden" style={{ height: '60px' }}>
                  <div style={{ height: '40%', background: '#00f2fe' }}></div><div style={{ height: '35%', background: '#4facfe' }}></div><div style={{ height: '25%', background: '#e000ff' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-[8px] mt-1.5 px-1" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.3)' }}>
                <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span>
              </div>
            </div>

            {/* Metric Tile 3 */}
            <div className="rounded-2xl p-4 relative" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <div className="flex justify-between items-center text-[12px] font-bold tracking-[0.5px] mb-3" style={{ color: '#8fa0dd' }}>
                <span>Nuevas Solicitudes</span>
              </div>
              <div className="flex items-center justify-center pt-1">
                <div className="w-16 h-16 rounded-full relative" style={{ background: 'conic-gradient(#e000ff 0% 45%, rgba(255,255,255,0.05) 45% 100%)' }}>
                  <div className="absolute inset-3 rounded-full" style={{ background: '#0d111c' }}></div>
                </div>
              </div>
            </div>

            {/* Metric Tile 4 */}
            <div className="rounded-2xl p-4 relative" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <div className="flex justify-between items-center text-[12px] font-bold tracking-[0.5px] mb-3" style={{ color: '#8fa0dd' }}>
                <span>Conversión</span>
                <span style={{ color: '#00f2fe' }}>↗</span>
              </div>
              <div className="flex flex-col items-center justify-center h-[70px]">
                <div className="font-black leading-none" style={{ fontSize: '38px', color: '#00f2fe', textShadow: '0 0 15px rgba(0, 242, 254, 0.3)' }}>84%</div>
              </div>
            </div>

          </div>
        </div>

        {/* Slider de Ecosistema e Integraciones */}
        <div className="rounded-[20px] px-6 py-4 flex items-center justify-between" style={{ background: 'rgba(0, 242, 254, 0.02)', border: '1px solid rgba(0, 242, 254, 0.2)', boxShadow: 'inset 0 0 20px rgba(0, 242, 254, 0.05)' }}>
          <span className="font-bold text-2xl cursor-pointer select-none transition-transform hover:scale-125" style={{ color: '#00f2fe' }}>&lt;</span>
          <div className="flex gap-4 items-center">
            <div className="font-bold text-[13px] rounded-[10px] px-4 py-2 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', color: '#ff7a00' }}>Adobe</div>
            <div className="font-bold text-[13px] rounded-[10px] px-4 py-2 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', color: '#a259ff' }}>Figma</div>
            <div className="font-black text-[13px] rounded-[10px] px-4 py-2 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', color: '#ffffff' }}>Bē</div>
          </div>
          <span className="font-bold text-2xl cursor-pointer select-none transition-transform hover:scale-125" style={{ color: '#00f2fe' }}>&gt;</span>
        </div>

      </div>

    </div>
  );
}
