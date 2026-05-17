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
            <div className="flex flex-col group">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src="Diseño 2/Automatización.png" alt="Automatización KOMMO y N8N" className="w-full h-auto object-cover" />
                </div>
                <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed text-justify md:text-left font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Centralizá tus leads con KOMMO y automatizá tus procesos con N8N para escalar tu negocio de manera exponencial.
                </p>
            </div>

            {/* Tarjeta 2 - Marketing */}
            <div className="flex flex-col group">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src="Diseño 2/Marketing.png" alt="Marketing Digital" className="w-full h-auto object-cover" />
                </div>
                <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed text-justify md:text-left font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Posicioná tu marca con campañas de alto impacto, diagnósticos precisos de infraestructura digital y propuestas comerciales diseñadas a tu medida.
                </p>
            </div>

            {/* Tarjeta 3 - Web Dev */}
            <div className="flex flex-col group">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src="Diseño 2/Web.png" alt="Desarrollo Web" className="w-full h-auto object-cover" />
                </div>
                <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed text-justify md:text-left font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Sitios web de alta velocidad desarrollados con arquitectura robusta en Next.js, diseño premium exclusivo y optimización estructural para SEO.
                </p>
            </div>

            {/* Tarjeta 4 - Portfolios */}
            <div className="flex flex-col group">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                    <img src="Diseño 2/Portfolio.png" alt="Diseño de Portfolios" className="w-full h-auto object-cover" />
                </div>
                <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed text-justify md:text-left font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Impulsá tu carrera y autoridad en el mercado con portfolios profesionales, estéticos y elegantes, estructurados para destacar tu talento al máximo.
                </p>
            </div>

        </div>
    </section>
  );
}
