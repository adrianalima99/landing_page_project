'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'contato@techlanding.com.br',
      description: 'Respondemos em até 24 horas'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      value: '+55 (11) 99999-9999',
      description: 'Segunda a sexta, 9h às 18h'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Endereço',
      value: 'Belém, PA - Brasil',
      description: 'Atendemos clientes em todo o país'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horário',
      value: 'Segunda a Sexta',
      description: '9h às 18h (GMT-3)'
    }
  ]

  const services = [
    'Desenvolvimento Web',
    'Aplicações Mobile',
    'Consultoria TI',
    'Cloud Solutions',
    'Segurança Digital',
    'Automação',
    'Outro'
  ]

  return (
    <section id="contact" className="section-padding bg-white">
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
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você a transformar suas ideias em realidade. 
            Entre em contato e vamos conversar sobre seu projeto.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Envie sua mensagem
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-secondary-900 mb-2">
                    Mensagem enviada!
                  </h4>
                  <p className="text-secondary-600">
                    Obrigado pelo contato. Retornaremos em breve!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Nome da empresa"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                        Serviço de interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Conte-nos sobre seu projeto..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Informações de contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-secondary-900 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-secondary-600">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-secondary-50 rounded-2xl p-6">
              <h4 className="font-semibold text-secondary-900 mb-4">
                Perguntas frequentes
              </h4>
              <div className="space-y-3">
                <div className="text-sm text-secondary-600">
                  <strong>Q:</strong> Qual o prazo para desenvolvimento?
                  <br />
                  <strong>A:</strong> Depende da complexidade, mas geralmente entre 4-12 semanas.
                </div>
                <div className="text-sm text-secondary-600">
                  <strong>Q:</strong> Oferecem suporte pós-lançamento?
                  <br />
                  <strong>A:</strong> Sim, incluímos 3 meses de suporte gratuito.
                </div>
                <div className="text-sm text-secondary-600">
                  <strong>Q:</strong> Trabalham com startups?
                  <br />
                  <strong>A:</strong> Sim, temos planos especiais para startups.
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="font-semibold text-secondary-900 mb-4">
                Siga-nos nas redes sociais
              </h4>
              <div className="flex justify-center space-x-4">
                <button className="w-10 h-10 bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-secondary-100 hover:bg-primary-100 text-secondary-600 hover:text-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para transformar suas ideias em realidade. 
              Vamos conversar sobre como podemos ajudar você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Agendar Consulta Gratuita
              </Button>
              <Button variant="outline" size="lg">
                Ver Portfólio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
