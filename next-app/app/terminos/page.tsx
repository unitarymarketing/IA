'use client';

import React from 'react';
import Link from 'next/link';

export default function Terminos() {
  return (
    <div className="min-h-screen bg-[var(--navy,#0A192F)] text-[#F5F5F5] selection:bg-[#00F2FE] selection:text-[#0A192F]">
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(0,242,254,0.3)]">Términos y Condiciones</h1>
        <p className="text-[#00F2FE] text-sm mb-12 tracking-widest uppercase font-bold">Última actualización: Agosto 2026</p>

        <div className="space-y-12 text-lg leading-relaxed text-[#E2E8F0]">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-[#00F2FE] to-transparent rounded-full"></span>
              Relación Comercial y Ecosistemas
            </h2>
            <p>
              Bienvenido a Unitary Marketing. Al utilizar nuestros ecosistemas web (Next.js), automatizaciones en n8n y soluciones integradas de IA, aceptas estos términos que rigen nuestra relación algorítmica y comercial como proveedor de infraestructura de software B2B.
            </p>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00F2FE]/20 to-transparent my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-[#8A2BE2] to-transparent rounded-full"></span>
              Propiedad Intelectual
            </h2>
            <p className="mb-4">
              Queda estrictamente prohibida la copia, clonación, ingeniería inversa o reproducción no autorizada de nuestras arquitecturas propietarias, agentes de IA conversacionales, frameworks de interfaz y flujos de automatización sin el consentimiento explícito y por escrito del equipo de Unitary Marketing.
            </p>
          </section>
        </div>
        
        <div className="mt-16">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E293B] border border-[#00F2FE]/30 text-[#00F2FE] font-bold hover:bg-[#00F2FE]/10 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            ← Volver al Inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
