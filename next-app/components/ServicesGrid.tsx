export default function ServicesGrid() {
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
                    NUESTRO ECOSISTEMA
                </h2>
                <div style={{ width: '120px', height: '5px', background: 'linear-gradient(to right, #00FFFF, #FF00FF)', marginTop: '0.5rem', borderRadius: '4px' }}></div>
            </div>
        </div>

        {/* Grid de Tarjetas con gap-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Tarjeta 1 - Automatización */}
            <div className="relative w-full h-[450px] md:h-[600px] rounded-[20px] border border-white/10 overflow-hidden bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: "url('Diseño 2/Automatización.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 w-[85%] md:w-[60%] p-8 md:p-[50px] flex flex-col justify-end text-left pointer-events-none">
                    <h3 className="text-white uppercase m-0" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2 }}>
                        KOMMO & N8N AUTOMATIZACIÓN
                    </h3>
                    <p className="text-[#d1d5db]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 400, marginTop: '20px', lineHeight: 1.6 }}>
                        Centralizá tus leads con KOMMO y automatizá tus procesos con N8N para escalar tu negocio de manera exponencial.
                    </p>
                </div>
            </div>

            {/* Tarjeta 2 - Marketing */}
            <div className="relative w-full h-[450px] md:h-[600px] rounded-[20px] border border-white/10 overflow-hidden bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: "url('Diseño 2/Marketing.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 w-[85%] md:w-[60%] p-8 md:p-[50px] flex flex-col justify-end text-left pointer-events-none">
                    <h3 className="text-white uppercase m-0" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2 }}>
                        MARKETING DIGITAL
                    </h3>
                    <p className="text-[#d1d5db]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 400, marginTop: '20px', lineHeight: 1.6 }}>
                        Posicioná tu marca con campañas de alto impacto, diagnósticos precisos de infraestructura digital y propuestas comerciales diseñadas a tu medida.
                    </p>
                </div>
            </div>

            {/* Tarjeta 3 - Web Dev */}
            <div className="relative w-full h-[450px] md:h-[600px] rounded-[20px] border border-white/10 overflow-hidden bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: "url('Diseño 2/Web.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 w-[85%] md:w-[60%] p-8 md:p-[50px] flex flex-col justify-end text-left pointer-events-none">
                    <h3 className="text-white uppercase m-0" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2 }}>
                        DESARROLLO WEB
                    </h3>
                    <p className="text-[#d1d5db]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 400, marginTop: '20px', lineHeight: 1.6 }}>
                        Sitios web de alta velocidad desarrollados con arquitectura robusta en Next.js, diseño premium exclusivo y optimización estructural para SEO.
                    </p>
                </div>
            </div>

            {/* Tarjeta 4 - Portfolios (Reemplazo HTML/CSS Nativo) */}
            <div className="relative w-full md:col-span-2 h-auto md:h-[600px] rounded-[24px] overflow-hidden transition-transform duration-500 hover:scale-[1.02] p-8 md:p-10 flex flex-col xl:flex-row gap-10 font-sans" style={{ background: 'linear-gradient(145deg, #0f111a, #07080e)', backgroundClip: 'padding-box', border: '2px solid transparent', boxShadow: '0px 0px 30px rgba(0, 242, 254, 0.15), 0px 0px 50px rgba(224, 0, 255, 0.1)' }}>
                {/* Borde Neón */}
                <div className="absolute top-[-2px] bottom-[-2px] left-[-2px] right-[-2px] rounded-[26px] z-[-1] opacity-60" style={{ background: 'linear-gradient(135deg, #00f2fe, #4facfe, #b92b27, #1565c0)' }}></div>
                
                <div className="flex-[1.2] flex flex-col justify-between z-10">
                    <div className="h-[250px] border border-dashed rounded-[16px] flex justify-center items-center" style={{ borderColor: 'rgba(0, 242, 254, 0.3)', background: 'rgba(255, 255, 255, 0.02)', color: '#4facfe', fontSize: '14px' }}>
                        <div className="border-2 rounded-[12px] text-center py-2.5 px-5" style={{ borderColor: '#e000ff', boxShadow: '0 0 15px rgba(224, 0, 255, 0.4)' }}>
                            <div className="text-white font-black text-[18px] tracking-[1px]">Concepto</div>
                            <div className="text-[12px]" style={{ color: '#00f2fe' }}>&lt; ··· &amp; ··· &gt;</div>
                            <div className="text-white font-black text-[18px] tracking-[1px]">Visualización</div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h1 className="text-white font-black uppercase tracking-[1px] m-0 mb-[15px]" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>Diseño de Portfolios</h1>
                        <p className="font-normal m-0 leading-[1.4]" style={{ color: '#b0b3c1', fontSize: 'clamp(18px, 2vw, 24px)' }}>
                            Impulsa tu carrera con portfolios profesionales y elegantes, diseñados para destacar tu talento al máximo
                        </p>
                    </div>
                </div>
                
                <div className="flex-1 flex-col justify-between gap-5 z-10 hidden xl:flex">
                    <div className="rounded-[18px] p-5 flex-1 border" style={{ background: 'rgba(15, 18, 28, 0.7)', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                        <div className="flex gap-[6px] mb-[15px]">
                            <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f56' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: '#ffbd2e' }}></div>
                            <div className="w-2 h-2 rounded-full" style={{ background: '#27c93f' }}></div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-[15px]">
                            <div className="rounded-[12px] p-3 border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.04)' }}>
                                <div className="font-bold mb-2 text-[11px]" style={{ color: '#8fa0dd' }}>KPIs de Portfolio</div>
                                <div className="w-[50px] h-[50px] rounded-full mx-auto relative" style={{ background: 'conic-gradient(#00f2fe 70%, #e000ff 0)' }}>
                                    <div className="absolute inset-[10px] rounded-full" style={{ background: '#121420' }}></div>
                                </div>
                            </div>
                            <div className="rounded-[12px] p-3 border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.04)' }}>
                                <div className="font-bold mb-2 text-[11px]" style={{ color: '#8fa0dd' }}>Vistas por Mes</div>
                                <div className="flex items-end gap-1 h-[50px] justify-center">
                                    <div className="w-2 rounded-sm" style={{ height: '20px', background: '#e000ff' }}></div>
                                    <div className="w-2 rounded-sm" style={{ height: '35px', background: '#4facfe' }}></div>
                                    <div className="w-2 rounded-sm" style={{ height: '50px', background: '#00f2fe' }}></div>
                                </div>
                            </div>
                            <div className="rounded-[12px] p-3 border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.04)' }}>
                                <div className="font-bold mb-2 text-[11px]" style={{ color: '#8fa0dd' }}>Nuevas Solicitudes</div>
                                <div className="w-[50px] h-[50px] rounded-full mx-auto relative" style={{ background: 'conic-gradient(#e000ff 40%, #4facfe 0)' }}>
                                    <div className="absolute inset-[10px] rounded-full" style={{ background: '#121420' }}></div>
                                </div>
                            </div>
                            <div className="rounded-[12px] p-3 border" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.04)' }}>
                                <div className="font-bold mb-2 text-[11px]" style={{ color: '#8fa0dd' }}>Conversión</div>
                                <div className="text-center mt-[10px] font-black" style={{ color: '#00f2fe', fontSize: '18px' }}>84%</div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[18px] p-5 flex items-center justify-between border-2" style={{ background: 'rgba(0, 242, 254, 0.03)', borderColor: 'rgba(0, 242, 254, 0.3)', boxShadow: 'inset 0 0 15px rgba(0, 242, 254, 0.1)' }}>
                        <div className="cursor-pointer font-bold text-[28px]" style={{ color: '#00f2fe' }}>&lt;</div>
                        <div className="flex gap-5 items-center font-bold text-white opacity-80">
                            <div className="rounded-lg px-3 py-1.5 text-[16px]" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#ff7a00' }}>Adobe</div>
                            <div className="rounded-lg px-3 py-1.5 text-[16px]" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#a259ff' }}>Figma</div>
                            <div className="rounded-lg px-3 py-1.5 text-[16px] font-black" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>Bē</div>
                        </div>
                        <div className="cursor-pointer font-bold text-[28px]" style={{ color: '#00f2fe' }}>&gt;</div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}
