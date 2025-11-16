'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white relative">
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-0"
            >
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-lg">T</span>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold">TechLanding</span>
              </div>
              
              <p className="text-xs sm:text-sm md:text-base text-secondary-300 mb-4 sm:mb-6 leading-relaxed">
                Soluções Tecnológicas Inovadoras. Desenvolvemos presença digital profissional 
                para profissionais autônomos, clínicas, lojas locais e pequenos negócios.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 text-secondary-300">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <a 
                    href="mailto:contato@techlanding.com.br" 
                    className="text-xs sm:text-sm break-words hover:text-primary-400 transition-colors"
                  >
                    contato@techlanding.com.br
                  </a>
                </div>
                <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 text-secondary-300">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                  <a 
                    href="tel:+5511999999999" 
                    className="text-xs sm:text-sm break-words hover:text-primary-400 transition-colors whitespace-nowrap"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Links Rápidos</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-xs sm:text-sm text-secondary-300 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-secondary-300 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-xs sm:text-sm text-secondary-300 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    Tecnologias
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-xs sm:text-sm text-secondary-300 hover:text-primary-400 transition-colors duration-200 block py-1"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-4 sm:py-6 border-t border-secondary-800"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="text-secondary-400 text-xs sm:text-sm text-center sm:text-left">
              <span className="block sm:inline">© {currentYear} TechLanding - Soluções Tecnológicas Inovadoras.</span>
              <span className="block sm:inline sm:ml-1 mt-1 sm:mt-0">Todos os direitos reservados a Adriana Lima.</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-2 sm:mt-0"
              title="Voltar ao topo"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
