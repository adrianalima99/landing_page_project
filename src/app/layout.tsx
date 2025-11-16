import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechLanding - Soluções Tecnológicas Inovadoras',
  description: 'Transforme seu negócio com soluções tecnológicas de ponta. Desenvolvimento web, aplicações mobile, cloud solutions e consultoria TI para empresas de todos os tamanhos.',
  keywords: 'tecnologia, desenvolvimento web, aplicações mobile, cloud solutions, consultoria TI, software, inovação, digital',
  authors: [{ name: 'TechLanding - Soluções Tecnológicas Inovadoras' }],
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
