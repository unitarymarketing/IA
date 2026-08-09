'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ShowcaseTabs from '@/components/ShowcaseTabs';
import { 
    Cpu, 
    Bot, 
    Code, 
    ServerCog, 
    ArrowRight,
    MessageSquare,
    CheckCircle2,
    Calendar,
    LineChart
} from 'lucide-react';

export default function Home() {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const luanVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollGlow = () => {
            if (videoContainerRef.current) {
                const scrollY = window.scrollY;
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;
                
                // Opacity pulses between 0.3 and 0.8 depending on scroll
                const glowIntensity = 0.3 + (scrollPercent * 0.5);
                
                videoContainerRef.current.style.setProperty('--scroll-glow', glowIntensity.toString());
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                animationFrameId = requestAnimationFrame(updateScrollGlow);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateScrollGlow(); // initial call

        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && luanVideoRef.current) {
                    luanVideoRef.current.play().catch(e => console.warn("Autoplay preventido:", e));
                } else if (luanVideoRef.current) {
                    luanVideoRef.current.pause();
                }
            });
        }, { threshold: 0.3 });

        if (luanVideoRef.current) {
            videoObserver.observe(luanVideoRef.current);
        }

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            if (luanVideoRef.current) {
                videoObserver.unobserve(luanVideoRef.current);
            }
        };
    }, []);


    return (
        <main className="w-full max-w-full overflow-x-hidden relative bg-[#0A192F] text-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
            
            {/* Fixed Video Background with Neon Glow */}
            <div 
                ref={videoContainerRef}
                className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen"
                style={{
                    opacity: 'var(--scroll-glow, 0.4)',
                    transition: 'opacity 0.1s linear',
                    filter: 'drop-shadow(0 0 50px rgba(138, 43, 226, var(--scroll-glow, 0.5)))',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy, #0A192F)] via-transparent to-[var(--navy, #0A192F)] z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy, #0A192F)] via-transparent to-[var(--navy, #0A192F)] z-10" />
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    preload="metadata"
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/videos/p2v_Veo 3.1 Image to Video_2026-03-10_14-18-18.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 flex flex-col items-center text-center z-10 w-full">
                <span className="px-4 py-1.5 rounded-full border border-[#00F2FE]/40 bg-[#1E293B]/80 text-[#00F2FE] text-xs font-semibold tracking-widest uppercase mb-4 inline-block shadow-[0_0_10px_rgba(0,242,254,0.2)]">
                    UNITARY MARKETING • INNOVACIÓN SIN LÍMITES
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-[#FFFFFF] tracking-tight leading-tight max-w-4xl relative mb-6 drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                    Infraestructura de Software e IA que Automatiza las <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#0D9488] drop-shadow-[0_0_15px_rgba(138,43,226,0.6)]">Operaciones y Ventas</span> de tu Empresa
                </h1>
                
                <p className="text-lg md:text-xl text-[#E2E8F0] max-w-2xl mb-10 relative font-light">
                    Desarrollamos ecosistemas a medida (Next.js, n8n, Kommo CRM) para escalar procesos corporativos sin aumentar tu estructura de costos.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 relative w-full sm:w-auto">
                    <Link 
                        href="/diagnostico/" 
                        className="bg-emerald-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-teal/90 transition-all shadow-[0_0_20px_rgba(13,148,136,0.4)] hover:shadow-[0_0_30px_rgba(13,148,136,0.6)] flex items-center justify-center gap-2"
                    >
                        Diagnosticar mi Empresa <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Tech Stack Bar */}
            <section className="py-8 relative z-10 w-full">
                <div className="w-full max-w-5xl mx-auto px-4 my-8 text-center">
                    <p className="text-xs uppercase tracking-widest text-[#00F2FE] font-mono mb-4">STACK TECNOLÓGICO CORPORATIVO</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                        {['Next.js', 'Firebase', 'n8n', 'FastAPI', 'Django', 'Kommo CRM', 'PostgreSQL', 'React'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#00F2FE]/20 text-xs sm:text-sm font-medium text-[#E2E8F0] shadow-sm flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]"></span>
                            {tech}
                        </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Showcase Section */}
            <section className="py-16 md:py-24 relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-[0_0_10px_rgba(0,242,254,0.3)]">Showcase de Entregables B2B</h2>
                    <p className="text-slate-soft max-w-2xl mx-auto">Explora de manera interactiva las arquitecturas y ecosistemas que desarrollamos para operaciones complejas.</p>
                </div>
                <ShowcaseTabs />
            </section>

            {/* Luan - Agente IA Video Demo Section */}
            <section id="luan-ai" className="py-16 md:py-24 relative z-10 w-full">
                <div className="bg-[rgba(30,41,59,0.7)] backdrop-blur-xl border border-[#0D9488]/50 rounded-[40px] p-8 md:p-12 relative overflow-hidden group shadow-[0_0_50px_rgba(138,43,226,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/10 via-transparent to-[#00F2FE]/10 pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D9488] to-[#00F2FE]" />
                    
                    <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--navy, #0A192F)] border border-[#00F2FE]/30 text-[#00F2FE] text-sm font-bold mb-6 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                                <Bot className="w-4 h-4" /> Conoce a Luan - Agente IA
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] mb-6 drop-shadow-[0_0_10px_rgba(138,43,226,0.3)]">
                                Tu Primer Agente de IA Operando 24/7
                            </h2>
                            <p className="text-lg text-[#E2E8F0] leading-relaxed mb-8">
                                Descubrí cómo Luan - Agente IA califica prospectos, agenda reuniones y sincroniza tu CRM en tiempo real sin intervención humana.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button 
                                    onClick={() => window.dispatchEvent(new CustomEvent('open-luan-chat'))}
                                    className="px-6 py-3 rounded-xl bg-[#0D9488] hover:bg-[#00F2FE] text-[#FFFFFF] hover:text-[#0A192F] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                                >
                                    Hablá con Luan
                                </button>
                                <a 
                                    href="https://wa.me/5491124026700?text=Hola%20Luan%2C%20quiero%20agendar%20una%20cita%20de%20diagn%C3%B3stico%20para%20evaluar%20un%20ecosistema%20en%20mi%20empresa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-transparent border border-[#00F2FE] text-[#00F2FE] hover:bg-[#00F2FE]/10 font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.5)] flex items-center justify-center"
                                >
                                    Agendá una cita
                                </a>
                            </div>
                        </div>
                        
                        <div className="flex-1 w-full flex justify-center">
                            <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto rounded-[2.5rem] border-2 border-[#00F2FE]/40 bg-[var(--navy, #0A192F)] p-2 shadow-[0_0_25px_rgba(138,43,226,0.3)]">
                                <video 
                                    ref={luanVideoRef}
                                    src="/videos/luan-demo.mp4" 
                                    preload="metadata"
                                    loop 
                                    controls
                                    playsInline 
                                    className="w-full h-full object-cover rounded-[2rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* B2B Mockups Bento Grid */}
            <section id="soluciones" className="py-16 md:py-24 relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] mb-4 drop-shadow-[0_0_10px_rgba(138,43,226,0.3)]">Ecosistemas en Acción</h2>
                    <p className="text-[#E2E8F0] max-w-2xl mx-auto">Casos de uso reales de infraestructuras desarrolladas para industrias complejas.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Tarjeta 1 */}
                    <div className="bg-[#1E293B] border border-[#00F2FE]/20 rounded-2xl p-6 hover:border-[#00F2FE]/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.15)] flex flex-col h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/mockups/clinicas-triage.jpeg" alt="Clínicas Médicas" className="w-full h-auto max-h-[260px] sm:max-h-[320px] object-cover rounded-xl mb-4" />
                        <p className="text-[#E2E8F0] text-sm mb-4 flex-grow"><span className="font-semibold text-[#00F2FE]">Desafío resuelto:</span> Saturación en la asignación de turnos y cuellos de botella en la atención de pacientes, integrado al HIS.</p>
                        <div className="flex gap-2 mb-6">
                            <span className="text-xs font-bold px-3 py-1 bg-[var(--navy, #0A192F)]/80 rounded-full border border-[#00F2FE]/40 text-[#00F2FE]">Next.js</span>
                            <span className="text-xs font-bold px-3 py-1 bg-[var(--navy, #0A192F)]/80 rounded-full border border-[#8A2BE2]/40 text-[#8A2BE2]">n8n</span>
                        </div>
                        <a 
                            href={`https://wa.me/5491124026700?text=${encodeURIComponent('Hola Luan - Agente IA, quiero consultar por el sistema para Clínicas Médicas')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center bg-[#0D9488] text-white px-4 py-3 rounded-full font-bold text-sm hover:bg-[#0D9488]/90 transition-all shadow-[0_0_15px_rgba(13,148,136,0.3)]"
                        >
                            Solicitar Demo de este Ecosistema
                        </a>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="bg-[#1E293B] border border-[#00F2FE]/20 rounded-2xl p-6 hover:border-[#00F2FE]/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.15)] flex flex-col h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/mockups/obras-control.png" alt="Control de Obras" className="w-full h-auto max-h-[260px] sm:max-h-[320px] object-cover rounded-xl mb-4" />
                        <p className="text-[#E2E8F0] text-sm mb-4 flex-grow"><span className="font-semibold text-[#00F2FE]">Desafío resuelto:</span> Falta de visibilidad en el progreso, firmas digitales y reportes en tiempo real para constructoras.</p>
                        <div className="flex gap-2 mb-6">
                            <span className="text-xs font-bold px-3 py-1 bg-[var(--navy, #0A192F)]/80 rounded-full border border-[#00F2FE]/40 text-[#00F2FE]">Next.js</span>
                            <span className="text-xs font-bold px-3 py-1 bg-[var(--navy, #0A192F)]/80 rounded-full border border-[#8A2BE2]/40 text-[#8A2BE2]">Firebase</span>
                        </div>
                        <a 
                            href={`https://wa.me/5491124026700?text=${encodeURIComponent('Hola Luan - Agente IA, quiero consultar por el sistema para Constructoras')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center bg-[#0D9488] text-white px-4 py-3 rounded-full font-bold text-sm hover:bg-[#0D9488]/90 transition-all shadow-[0_0_15px_rgba(13,148,136,0.3)]"
                        >
                            Solicitar Demo de este Ecosistema
                        </a>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-[#1E293B] border border-[#00F2FE]/20 rounded-2xl p-6 hover:border-[#00F2FE]/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.15)] flex flex-col h-full">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/mockups/distribuidoras-stock.png" alt="Sincronización de Stock" className="w-full h-auto max-h-[260px] sm:max-h-[320px] object-cover rounded-xl mb-4" />
                        <p className="text-[#E2E8F0] text-sm mb-4 flex-grow"><span className="font-semibold text-[#00F2FE]">Desafío resuelto:</span> Desconexión entre distribuidores y el ERP, errores en precios y stock desactualizado.</p>
                        <div className="flex gap-2 mb-6">
                            <span className="text-xs font-bold px-3 py-1 bg-[var(--navy, #0A192F)]/80 rounded-full border border-[#8A2BE2]/40 text-[#8A2BE2]">Django</span>
                            <span className="text-xs font-bold px-3 py-1 bg-[var(--navy, #0A192F)]/80 rounded-full border border-[#00F2FE]/40 text-[#00F2FE]">Kommo CRM</span>
                        </div>
                        <a 
                            href={`https://wa.me/5491124026700?text=${encodeURIComponent('Hola Luan - Agente IA, quiero consultar por el sistema para Distribuidoras')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center bg-[#0D9488] text-white px-4 py-3 rounded-full font-bold text-sm hover:bg-[#0D9488]/90 transition-all shadow-[0_0_15px_rgba(13,148,136,0.3)]"
                        >
                            Solicitar Demo de este Ecosistema
                        </a>
                    </div>
                </div>
            </section>

            {/* Conversion Widgets & CTA */}
            <section className="py-16 md:py-24 relative z-10 border-t border-[rgba(30,41,59,0.7)]">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[rgba(30,41,59,0.9)] to-[var(--navy, #0A192F)] border border-[#00F2FE]/40 p-12 rounded-[40px] shadow-[0_0_50px_rgba(0,255,255,0.15)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F2FE] to-[#0D9488]" />
                    
                    <h2 className="text-3xl md:text-5xl font-black text-[#FFFFFF] mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">¿Listo para modernizar tu infraestructura?</h2>
                    <p className="text-xl text-[#E2E8F0] mb-10">Agenda una sesión de diagnóstico de 15 minutos o realiza nuestra auditoría técnica interactiva.</p>
                    
                    <div className="flex justify-center">
                        <Link 
                            href="/diagnostico/" 
                            className="bg-[#00F2FE] text-[var(--navy, #0A192F)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00F2FE]/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.4)] flex items-center justify-center gap-2"
                        >
                            Auditoría Interactiva <Cpu className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
            </div>
        </main>
    );
}
