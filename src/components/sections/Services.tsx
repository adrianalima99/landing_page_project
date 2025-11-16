'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Cloud, BarChart3, Shield, Zap } from 'lucide-react'
import Card from '@/components/ui/Card'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento Web',
      description: 'Sites responsivos, aplicações web e sistemas personalizados com as melhores tecnologias do mercado.',
      features: ['React/Next.js', 'Design Responsivo', 'Performance Otimizada', 'SEO Integrado']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Aplicações Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com foco em performance e experiência do usuário.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'PWA']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Infraestrutura em nuvem, DevOps e arquiteturas escaláveis para seu negócio.',
      features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD', 'Deploy Automático']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Consultoria TI',
      description: 'Análise estratégica, arquitetura de sistemas e otimização de processos tecnológicos.',
      features: ['Auditoria', 'Planejamento', 'Migração', 'Treinamento']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança Digital',
      description: 'Proteção de dados, compliance e implementação de melhores práticas de segurança.',
      features: ['Pentest', 'GDPR/LGPD', 'Criptografia', 'Backup']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automação',
      description: 'Processos automatizados, integrações e workflows inteligentes para aumentar produtividade.',
      features: ['RPA', 'APIs', 'Webhooks', 'Integrações']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-3 sm:mb-4 px-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-3xl mx-auto px-4">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio. 
            Desde desenvolvimento até consultoria, temos a expertise necessária para seu sucesso.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full">
                <div className="text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-secondary-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-secondary-600 mb-4 sm:mb-6 leading-relaxed px-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-xs sm:text-sm text-secondary-600">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <span className="break-words">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary-100 mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-sm sm:text-base text-secondary-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para entender suas necessidades específicas e criar 
              uma solução sob medida para seu negócio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
