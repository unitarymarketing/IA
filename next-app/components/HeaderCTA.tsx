'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

declare global {
    interface Window {
        gtag?: (command: string, action: string, params?: any) => void;
    }
}

function CTAContent() {
    const searchParams = useSearchParams();
    const [href, setHref] = useState('/diagnostico');

    useEffect(() => {
        const qs = searchParams.toString();
        if (qs) {
            setHref(`/diagnostico?${qs}`);
        } else {
            setHref('/diagnostico');
        }
    }, [searchParams]);

    const handleClick = () => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'click_header_cta', { location: 'header_main' });
        }
    };

    return (
        <Link 
            href={href}
            prefetch={true}
            onClick={handleClick}
            className="bg-[#0D9488] text-[#FFFFFF] rounded-lg py-3 px-5 flex items-center justify-center font-bold text-sm hover:bg-[#00F2FE] hover:text-[#0A192F] hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all duration-300 min-h-[48px] text-center"
        >
            Diagnosticar mi Empresa
        </Link>
    );
}

export default function HeaderCTA() {
    return (
        <Suspense fallback={
            <Link 
                href="/diagnostico"
                prefetch={true}
                className="bg-[#0D9488] text-[#FFFFFF] rounded-lg py-3 px-5 flex items-center justify-center font-bold text-sm hover:bg-[#00F2FE] hover:text-[#0A192F] hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all duration-300 min-h-[48px] text-center"
            >
                Diagnosticar mi Empresa
            </Link>
        }>
            <CTAContent />
        </Suspense>
    );
}
