import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unitary Marketing IA - Legal',
  description: 'Documentación Legal de Unitary Marketing IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#050505] text-[#e2e8f0]`}>{children}</body>
    </html>
  )
}
