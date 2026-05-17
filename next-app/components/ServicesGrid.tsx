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

            {/* Tarjeta 4 - Portfolios */}
            <div className="relative w-full h-[450px] md:h-[600px] rounded-[20px] border border-white/10 overflow-hidden bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: "url('Diseño 2/Portfolio.png')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-0 left-0 w-[85%] md:w-[60%] p-8 md:p-[50px] flex flex-col justify-end text-left pointer-events-none">
                    <h3 className="text-white uppercase m-0" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.2 }}>
                        DISEÑO DE PORTFOLIOS
                    </h3>
                    <p className="text-[#d1d5db]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(15px, 2vw, 20px)', fontWeight: 400, marginTop: '20px', lineHeight: 1.6 }}>
                        Impulsá tu carrera y autoridad en el mercado con portfolios profesionales, estéticos y elegantes, estructurados para destacar tu talento al máximo.
                    </p>
                </div>
            </div>

        </div>
    </section>
  );
}
