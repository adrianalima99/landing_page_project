'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, FileCode, Palette, Type } from 'lucide-react'

const Technologies: React.FC = () => {
  const techs = [
    {
      name: 'React',
      description: 'Biblioteca JavaScript moderna para interfaces de usuário',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Next.js',
      description: 'Framework React para produção com renderização otimizada',
      icon: <FileCode className="w-8 h-8" />,
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'TailwindCSS',
      description: 'Framework CSS utility-first para design rápido e moderno',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'TypeScript',
      description: 'JavaScript com tipagem estática para código mais seguro',
      icon: <Type className="w-8 h-8" />,
      color: 'from-blue-600 to-indigo-600'
    }
  ]

  return (
    <section id="technologies" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-3 sm:mb-4 px-4">
            Tecnologias <span className="gradient-text">Utilizadas</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto px-4">
            Utilizamos as melhores tecnologias do mercado para garantir performance, 
            segurança e uma experiência excepcional para seus visitantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 sm:p-6 text-center border border-secondary-100 hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${tech.color} text-white mb-3 sm:mb-4`}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  {tech.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-2">
                {tech.name}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-600 leading-relaxed px-2">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 text-center px-4"
        >
          <p className="text-sm sm:text-base text-secondary-600">
            Além dessas tecnologias, também utilizamos <strong>HTML</strong> e <strong>CSS</strong> para garantir 
            compatibilidade e acessibilidade em todos os dispositivos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies

