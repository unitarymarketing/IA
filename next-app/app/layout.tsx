import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'
import LuanChatWidget from '../components/LuanChatWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unitary Marketing - Infraestructura de Software & IA',
  description: 'Desarrollamos ecosistemas B2B a medida, Agentes IA y automatizaciones corporativas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/videos/Logo Unitary.png" />
      </head>
      <body className={`${inter.className} bg-[#0A0A0A] text-[#F5F5F5] flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        
        <LuanChatWidget />
        <CookieBanner />
        <Footer />
      </body>
    </html>
  )
}
