'use client';

import React from 'react';

export default function WebDevCard() {
  return (
    <div 
      className="relative w-full max-w-[1200px] min-h-[680px] rounded-[32px] p-6 lg:p-[45px] box-border flex flex-col lg:flex-row gap-10 overflow-hidden font-sans md:col-span-2"
      style={{
        backgroundColor: '#070913',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          radial-gradient(circle at 15% 25%, rgba(0, 242, 254, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 75%, rgba(59, 130, 246, 0.12) 0%, transparent 45%)
        `,
        backgroundSize: '30px 30px, 30px 30px, 100% 100%, 100% 100%',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0px 40px 80px rgba(0, 0, 0, 0.9), inset 0 0 60px rgba(0, 242, 254, 0.02)'
      }}
    >
      {/* Marco de Cristal Líquido Neón */}
      <div 
        className="absolute inset-0 rounded-[32px] pointer-events-none"
        style={{
          padding: '2px',
          background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.5), rgba(217, 70, 239, 0.1), rgba(59, 130, 246, 0.4), rgba(5, 6, 11, 0.9))',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      ></div>

      <div className="flex-[1.2] flex flex-col justify-between gap-[30px] z-10">
        
        {/* DIAGRAMA DE ARQUITECTURA DEV (SVG + HTML) */}
        <div className="relative h-[340px] flex items-center justify-center rounded-[24px] p-6 lg:p-[25px]" style={{ background: 'rgba(4, 6, 14, 0.7)', border: '1px solid rgba(0, 242, 254, 0.2)', boxShadow: '0 0 30px rgba(0, 242, 254, 0.05)' }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-cyan-web" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="line-purple-web" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
            <path d="M 140 85 L 210 145" stroke="url(#line-cyan-web)" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
            <path d="M 145 170 L 200 170" stroke="url(#line-cyan-web)" strokeWidth="1.5" fill="none" />
            <path d="M 140 255 L 210 195" stroke="url(#line-cyan-web)" strokeWidth="1.5" fill="none" strokeDasharray="4,4" />
            <path d="M 430 170 L 365 170" stroke="url(#line-purple-web)" strokeWidth="1.5" fill="none" />
          </svg>

          <div className="flex w-full justify-between items-center relative z-[2] max-w-[500px] mx-auto gap-[15px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to right, #00f2fe, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(0,242,254,0.1)', color: '#00f2fe' }}>NJS</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Next.js App</span>
              </div>
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to right, #00f2fe, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6' }}>TWC</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Tailwind CSS</span>
              </div>
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to right, #00f2fe, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}>API</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Rest / GraphQL</span>
              </div>
            </div>

            <div className="rounded-[20px] text-center px-4 sm:px-[26px] py-[22px] relative" style={{ background: '#090b14', border: '1px solid #00f2fe', boxShadow: '0 0 40px rgba(0, 242, 254, 0.25), inset 0 0 20px rgba(0, 242, 254, 0.15)' }}>
              <div className="font-black text-sm sm:text-[18px] tracking-[2px] uppercase text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Código</div>
              <div className="my-1.5 text-[10px] sm:text-[13px] font-bold" style={{ color: '#d946ef', textShadow: '0 0 8px #d946ef' }}>&lt; ··· &amp; ··· &gt;</div>
              <div className="font-black text-sm sm:text-[18px] tracking-[2px] uppercase text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Performance</div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-3 items-center px-[14px] py-[8px] rounded-[14px] relative" style={{ background: 'rgba(11, 15, 30, 0.9)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
                <div className="absolute inset-[-1px] rounded-[14px] pointer-events-none p-[1px]" style={{ background: 'linear-gradient(to left, #3b82f6, transparent)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></div>
                <div className="w-[28px] h-[28px] rounded-lg flex items-center justify-center text-[11px] font-black" style={{ background: 'rgba(217,70,239,0.1)', color: '#d946ef' }}>VRC</div>
                <span className="text-[10px] font-semibold text-white hidden sm:inline">Cloud Edge</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2.5 text-center lg:text-left">
          <h1 className="text-4xl lg:text-[54px] font-black uppercase tracking-[-1px] m-0 mb-3.5 leading-[1.05]" style={{ background: 'linear-gradient(to bottom, #ffffff 60%, #93c5fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Desarrollo<br className="hidden lg:block"/> Web
          </h1>
          <p className="font-light text-base lg:text-[18px] leading-[1.6] m-0" style={{ fontFamily: "'Inter', sans-serif", color: '#b0b3c1' }}>
            Sitios web ultra rápidos desarrollados con diseño premium en Next.js, arquitectura robusta y optimización SEO integral.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between gap-[25px] z-10 hidden lg:flex">
        
        {/* DASHBOARD DE RENDIMIENTO */}
        <div className="rounded-[24px] p-[24px] flex-1 flex flex-col justify-between" style={{ background: 'rgba(10, 14, 26, 0.4)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0px rgba(255,255,255,0.1)' }}>
          <div className="flex gap-1.5 mb-5">
            <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }}></div>
          </div>

          <div className="grid grid-cols-2 gap-[14px]">
            
            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>Performance Score</span>
              </div>
              <div className="flex items-center gap-[12px] justify-around">
                <div className="w-[54px] h-[54px] rounded-full relative" style={{ background: 'conic-gradient(#10b981 0% 99%, rgba(255,255,255,0.05) 99% 100%)', boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)' }}>
                  <div className="absolute inset-[10px] rounded-full" style={{ background: '#0b0e17' }}></div>
                </div>
                <div className="flex flex-col gap-[3px] text-[9px]" style={{ fontFamily: "'Inter', sans-serif", color: '#aebeee' }}>
                  <div className="flex items-center gap-[5px]" style={{ color: '#10b981', fontWeight: 'bold' }}>99% Core</div>
                </div>
              </div>
            </div>

            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>Tiempo de Carga</span>
              </div>
              <div className="flex items-end justify-between h-[54px] px-[5px] relative border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '45px' }}>
                  <div style={{ height: '75%', background: '#00f2fe' }}></div><div style={{ height: '25%', background: '#3b82f6' }}></div>
                </div>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '25px' }}>
                  <div style={{ height: '100%', background: '#00f2fe' }}></div>
                </div>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '15px' }}>
                  <div style={{ height: '100%', background: '#00f2fe' }}></div>
                </div>
                <div className="w-[8px] rounded-t-[2px] flex flex-col-reverse overflow-hidden" style={{ height: '10px' }}>
                  <div style={{ height: '100%', background: '#00f2fe' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-[8px] mt-[5px]" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.2)' }}>
                <span>TTFB</span><span>FCP</span><span>LCP</span><span>TTI</span>
              </div>
            </div>

            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>SEO Structural</span>
              </div>
              <div className="flex items-center gap-[12px] justify-around">
                <div className="w-[54px] h-[54px] rounded-full relative" style={{ background: 'conic-gradient(#00f2fe 0% 100%, rgba(255,255,255,0.05) 100% 100%)', boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)' }}>
                  <div className="absolute inset-[10px] rounded-full" style={{ background: '#0b0e17' }}></div>
                </div>
              </div>
            </div>

            <div className="rounded-[16px] p-[14px] relative" style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
              <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.5px] uppercase mb-[10px]" style={{ color: '#8fa0dd' }}>
                <span>Uptime Global</span>
                <span style={{ color: '#00f2fe' }}>⚡</span>
              </div>
              <div className="flex flex-col items-center justify-center h-[54px]">
                <div className="font-black leading-none" style={{ fontSize: '30px', color: '#10b981', textShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}>99.9%</div>
              </div>
            </div>

          </div>
        </div>

        <div className="rounded-[20px] px-[20px] py-[14px] flex items-center justify-between" style={{ background: 'rgba(0, 242, 254, 0.01)', border: '1px solid rgba(0, 242, 254, 0.15)', backdropFilter: 'blur(10px)' }}>
          <span className="font-bold text-[20px] cursor-pointer select-none transition-transform hover:scale-125" style={{ color: '#00f2fe' }}>&lt;</span>
          <div className="flex gap-[12px] items-center">
            <div className="font-bold text-[12px] rounded-[8px] px-[14px] py-[6px] flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)', color: '#ffffff' }}>React</div>
            <div className="font-bold text-[12px] rounded-[8px] px-[14px] py-[6px] flex items-center gap-1.5" style={{ background: 'rgba(0,242,254,0.05)', border: '1px solid rgba(255,255,255,0.04)', color: '#00f2fe' }}>Next.js</div>
            <div className="font-black text-[12px] rounded-[8px] px-[14px] py-[6px] flex items-center gap-1.5" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(255,255,255,0.04)', color: '#38bdf8' }}>Tailwind</div>
          </div>
          <span className="font-bold text-[20px] cursor-pointer select-none transition-transform hover:scale-125" style={{ color: '#00f2fe' }}>&gt;</span>
        </div>

      </div>

    </div>
  );
}
