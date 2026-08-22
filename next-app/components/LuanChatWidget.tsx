'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';

interface ChatMessage {
    role: 'system' | 'user' | 'bot';
    content: string;
}

export default function LuanChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { role: 'bot', content: '¡Hola! Soy Luan - Agente IA de Unitary Marketing. ¿Qué operaciones o ventas querés automatizar en tu empresa?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedSession = localStorage.getItem('unitary_luan_session');
            if (storedSession) return storedSession;
            const newSession = 'session_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
            localStorage.setItem('unitary_luan_session', newSession);
            return newSession;
        }
        return 'session_' + Math.random().toString(36).substring(2, 9) + '_' + Date.now();
    });
    
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOpenChat = () => setIsOpen(true);
        window.addEventListener('open-luan-chat', handleOpenChat);
        return () => window.removeEventListener('open-luan-chat', handleOpenChat);
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const newMessages = [...messages, { role: 'user', content: trimmed } as ChatMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://proyectoluan-luan-n8n.crypuw.easypanel.host/webhook/webpage', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: trimmed,
                    sessionId,
                    origin: "unitary_web_chat",
                    timestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                const data = await response.json();
                const botReply = data.output || data.response || data.text || data.message || (typeof data === 'string' ? data : "Mensaje recibido. ¿En qué más puedo asistirte?");
                setMessages([...newMessages, { role: 'bot', content: botReply }]);
            } else {
                setMessages([...newMessages, { role: 'system', content: 'Tuve un micro-corte de conexión. Por favor intentá nuevamente o escribime directo por WhatsApp.' }]);
            }
        } catch (error) {
            console.error('Error in chat:', error);
            setMessages([...newMessages, { role: 'system', content: 'Tuve un micro-corte de conexión. Por favor intentá nuevamente o escribime directo por WhatsApp.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Launcher Button */}
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group">
                <span className="bg-[#1E293B] text-[#00F2FE] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#00F2FE]/30 shadow-lg mr-2 hidden sm:inline-block">
                    Hablá con Luan - Agente IA 💬
                </span>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-1 rounded-full shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all duration-300 flex items-center justify-center ${
                        isOpen 
                        ? 'bg-[#1E293B] border-2 border-[#00F2FE]/50 text-[#00F2FE]' 
                        : 'bg-[#1E293B] border-2 border-[#00F2FE] hover:scale-110 animate-pulse'
                    }`}
                    aria-label="Hablar con Luan"
                >
                    {isOpen ? (
                        <div className="w-12 h-12 flex items-center justify-center">
                            <X className="w-7 h-7 text-[#00F2FE]" />
                        </div>
                    ) : (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#00F2FE] shadow-[0_0_10px_rgba(0,242,254,0.4)] bg-[#1E293B] flex-shrink-0">
                            <img 
                                src="/images/luan-avatar.png" 
                                alt="Luan - Agente IA" 
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                    e.currentTarget.src = "/Logo Unitary.png";
                                }}
                            />
                        </div>
                    )}
                </button>
            </div>

            {/* Chat Drawer */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[380px] h-[80vh] max-h-[550px] z-50 bg-[#1E293B]/95 backdrop-blur-lg border border-[#00F2FE]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
                    
                    {/* Header */}
                    <div className="h-16 border-b border-[#00F2FE]/20 bg-[#0A192F]/50 flex items-center justify-between px-4">
                        <div className="flex items-center">
                            <div className="relative mr-3">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#00F2FE] shadow-[0_0_10px_rgba(0,242,254,0.4)] bg-[#1E293B] flex-shrink-0">
                                    <img 
                                        src="/images/luan-avatar.png" 
                                        alt="Luan - Agente IA" 
                                        className="w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            e.currentTarget.src = "/Logo Unitary.png";
                                        }}
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1E293B] z-10"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm leading-tight">Luan - Agente IA</span>
                                <span className="text-green-400 text-xs font-medium">🟢 En Línea 24/7</span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-soft hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar flex flex-col">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                                    msg.role === 'user' 
                                        ? 'bg-[#00F2FE] text-[#0A192F] font-medium rounded-br-sm' 
                                        : msg.role === 'system'
                                            ? 'bg-red-500/20 text-red-200 border border-red-500/30'
                                            : 'bg-[#0A192F] text-[#E2E8F0] border border-[#00F2FE]/20 rounded-bl-sm shadow-[0_0_10px_rgba(0,242,254,0.05)]'
                                }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-[#0A192F] border border-[#00F2FE]/20 text-slate-soft text-xs px-4 py-2.5 rounded-2xl rounded-bl-sm flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-[#00F2FE]" />
                                    <span>Luan - Agente IA está procesando...</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-[#0A192F]/50 border-t border-[#00F2FE]/20">
                        <form onSubmit={handleSend} className="flex items-center gap-2 relative">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Escribe un mensaje..."
                                disabled={isLoading}
                                className="w-full bg-[#1E293B] border border-white/10 rounded-full py-3 pl-4 pr-12 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#00F2FE]/50 focus:ring-1 focus:ring-[#00F2FE]/50 transition-all disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 w-8 h-8 rounded-full bg-[#0D9488] hover:bg-[#00F2FE] flex items-center justify-center text-white hover:text-[#0A192F] transition-all disabled:opacity-50 disabled:hover:bg-[#0D9488] disabled:hover:text-white"
                            >
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        </form>
                    </div>

                </div>
            )}
        </>
    );
}
