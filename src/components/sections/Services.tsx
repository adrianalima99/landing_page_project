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
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'APIs RESTful'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Aplicações Mobile',
      description: 'Apps nativos e híbridos para iOS e Android com foco em performance e experiência do usuário.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'PWA'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Infraestrutura em nuvem, DevOps e arquiteturas escaláveis para seu negócio.',
      features: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD', 'Monitoramento'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Consultoria TI',
      description: 'Análise estratégica, arquitetura de sistemas e otimização de processos tecnológicos.',
      features: ['Auditoria', 'Planejamento', 'Migração', 'Treinamento'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança Digital',
      description: 'Proteção de dados, compliance e implementação de melhores práticas de segurança.',
      features: ['Pentest', 'GDPR/LGPD', 'Criptografia', 'Backup'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automação',
      description: 'Processos automatizados, integrações e workflows inteligentes para aumentar produtividade.',
      features: ['RPA', 'APIs', 'Webhooks', 'Integrações'],
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio. 
            Desde desenvolvimento até consultoria, temos a expertise necessária para seu sucesso.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-secondary-600">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <button className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}>
                      Saiba mais →
                    </button>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para entender suas necessidades específicas e criar 
              uma solução sob medida para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Solicitar Orçamento
              </button>
              <button className="btn-outline">
                Agendar Consulta
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
