'use client';

import { useState } from 'react';
import { LayoutDashboard, Users, Workflow } from 'lucide-react';

export default function ShowcaseTabs() {
    const [activeTab, setActiveTab] = useState<'crm' | 'dashboard' | 'workflow'>('crm');

    const getActiveImage = () => {
        switch (activeTab) {
            case 'crm': return '/images/showcase/crm-lead.jpg';
            case 'dashboard': return '/images/showcase/dashboard.png';
            case 'workflow': return '/images/showcase/workflow.jpg';
            default: return '/images/showcase/crm-lead.jpg';
        }
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
            {/* Tabs Navigation */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar px-4 py-2 w-full max-w-4xl mx-auto mb-6 snap-x">
                <button onClick={() => setActiveTab('crm')} className={`snap-none shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === 'crm' ? 'bg-[#00F2FE] text-[#0A192F] shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'bg-[#1E293B] text-white border border-white/10'}`}>
                    <span className="inline sm:hidden">CRM & Ventas</span>
                    <span className="hidden sm:inline">Vista CRM & Ventas</span>
                </button>

                <button onClick={() => setActiveTab('dashboard')} className={`snap-none shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === 'dashboard' ? 'bg-[#00F2FE] text-[#0A192F] shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'bg-[#1E293B] text-white border border-white/10'}`}>
                    <span className="inline sm:hidden">Dashboard</span>
                    <span className="hidden sm:inline">Vista Dashboard Operativo</span>
                </button>

                <button onClick={() => setActiveTab('workflow')} className={`snap-none shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === 'workflow' ? 'bg-[#00F2FE] text-[#0A192F] shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'bg-[#1E293B] text-white border border-white/10'}`}>
                    <span className="inline sm:hidden">Workflow</span>
                    <span className="hidden sm:inline">Vista Workflow & Backend</span>
                </button>
            </div>

            {/* Browser Frame Mockup */}
            <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
                <div className="rounded-2xl border border-[#00F2FE]/30 bg-[#1E293B] overflow-hidden shadow-2xl">
                    {/* Header de ventana de navegador */}
                    <div className="bg-[#0A192F] px-3 py-2 border-b border-[#00F2FE]/20 flex items-center justify-between text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block"></span>
                    </div>
                    <span className="truncate max-w-[200px] sm:max-w-none text-[10px] sm:text-xs text-gray-400">unitarymarketing.com/app/entregables</span>
                    </div>
                    
                    {/* Imagen adaptable */}
                    <div className="w-full bg-[#0A0A0A] p-1 sm:p-3 flex items-center justify-center min-h-[220px] sm:min-h-[400px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        key={activeTab}
                        src={getActiveImage()} 
                        alt="Entregables B2B Unitary" 
                        className="w-full h-auto max-h-[65vh] sm:max-h-[550px] object-contain rounded-lg transition-opacity duration-300 animate-in fade-in"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}
