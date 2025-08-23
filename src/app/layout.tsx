import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechLanding - Soluções Tecnológicas Inovadoras',
  description: 'Transforme seu negócio com soluções tecnológicas de ponta. Desenvolvimento, consultoria e inovação para empresas de todos os tamanhos.',
  keywords: 'tecnologia, desenvolvimento, software, consultoria, inovação, digital',
  authors: [{ name: 'TechLanding Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
