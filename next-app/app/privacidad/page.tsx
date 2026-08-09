'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[var(--navy,#0A192F)] text-[#F5F5F5] selection:bg-[#00F2FE] selection:text-[#0A192F]">
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-[0_0_10px_rgba(0,242,254,0.3)]">Políticas de Privacidad</h1>
        <p className="text-[#00F2FE] text-sm mb-12 tracking-widest uppercase font-bold">Última actualización: Agosto 2026</p>

        <div className="space-y-12 text-lg leading-relaxed text-[#E2E8F0]">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-[#00F2FE] to-transparent rounded-full"></span>
              1. Información que Recopilamos
            </h2>
            <p>
              En Unitary Marketing, recopilamos la información corporativa estrictamente necesaria para brindar nuestros servicios de arquitectura B2B. Esto incluye los datos que ingresas proactivamente en nuestros formularios de contacto, así como la información compartida durante las solicitudes e interacciones con nuestro Agente Luan IA.
            </p>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00F2FE]/20 to-transparent my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-[#8A2BE2] to-transparent rounded-full"></span>
              2. Uso de la Información
            </h2>
            <p className="mb-4">
              Nuestra arquitectura procesa tu información en tiempo real bajo estrictos estándares. Los datos recolectados se utilizan única y exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#E2E8F0]/80">
              <li>Llevar a cabo la calificación comercial de tus requerimientos.</li>
              <li>Agendamiento de auditorías técnicas y demostraciones.</li>
              <li>Sincronización segura de pipelines mediante integración con Kommo CRM y bases de datos internas.</li>
            </ul>
          </section>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00F2FE]/20 to-transparent my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-[#0D9488] to-transparent rounded-full"></span>
              3. Confidencialidad y Seguridad
            </h2>
            <p>
              La privacidad de tus datos estratégicos es vital. Procesamos la información operativa exclusivamente para optimizar tus ecosistemas. Nos comprometemos categóricamente a no vender, alquilar, ni divulgar tus datos o vectores de información a terceros no autorizados externos a nuestra infraestructura tecnológica.
            </p>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00F2FE]/20 to-transparent my-8"></div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></span>
              4. Derechos ARCO / Contacto
            </h2>
            <p>
              Como titular de los datos, conservas el derecho a solicitar el acceso, rectificación, cancelación u oposición (Derechos ARCO) respecto a tu información personal en cualquier momento. Tienes el derecho absoluto a solicitar la eliminación de tus datos de nuestros sistemas contactándonos a través de nuestros canales oficiales o solicitándolo directamente al Agente Luan IA.
            </p>
          </section>
        </div>
        
        <div className="mt-16">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E293B] border border-[#00F2FE]/30 text-[#00F2FE] font-bold hover:bg-[#00F2FE]/10 transition-colors shadow-[0_0_15px_rgba(0,242,254,0.15)] group">
            <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            Volver a la Home
          </Link>
        </div>
      </main>
    </div>
  );
}
