'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('unitary_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('unitary_cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-[#1E293B] border border-[#00F2FE]/30 p-4 rounded-xl shadow-[0_0_20px_rgba(0,242,254,0.15)] z-[60] flex flex-col sm:flex-row items-center gap-4 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <p className="text-slate-soft text-xs leading-relaxed flex-1 text-center sm:text-left">
                Utilizamos cookies para optimizar tu experiencia y analizar el tráfico B2B.
            </p>
            <button
                onClick={acceptCookies}
                className="bg-[#00F2FE] text-[#0A192F] font-bold text-xs px-6 py-2 rounded-full hover:bg-[#00F2FE]/90 transition-colors w-full sm:w-auto whitespace-nowrap"
            >
                Aceptar
            </button>
        </div>
    );
}
