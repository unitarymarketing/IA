import Link from 'next/link';
import HeaderCTA from './HeaderCTA';

export default function Navbar() {
    return (
        <nav className="w-full border-b border-cyber-slate/50 bg-deep-navy/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group">
                    {/* Logo Image */}
                    <img 
                        src="/videos/Logo Unitary.png" 
                        alt="Unitary Marketing" 
                        className="h-9 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]" 
                    />
                    <div className="flex flex-col">
                        <span className="text-white font-black tracking-widest text-sm md:text-base uppercase hidden sm:block">
                            Unitary Marketing
                        </span>
                        <span className="text-[#00F2FE] font-semibold tracking-wider text-[10px] md:text-xs uppercase hidden sm:block">
                            Software & IA Aplicada
                        </span>
                    </div>
                </Link>
                
                <div className="hidden md:flex items-center gap-8">
                    <a href="/#soluciones" className="text-[#E2E8F0] hover:text-[#00F2FE] font-bold text-sm transition-colors">
                        Soluciones
                    </a>
                    <a href="/#luan-ai" className="text-[#E2E8F0] hover:text-[#00F2FE] font-bold text-sm transition-colors">
                        Agente IA
                    </a>
                </div>

                <div className="flex items-center gap-6">
                    <HeaderCTA />
                </div>
            </div>
        </nav>
    );
}
