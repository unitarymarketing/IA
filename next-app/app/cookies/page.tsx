import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-[var(--navy,#0A192F)] text-[#F5F5F5] py-20 px-4 sm:px-6 lg:px-8 selection:bg-[#00F2FE] selection:text-[#0A192F]">
            <div className="max-w-4xl mx-auto">
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-[#00F2FE] hover:text-[#0D9488] font-semibold mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                    Volver a la Home
                </Link>

                <div className="bg-[#1E293B]/80 backdrop-blur-md border border-[#00F2FE]/20 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,242,254,0.1)]">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-[0_0_10px_rgba(0,242,254,0.3)]">
                        Política de Cookies
                    </h1>
                    <p className="text-[#00F2FE] font-semibold mb-10 text-lg">Unitary Marketing</p>

                    <div className="space-y-8 text-slate-300 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">1. Uso de Cookies y Tecnologías Similares</h2>
                            <p>
                                En Unitary Marketing, empleamos tecnologías como el almacenamiento local (localStorage) y cookies técnicas estrictamente necesarias para garantizar el correcto funcionamiento de nuestra plataforma, optimizar el rendimiento y brindarte una experiencia fluida. No utilizamos cookies de rastreo invasivas de terceros.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Almacenamiento Local (localStorage)</h2>
                            <p>
                                Utilizamos el almacenamiento local de tu navegador exclusivamente para recordar tus preferencias de la interfaz, como la aceptación o rechazo del banner inicial de cookies. Esta información no se transmite a nuestros servidores ni se comparte con terceros; reside únicamente en tu dispositivo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. Sesión del Agente Luan IA</h2>
                            <p>
                                Nuestro Luan Chat Widget opera con una sesión técnica anónima (`web_session_`) que se genera de forma transitoria en la memoria de tu dispositivo. Esta sesión se utiliza únicamente para mantener la coherencia del hilo de la conversación en curso con nuestro ecosistema (n8n). Una vez que cierras la pestaña o el navegador, la sesión se descarta y no persisten historiales de identificación.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">4. Control del Usuario</h2>
                            <p>
                                Tienes control total sobre las cookies y el almacenamiento local a través de la configuración de tu propio navegador web. Puedes optar por borrar el almacenamiento local o desactivar la aceptación de cookies, aunque esto podría reiniciar tus preferencias de sesión la próxima vez que visites la plataforma.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-white/10 mt-12">
                            <p className="text-sm text-slate-400">
                                Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
