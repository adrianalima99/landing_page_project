'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Smartphone, Globe } from 'lucide-react'
import Card from '@/components/ui/Card'

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'saas', label: 'SaaS' }
  ]

  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'web',
      description: 'Dashboard financeiro completo com análise de dados em tempo real, gráficos interativos e relatórios personalizados.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      features: ['Análise em tempo real', 'Relatórios personalizados', 'Integração bancária', 'Dashboard responsivo'],
      link: '#',
      github: '#',
      type: 'web'
    },
    {
      id: 2,
      title: 'App de Delivery',
      category: 'mobile',
      description: 'Aplicativo mobile completo para delivery de alimentos com sistema de pagamento, rastreamento e avaliações.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
      features: ['Pedidos em tempo real', 'Pagamento integrado', 'Rastreamento GPS', 'Sistema de avaliações'],
      link: '#',
      github: '#',
      type: 'mobile'
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      description: 'Plataforma completa de e-commerce com gestão de produtos, carrinho de compras e sistema de pagamento.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      features: ['Catálogo de produtos', 'Carrinho de compras', 'Checkout seguro', 'Painel administrativo'],
      link: '#',
      github: '#',
      type: 'ecommerce'
    },
    {
      id: 4,
      title: 'CRM Empresarial',
      category: 'saas',
      description: 'Sistema de gestão de relacionamento com clientes com automação de vendas e análise de performance.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      features: ['Gestão de leads', 'Automação de vendas', 'Relatórios avançados', 'Integração com APIs'],
      link: '#',
      github: '#',
      type: 'saas'
    },
    {
      id: 5,
      title: 'App de Fitness',
      category: 'mobile',
      description: 'Aplicativo de treinos personalizados com acompanhamento de progresso e integração com wearables.',
      image: '/api/placeholder/400/300',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit'],
      features: ['Treinos personalizados', 'Acompanhamento de progresso', 'Integração com wearables', 'Comunidade'],
      link: '#',
      github: '#',
      type: 'mobile'
    },
    {
      id: 6,
      title: 'Portal Corporativo',
      category: 'web',
      description: 'Portal interno corporativo com gestão de documentos, comunicação e workflows automatizados.',
      image: '/api/placeholder/400/300',
      technologies: ['Angular', 'Java Spring', 'Oracle', 'Docker'],
      features: ['Gestão de documentos', 'Workflows automatizados', 'Comunicação interna', 'Relatórios gerenciais'],
      link: '#',
      github: '#',
      type: 'web'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter)

  const getCategoryIcon = (type: string) => {
    switch (type) {
      case 'web': return <Globe className="w-4 h-4" />
      case 'mobile': return <Smartphone className="w-4 h-4" />
      case 'ecommerce': return <Code className="w-4 h-4" />
      case 'saas': return <Code className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  return (
    <section id="portfolio" className="section-padding bg-secondary-50">
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
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes. 
            Cada solução é única e personalizada para atender às necessidades específicas.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600 border border-secondary-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-t-xl">
                    <div className="w-full h-48 bg-gradient-to-br from-secondary-200 to-secondary-300 flex items-center justify-center">
                      <div className="text-6xl text-secondary-400">📱</div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Github className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary-700">
                      {getCategoryIcon(project.type)}
                      <span className="capitalize">{project.type}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-secondary-700 mb-2">Tecnologias:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-secondary-100 text-secondary-600 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-secondary-700 mb-2">Principais funcionalidades:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-secondary-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
                      <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
                        Ver detalhes →
                      </button>
                      <div className="flex space-x-2">
                        <button className="p-2 text-secondary-400 hover:text-primary-600 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-secondary-400 hover:text-primary-600 transition-colors">
                          <Github className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Portfolio
