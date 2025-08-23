'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Clock, TrendingUp, Target, Sparkles, Zap, Shield, Eye, BarChart3 } from 'lucide-react'


const About: React.FC = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '150+', label: 'Clientes Satisfeitos', color: 'from-blue-500 to-blue-600' },
    { icon: <Award className="w-6 h-6" />, number: '50+', label: 'Projetos Entregues', color: 'from-amber-500 to-amber-600' },
    { icon: <Clock className="w-6 h-6" />, number: '5+', label: 'Anos de Experiência', color: 'from-emerald-500 to-emerald-600' },
    { icon: <TrendingUp className="w-6 h-6" />, number: '99%', label: 'Taxa de Sucesso', color: 'from-purple-500 to-purple-600' }
  ]

  const timeline = [
    {
      year: '2019',
      title: 'Fundação da Empresa',
      description: 'Iniciamos nossa jornada com foco em soluções tecnológicas inovadoras.'
    },
    {
      year: '2020',
      title: 'Primeiro Cliente Enterprise',
      description: 'Expandimos para o mercado corporativo com soluções escaláveis.'
    },
    {
      year: '2021',
      title: 'Expansão Internacional',
      description: 'Começamos a atender clientes em diferentes países.'
    },
    {
      year: '2022',
      title: 'Centro de Inovação',
      description: 'Criamos um hub de inovação para startups e empresas.'
    },
    {
      year: '2023',
      title: 'Líder de Mercado',
      description: 'Nos tornamos referência em soluções tecnológicas no Brasil.'
    }
  ]

  const values = [
    {
      title: 'Inovação',
      description: 'Sempre buscamos as melhores tecnologias e metodologias para nossos clientes.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Qualidade',
      description: 'Comprometimento total com a excelência em cada projeto entregue.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Transparência',
      description: 'Comunicação clara e honesta em todas as etapas do processo.',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Resultados',
      description: 'Foco em entregar valor real e mensurável para o negócio.',
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
            Sobre a <span className="gradient-text">TechLanding</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Somos uma empresa de tecnologia focada em transformar ideias em soluções digitais 
            que impulsionam o crescimento dos nossos clientes.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
                             <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} text-white rounded-2xl mb-4 shadow-lg`}>
                 {stat.icon}
               </div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">{stat.number}</div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission & Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-8 border border-primary-100/50 mb-8 shadow-lg backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">
                  Nossa Missão
                </h3>
              </div>
              <p className="text-lg text-secondary-700 leading-relaxed font-medium mb-6">
                Transformar empresas através da tecnologia, oferecendo soluções digitais inovadoras que 
                resolvem problemas reais, otimizam processos e impulsionam o crescimento sustentável dos nossos parceiros.
              </p>
              <div className="flex items-center text-primary-600 bg-primary-50/50 rounded-xl px-4 py-3">
                <Sparkles className="w-4 h-4 mr-3 text-primary-500" />
                <span className="text-sm font-semibold">Compromisso com a excelência e inovação</span>
              </div>
            </div>

            {/* Values Section */}
            <h4 className="text-xl font-semibold text-secondary-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl flex items-center justify-center mr-3 shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              Nossos Valores
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-secondary-100/50 hover:shadow-xl hover:border-primary-200 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-100 via-accent-50 to-primary-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <div className="text-primary-600 group-hover:text-primary-700 transition-colors">
                        {value.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors text-lg">
                        {value.title}
                      </h5>
                      <p className="text-sm text-secondary-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Nossa Jornada
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-12">
                    <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
