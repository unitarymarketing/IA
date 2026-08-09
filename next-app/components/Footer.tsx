import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-cyber-slate/50 bg-deep-navy py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
                    <img src="/videos/Logo Unitary.png" alt="Unitary Marketing" className="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,242,254,0.4)] mb-3" />
                    <span className="text-white font-bold text-lg tracking-widest uppercase mb-1">
                        UNITARY MARKETING
                    </span>
                    <span className="text-[#00F2FE] font-medium text-sm mb-2">
                        Innovación sin límites
                    </span>
                    <p className="text-[#E2E8F0] text-xs sm:text-sm">
                        Infraestructura de Software e IA que automatiza las operaciones y ventas de tu empresa.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6">
                    <Link href="/privacidad/" className="text-muted hover:text-[#00F2FE] transition-colors font-semibold">
                        Políticas de Privacidad
                    </Link>
                    <Link href="/terminos/" className="text-muted hover:text-[#00F2FE] transition-colors font-semibold">
                        Términos y Condiciones
                    </Link>
                    <Link href="/cookies/" className="text-muted hover:text-[#00F2FE] transition-colors font-semibold">
                        Política de Cookies
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 border-t border-slateCard/50 pt-8 text-center text-muted/50 text-sm">
                &copy; {new Date().getFullYear()} Unitary Marketing. Todos los derechos reservados.
            </div>
        </footer>
    );
}
