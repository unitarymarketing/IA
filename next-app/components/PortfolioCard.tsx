'use client';

import React from 'react';

export default function PortfolioCard() {
  return (
    <div 
      className="relative w-full max-w-[1200px] min-h-[680px] rounded-[32px] p-6 lg:p-[45px] box-border flex flex-col lg:flex-row gap-10 overflow-hidden md:col-span-2 font-sans"
      style={{
        backgroundColor: '#070913',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          radial-gradient(circle at 20% 30%, rgba(0, 242, 254, 0.15) 0%, transparent 45%),
          radial-gradient(circle at 85% 70%, rgba(217, 43, 239, 0.12) 0%, transparent 50%)
        `,
        backgroundSize: '30px 30px, 30px 30px, 100% 100%, 100% 100%',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0px 40px 80px rgba(0, 0, 0, 0.9), inset 0 0 60px rgba(0, 242, 254, 0.02)'
      }}
    >
      {/* Línea de Borde de Cristal Líquido Neón */}
      <div 
        className="absolute inset-0 rounded-[32px] pointer-events-none"
        style={{
          padding: '2px',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.5), rgba(59, 130, 246, 0.1), rgba(217, 70, 239, 0.4), rgba(5, 6, 11, 0.9))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      ></div>

      {/* Columna Izquierda */}
      <div className="flex-[1.2] flex flex-col justify-between gap-[30px] z-10">
        
        {/* BLOQUE IZQUIERDO: DIAGRAMA DE FLUJO */}
        <div className="relative h-[340px] flex items-center justify-center rounded-[24px] p-6 lg:p-[25px]" style={{ background: 'rgba(4, 6, 14, 0.7)', border: '1px solid rgba(0, 242, 254, 0.2)', boxShadow: '0 0 30px rgba(0, 242, 254, 0.05)' }}>
          {/* SVG de conexiones */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="line-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <path d="M 140 85 L 210 145" stroke="url(#line-cyan)" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
            <path d="M 145 170 L 200 170" stroke="url(#line-cyan)" strokeWidth="1.5" fill="none" />
            <path d="M 140 255 L 210 195" stroke="url(#line-cyan)" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
            <path d="M 430 170 L 365 170" stroke="url(#line-purple)" strokeWidth="1.5" fill="none" />
          </svg>

          <div className="flex w-full justify-between items-center relative z-[2] max-w-[500px] mx-auto gap-[15px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to right, #00f2fe, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(0,242,254,0.1)', color: '#00f2fe' }}>UI</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Diseño Web</span>
              </div>
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to right, #00f2fe, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6' }}>UX</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Estrategia</span>
              </div>
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to right, #00f2fe, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>DEV</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Código</span>
              </div>
            </div>

            <div className="rounded-[20px] text-center px-4 sm:px-[26px] py-[22px] relative" style={{ background: '#090b14', border: '1px solid #d946ef', boxShadow: '0 0 40px rgba(217, 70, 239, 0.25), inset 0 0 20px rgba(217, 70, 239, 0.15)' }}>
              <div className="font-black text-sm sm:text-[18px] tracking-[2px] uppercase text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Concepto</div>
              <div className="my-1.5 text-[10px] sm:text-[13px] font-bold" style={{ color: '#00f2fe', textShadow: '0 0 8px #00f2fe' }}>&lt; ··· &amp; ··· &gt;</div>
              <div className="font-black text-sm sm:text-[18px] tracking-[2px] uppercase text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Visualización</div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to left, #d946ef, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(217,70,239,0.1)', color: '#d946ef' }}>3D</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Modelado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Textos Principales */}
        <div className="mt-2.5 text-center lg:text-left">
          <h1 className="text-4xl lg:text-[54px] font-black uppercase tracking-[-1px] m-0 mb-3.5 leading-[1.05]" style={{ background: 'linear-gradient(to bottom, #ffffff 60%, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Diseño de<br className="hidden lg:block"/> Portfolios
          </h1>
          <p className="font-light text-base lg:text-[18px] leading-[1.6] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#b0b3c1' }}>
            Impulsa tu carrera con portfolios profesionales y elegantes, diseñados para destacar tu talento al máximo.
          </p>
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="flex-1 flex flex-col justify-between gap-[25px] z-10 hidden lg:flex">
        
        {/* BLOQUE DERECHO: DASHBOARD ANALÍTICO COMPLEJO */}
        <div className="rounded-[24px] p-[24px] flex-1 flex flex-col justify-between" style={{ background: 'rgba(10, 14, 26, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0px rgba(255,255,255,0.1)' }}>
          <div className="flex gap-1.5 mb-5">
            <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-[14px]">
            
            {/* Metric Tile 1 */}
            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>KPIs de Portfolio</span>
              </div>
              <div className="flex items-center gap-[12px] justify-around">
                <div className="w-[54px] h-[54px] rounded-full relative" style={{ background: 'conic-gradient(#00f2fe 0% 60%, #d946ef 60% 85%, #3b82f6 85% 100%)', boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)' }}>
                  <div className="absolute inset-[10px] rounded-full" style={{ background: '#0b0e17' }}></div>
                </div>
                <div className="flex flex-col gap-[3px] text-[9px]" style={{ fontFamily: "'Inter', sans-serif", color: '#aebeee' }}>
                  <div className="flex items-center gap-[5px]"><div className="w-[6px] h-[6px] rounded-full" style={{ background: '#00f2fe' }}></div> UI/UX</div>
                  <div className="flex items-center gap-[5px]"><div className="w-[6px] h-[6px] rounded-full" style={{ background: '#d946ef' }}></div> Brand</div>
                  <div className="flex items-center gap-[5px]"><div className="w-[6px] h-[6px] rounded-full" style={{ background: '#3b82f6' }}></div> Render</div>
                </div>
              </div>
            </div>

            {/* Metric Tile 2 */}
            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>Vistas por Mes</span>
              </div>
              <div className="flex items-end justify-between h-[54px] px-[5px] relative border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '32px' }}>
                  <div style={{ height: '50%', background: '#00f2fe' }}></div><div style={{ height: '30%', background: '#d946ef' }}></div>
                </div>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '48px' }}>
                  <div style={{ height: '50%', background: '#00f2fe' }}></div><div style={{ height: '20%', background: '#3b82f6' }}></div><div style={{ height: '30%', background: '#d946ef' }}></div>
                </div>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '40px' }}>
                  <div style={{ height: '50%', background: '#00f2fe' }}></div><div style={{ height: '30%', background: '#d946ef' }}></div>
                </div>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '52px' }}>
                  <div style={{ height: '50%', background: '#00f2fe' }}></div><div style={{ height: '20%', background: '#3b82f6' }}></div><div style={{ height: '30%', background: '#d946ef' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-[8px] mt-[5px]" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.2)' }}>
                <span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
              </div>
            </div>

            {/* Metric Tile 3 */}
            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>Nuevas Solicitudes</span>
              </div>
              <div className="flex items-center gap-[12px] justify-around">
                <div className="w-[54px] h-[54px] rounded-full relative" style={{ background: 'conic-gradient(#ff007a 0% 75%, rgba(255,255,255,0.05) 75% 100%)', boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)' }}>
                  <div className="absolute inset-[10px] rounded-full" style={{ background: '#0b0e17' }}></div>
                </div>
                <div className="flex flex-col gap-[3px] text-[9px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <div className="flex items-center gap-[5px]" style={{ color: '#ff007a', fontWeight: 'bold' }}>+75% Més</div>
                </div>
              </div>
            </div>

            {/* Metric Tile 4 */}
            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>Conversión</span>
                <span style={{ color: '#00f2fe' }}>↗</span>
              </div>
              <div className="flex flex-col items-center justify-center h-[54px]">
                <div className="font-black leading-none" style={{ fontSize: '34px', color: '#00f2fe', textShadow: '0 0 20px rgba(0, 242, 254, 0.4)' }}>84%</div>
              </div>
            </div>

          </div>
        </div>

        {/* Slider de Ecosistema e Integraciones */}
        <div className="rounded-[20px] px-[20px] py-[14px] flex items-center justify-between" style={{ background: 'rgba(0, 242, 254, 0.01)', border: '1px solid rgba(0, 242, 254, 0.15)', backdropFilter: 'blur(10px)' }}>
          <span className="font-bold text-[20px] cursor-pointer select-none transition-transform hover:scale-125" style={{ color: '#00f2fe' }}>&lt;</span>
          <div className="flex gap-[12px] items-center">
            <div className="font-bold text-[12px] rounded-[8px] px-[14px] py-[6px] flex items-center gap-1.5" style={{ background: 'rgba(255,122,0,0.05)', border: '1px solid rgba(255,255,255,0.04)', color: '#ff7a00' }}>Adobe</div>
            <div className="font-bold text-[12px] rounded-[8px] px-[14px] py-[6px] flex items-center gap-1.5" style={{ background: 'rgba(162,89,255,0.05)', border: '1px solid rgba(255,255,255,0.04)', color: '#a259ff' }}>Figma</div>
            <div className="font-black text-[12px] rounded-[8px] px-[14px] py-[6px] flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.04)', color: '#ffffff' }}>Bē</div>
          </div>
          <span className="font-bold text-[20px] cursor-pointer select-none transition-transform hover:scale-125" style={{ color: '#00f2fe' }}>&gt;</span>
        </div>

      </div>

    </div>
  );
}
