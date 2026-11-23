import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Unitary Marketing AI • Links Oficiales',
  description:
    'Software a Medida, Automatización & Agentes de Inteligencia Artificial para Empresas. Chateá con Luan, nuestro Agente IA 24/7.',
};

export const viewport: Viewport = {
  themeColor: '#080D17',
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${plusJakartaSans.variable} ${inter.variable} relative min-h-screen overflow-x-hidden bg-[#080D17] font-sans text-coldWhite antialiased selection:bg-cyanElectric/25 selection:text-coldWhite`}
    >
      {children}
    </div>
  );
}
