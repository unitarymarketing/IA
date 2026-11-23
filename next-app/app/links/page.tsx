'use client';

import React, { useEffect, useRef, useState } from 'react';

const UNITARY_CONTACT = {
  fullName: 'Unitary Marketing AI (Luan - Agente IA)',
  organization: 'Unitary Marketing AI',
  phoneRaw: '+5491124026700',
  whatsappNumber: '5491124026700',
  email: 'contacto@unitarymarketing.com',
  website: 'https://www.unitarymarketing.com/',
  note: 'Software a Medida, Automatización & Agentes de Inteligencia Artificial para Empresas.',
  vcardFileName: 'Unitary_Marketing_AI.vcf',
} as const;

const DEFAULT_WHATSAPP_TEXT =
  'Hola Luan! Escaneé el QR de la tarjeta de Unitary Marketing AI y quiero conversar.';

export default function LinksPage() {
  const [whatsappHref, setWhatsappHref] = useState<string>(
    `https://wa.me/${UNITARY_CONTACT.whatsappNumber}?text=${encodeURIComponent(DEFAULT_WHATSAPP_TEXT)}`
  );
  const [imgError, setImgError] = useState<boolean>(false);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyIconTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (message: string) => {
    try {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
      setToastMessage(message);
      setToastVisible(true);

      toastTimerRef.current = setTimeout(() => {
        setToastVisible(false);
      }, 3200);
    } catch (err) {
      console.error('Error al renderizar toast:', err);
    }
  };

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const source = (params.get('src') || 'card').trim().toLowerCase();

      let prefilledText = DEFAULT_WHATSAPP_TEXT;

      if (source === 'linkedin') {
        prefilledText =
          'Hola Luan! Vengo desde el perfil de LinkedIn de Unitary Marketing AI y quiero conversar.';
      } else if (source === 'ig' || source === 'instagram') {
        prefilledText =
          'Hola Luan! Vengo desde el Instagram de Unitary Marketing AI y quiero conversar.';
      } else if (source === 'tiktok') {
        prefilledText =
          'Hola Luan! Vengo desde el TikTok de Unitary Marketing AI y quiero conversar.';
      } else if (source === 'fb' || source === 'facebook') {
        prefilledText =
          'Hola Luan! Vengo desde el Facebook de Unitary Marketing AI y quiero conversar.';
      } else if (source === 'web') {
        prefilledText =
          'Hola Luan! Ingresé desde unitarymarketing.com y quiero conversar sobre sus soluciones.';
      }

      setWhatsappHref(
        `https://wa.me/${UNITARY_CONTACT.whatsappNumber}?text=${encodeURIComponent(prefilledText)}`
      );
    } catch (err) {
      console.error('Error al leer parámetros de origen (?src=):', err);
    }

    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
      if (copyIconTimerRef.current) clearTimeout(copyIconTimerRef.current);
    };
  }, []);

  const downloadVCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const vcardLines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${UNITARY_CONTACT.fullName}`,
        'N:Marketing AI;Unitary;;;',
        `ORG:${UNITARY_CONTACT.organization}`,
        'TITLE:Luan - Agente IA & Automatización',
        `TEL;TYPE=CELL,VOICE,WHATSAPP:${UNITARY_CONTACT.phoneRaw}`,
        `EMAIL;TYPE=INTERNET,WORK:${UNITARY_CONTACT.email}`,
        `URL:${UNITARY_CONTACT.website}`,
        `NOTE:${UNITARY_CONTACT.note}`,
        'END:VCARD',
      ];

      const blob = new Blob([vcardLines.join('\r\n')], {
        type: 'text/vcard;charset=utf-8',
      });
      const blobUrl = URL.createObjectURL(blob);

      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.setAttribute('download', UNITARY_CONTACT.vcardFileName);
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();

      document.body.removeChild(anchor);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);

      showToast('Contacto de Luan guardado (.vcf)');
    } catch (err) {
      console.error('Error al descargar archivo vCard:', err);
      showToast('No se pudo generar la vCard. Probá nuevamente.');
    }
  };

  const fallbackCopyTextToClipboard = (text: string): boolean => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  };

  const handleCopyEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      let copied = false;

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        try {
          await navigator.clipboard.writeText(UNITARY_CONTACT.email);
          copied = true;
        } catch {
          copied = fallbackCopyTextToClipboard(UNITARY_CONTACT.email);
        }
      } else {
        copied = fallbackCopyTextToClipboard(UNITARY_CONTACT.email);
      }

      if (!copied) {
        throw new Error('No se pudo copiar al portapapeles');
      }

      setEmailCopied(true);
      if (copyIconTimerRef.current) {
        clearTimeout(copyIconTimerRef.current);
      }
      copyIconTimerRef.current = setTimeout(() => {
        setEmailCopied(false);
      }, 1800);

      showToast(`Correo copiado: ${UNITARY_CONTACT.email}`);
    } catch (err) {
      console.error('Error al copiar correo:', err);
      showToast(UNITARY_CONTACT.email);
    }
  };

  return (
    <>
      {/* CAPA DE FONDO: GRILLA TÉCNICA SUTIL */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(244, 247, 251, 0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 247, 251, 0.025) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Contenedor principal mobile-first centrado (max-width 430px) */}
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[430px] flex-col justify-between pb-8">
        <div className="w-full">
          {/* 1. BANNER FULL-WIDTH CON LOGO REAL + IDENTIDAD DE MARCA */}
          <header className="relative flex flex-col items-center text-center opacity-0 animate-fade-up">
            {/* Banner panorámico del logo real fundido con el fondo #080D17 */}
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#050912]">
              {!imgError ? (
                <img
                  src="/images/unitary-marketing.webp"
                  alt="Logo Unitary Marketing AI"
                  className="h-full w-full object-cover object-center scale-[1.03]"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  id="logo-fallback"
                  className="flex h-full w-full items-center justify-center bg-gradient-to-b from-navy to-[#080D17]"
                >
                  <span className="font-display text-4xl font-extrabold tracking-tight text-cyanElectric">
                    U
                  </span>
                </div>
              )}

              {/* Degradado inferior para fundir el banner sin cortes bruscos */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(8, 13, 23, 0.12) 0%, rgba(8, 13, 23, 0.25) 48%, rgba(8, 13, 23, 0.88) 82%, #080D17 100%)',
                }}
              />
            </div>

            {/* Bloque de título y posicionamiento */}
            <div className="relative -mt-6 w-full px-4 sm:px-5">
              <h1 className="font-display text-[22px] font-extrabold tracking-tight leading-tight sm:text-[24px]">
                <span className="text-coldWhite">UNITARY MARKETING</span>
                <span className="ml-1 text-cyanElectric">AI</span>
              </h1>

              <p className="mx-auto mt-2 max-w-[340px] text-[13.5px] leading-relaxed text-techGray">
                Software a Medida, Automatización &amp; Agentes de IA para Empresas
              </p>

              {/* 3 píldoras compactas de posicionamiento */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-violetAI/45 bg-violetAI/15 px-3 py-1 text-[11px] font-semibold text-violetTint">
                  <span aria-hidden="true" className="text-violetAI">
                    ✦
                  </span>
                  Agentes IA
                </span>
                <span className="inline-flex items-center rounded-full border border-cyanElectric/25 bg-navy/90 px-3 py-1 text-[11px] font-medium text-coldWhite/90">
                  Custom Software
                </span>
                <span className="inline-flex items-center rounded-full border border-coldWhite/[0.09] bg-navy/90 px-3 py-1 text-[11px] font-medium text-techGray">
                  LATAM • B2B
                </span>
              </div>
            </div>
          </header>

          {/* 2. BLOQUE PRINCIPAL DE CONVERSIÓN (3 BLOQUES ESTRATÉGICOS) */}
          <section
            aria-label="Acciones principales"
            className="mt-6 space-y-3 px-4 sm:px-5 opacity-0 animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {/* BLOQUE 1 (HERO): Chateá con Luan (WhatsApp) + Botón compacto Guardar Contacto (.vcf) */}
            <div
              className="relative flex items-center gap-2 overflow-hidden rounded-2xl p-2 pl-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(56,217,245,0.34)]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(16, 56, 84, 0.96) 0%, rgba(28, 39, 86, 0.96) 55%, rgba(65, 52, 138, 0.92) 100%)',
                border: '1.5px solid rgba(56, 217, 245, 0.72)',
                boxShadow:
                  '0 10px 30px rgba(56, 217, 245, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
              }}
            >
              {/* Destello sutil exclusivo de IA */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 animate-ai-shimmer"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(56, 217, 245, 0.16) 50%, transparent 100%)',
                }}
              />

              {/* Acción Principal: WhatsApp directo con Luan */}
              <a
                id="luan-whatsapp-link"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-w-0 flex-1 items-center gap-3.5 rounded-xl py-2 pr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric"
              >
                {/* Ícono WhatsApp */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyanElectric text-[#080D17] shadow-[0_0_18px_rgba(56,217,245,0.45)] transition-transform duration-200 group-hover:scale-105">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    <path
                      d="M9.6 9.6c.3 1.3 1.5 2.9 3.3 3.8.5.2 1 .2 1.4-.1l.6-.5c.3-.2.7-.2 1 0l1 .7c.3.2.4.7.2 1-.5.8-1.4 1.2-2.4 1.1-2.3-.2-4.8-2.4-5.7-4.6-.3-.9 0-1.9.7-2.5.3-.3.8-.2 1 .1l.6 1.1c.2.3.2.7 0 1l-.4.4"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>

                {/* Copy Hero */}
                <div className="relative min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-display text-[15.5px] font-extrabold leading-tight text-coldWhite">
                      Chateá con Luan
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyanElectric/40 bg-[#080D17]/45 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-cyanElectric">
                      <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-cyanElectric animate-ai-pulse" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyanElectric" />
                      </span>
                      Agente IA • 24/7
                    </span>
                  </div>

                  <p className="mt-1 text-[12px] leading-snug text-coldWhite/85">
                    WhatsApp directo • Respuestas al instante
                  </p>
                </div>
              </a>

              {/* Divisor vertical sutil */}
              <div aria-hidden="true" className="relative h-9 w-px shrink-0 bg-coldWhite/15" />

              {/* Acción integrada: Descargar contacto (.vcf) con WhatsApp + Correo */}
              <button
                id="save-vcard-btn"
                type="button"
                onClick={downloadVCard}
                title="Agendar contacto en tu celular"
                aria-label="Agendar contacto de Unitary Marketing AI en tu celular"
                className="relative flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-0.5 rounded-xl border border-cyanElectric/35 bg-[#080D17]/45 text-cyanElectric transition-all duration-200 hover:border-cyanElectric hover:bg-cyanElectric/20 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric cursor-pointer"
              >
                <svg
                  className="h-[19px] w-[19px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                <span className="text-[8.5px] font-semibold uppercase tracking-wider text-coldWhite/90">
                  Agendar
                </span>
              </button>
            </div>

            {/* BLOQUES SECUNDARIOS: Diagnóstico + Soluciones Web */}
            <div className="space-y-2.5 pt-0.5">
              {/* BLOQUE 2: Hacé tu diagnóstico gratuito */}
              <a
                href="https://www.unitarymarketing.com/diagnostico/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-violetAI/35 bg-navy/90 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyanElectric/55 hover:bg-[#142338] active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violetAI/35 bg-violetAI/15 text-violetTint transition-colors duration-200 group-hover:border-cyanElectric/45 group-hover:bg-cyanElectric/15 group-hover:text-cyanElectric">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.95"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="block font-display text-[14.5px] font-semibold leading-tight text-coldWhite">
                    Hacé tu diagnóstico gratuito
                  </span>
                  <p className="mt-0.5 text-[12px] leading-snug text-techGray">
                    Detectá qué procesos podés automatizar hoy
                  </p>
                </div>

                <svg
                  className="h-5 w-5 shrink-0 text-techGray/75 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-cyanElectric"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>

              {/* BLOQUE 3: Conocé nuestras soluciones (Web) */}
              <a
                href="https://www.unitarymarketing.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-coldWhite/[0.08] bg-navy/85 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyanElectric/45 hover:bg-[#142338] active:scale-[0.985] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-coldWhite/[0.08] bg-coldWhite/[0.04] text-coldWhite transition-colors duration-200 group-hover:border-cyanElectric/35 group-hover:bg-cyanElectric/15 group-hover:text-cyanElectric">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="block font-display text-[14.5px] font-semibold leading-tight text-coldWhite">
                    Conocé nuestras soluciones
                  </span>
                  <p className="mt-0.5 text-[12px] text-techGray">
                    unitarymarketing.com • Software e IA a medida
                  </p>
                </div>

                <svg
                  className="h-5 w-5 shrink-0 text-techGray/75 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-cyanElectric"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </section>

          {/* 3. CANALES OFICIALES (4 REDES EN FILA + CORREO CORPORATIVO VISIBLE) */}
          <section
            aria-label="Canales oficiales"
            className="mt-7 px-4 sm:px-5 opacity-0 animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            <div className="mb-3.5 flex items-center gap-3">
              <div className="h-px flex-1 bg-coldWhite/[0.07]" />
              <h2 className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-techGray/85">
                REDES Y CONTACTO
              </h2>
              <div className="h-px flex-1 bg-coldWhite/[0.07]" />
            </div>

            {/* Fila de 4 íconos: LinkedIn, Instagram, TikTok, Facebook */}
            <div className="flex items-center justify-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/unitary-marketing-ai-25876b3b8/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Unitary Marketing AI"
                title="LinkedIn • Perfil B2B"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-coldWhite/[0.08] bg-navy/80 text-coldWhite/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyanElectric/50 hover:bg-[#142338] hover:text-cyanElectric active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/unitary.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @unitary.marketing"
                title="Instagram • @unitary.marketing"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-coldWhite/[0.08] bg-navy/80 text-coldWhite/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyanElectric/50 hover:bg-[#142338] hover:text-cyanElectric active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@unitary.marketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @unitary.marketing"
                title="TikTok • @unitary.marketing"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-coldWhite/[0.08] bg-navy/80 text-coldWhite/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyanElectric/50 hover:bg-[#142338] hover:text-cyanElectric active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/unitary.marketing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Unitary Marketing AI"
                title="Facebook • Unitary Marketing AI"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-coldWhite/[0.08] bg-navy/80 text-coldWhite/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyanElectric/50 hover:bg-[#142338] hover:text-cyanElectric active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
            </div>

            {/* Correo corporativo visible + botón rápido de copia */}
            <div className="mt-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-1 rounded-full border border-coldWhite/[0.08] bg-navy/70 p-1 pl-3.5 transition-colors duration-200 hover:border-cyanElectric/40">
                <a
                  href="mailto:contacto@unitarymarketing.com"
                  className="inline-flex items-center gap-2 text-[12.5px] font-medium text-techGray transition-colors duration-200 hover:text-cyanElectric focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric rounded-full"
                >
                  <svg
                    className="h-3.5 w-3.5 text-cyanElectric/85"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>contacto@unitarymarketing.com</span>
                </a>

                <button
                  id="copy-email-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copiar correo contacto@unitarymarketing.com"
                  title="Copiar correo"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-techGray/80 transition-colors duration-200 hover:bg-cyanElectric/15 hover:text-cyanElectric active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanElectric cursor-pointer"
                >
                  {!emailCopied ? (
                    <svg
                      id="copy-email-icon"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  ) : (
                    <svg
                      id="copied-email-icon"
                      className="h-3.5 w-3.5 text-cyanElectric"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* 4. FOOTER MINIMALISTA */}
        <footer
          className="mt-8 pt-4 text-center opacity-0 animate-fade-up"
          style={{ animationDelay: '240ms' }}
        >
          <p className="text-[11.5px] text-techGray/85">
            Tecnología{' '}
            <span className="font-bold text-coldWhite">
              Unitary Marketing <span className="text-cyanElectric">AI</span>
            </span>
          </p>
        </footer>
      </main>

      {/* TOAST DE NOTIFICACIÓN */}
      <div
        id="toast-container"
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 transition-all duration-300 ${
          toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="flex max-w-[390px] items-center gap-2.5 rounded-2xl border border-cyanElectric/45 bg-navy/95 px-4 py-3 text-[13px] font-medium text-coldWhite shadow-[0_14px_38px_rgba(0,0,0,0.55)] backdrop-blur-md">
          <svg
            className="h-[18px] w-[18px] shrink-0 text-cyanElectric"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span id="toast-message" className="leading-snug">
            {toastMessage}
          </span>
        </div>
      </div>
    </>
  );
}
