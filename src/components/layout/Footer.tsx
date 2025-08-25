'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp, Heart, Linkedin, Twitter, Instagram, Youtube, Github } from 'lucide-react'
import Button from '@/components/ui/Button'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nossa Equipe', href: '#team' },
      { name: 'Carreiras', href: '#careers' },
      { name: 'Imprensa', href: '#press' }
    ],
    services: [
      { name: 'Desenvolvimento Web', href: '#web-dev' },
      { name: 'Aplicações Mobile', href: '#mobile-dev' },
      { name: 'Consultoria TI', href: '#consulting' },
      { name: 'Cloud Solutions', href: '#cloud' },
      { name: 'Segurança Digital', href: '#security' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Documentação', href: '#docs' },
      { name: 'Tutoriais', href: '#tutorials' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'Case Studies', href: '#cases' }
    ],
    support: [
      { name: 'Central de Ajuda', href: '#help' },
      { name: 'Suporte Técnico', href: '#support' },
      { name: 'Status do Sistema', href: '#status' },
      { name: 'Contato', href: '#contact' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-4 h-4" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="w-4 h-4" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="w-4 h-4" /> },
    { name: 'YouTube', href: '#', icon: <Youtube className="w-4 h-4" /> },
    { name: 'GitHub', href: '#', icon: <Github className="w-4 h-4" /> }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="xl:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <span className="text-2xl font-bold">TechLanding</span>
                </div>
                
                <p className="text-secondary-300 mb-6 leading-relaxed">
                  Transformamos ideias em soluções tecnológicas inovadoras. 
                  Nossa missão é impulsionar o crescimento dos nossos clientes através da tecnologia.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-secondary-300">
                    <Mail className="w-4 h-4 text-primary-400" />
                    <span>contato@techlanding.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3 text-secondary-300">
                    <Phone className="w-4 h-4 text-primary-400" />
                    <span>+55 (11) 99999-9999</span>
                  </div>
                                     <div className="flex items-center space-x-3 text-secondary-300">
                     <MapPin className="w-4 h-4 text-primary-400" />
                     <span>Belém, PA - Brasil</span>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Serviços</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Recursos</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-6 text-white">Suporte</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-secondary-800"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Fique por dentro das novidades</h3>
              <p className="text-secondary-300">Receba insights sobre tecnologia e inovação</p>
            </div>
            
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 lg:w-80 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg text-white placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button variant="primary" size="md">
                Inscrever
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-secondary-800"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-secondary-400">
              <span>© {currentYear} TechLanding. Todos os direitos reservados.</span>
              <span>•</span>
              <span>Todos os direitos reservados para Adriana Lima</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                                     className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                   title={social.name}
                 >
                   {social.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
