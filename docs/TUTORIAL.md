# 📚 Tutorial de Uso - TechLanding

## 🎯 Introdução

Este tutorial irá guiá-lo através do uso e funcionamento da landing page TechLanding. Aprenda como atualizar conteúdo, personalizar design e manter sua página sempre atualizada.

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Atualizando Conteúdo](#atualizando-conteúdo)
4. [Personalizando Design](#personalizando-design)
5. [Configurando Formulário de Contato](#configurando-formulário-de-contato)
6. [Deploy e Hospedagem](#deploy-e-hospedagem)
7. [Manutenção](#manutenção)

## 🎨 Visão Geral

A TechLanding é uma landing page moderna desenvolvida com:
- **Next.js 14** - Framework React para produção
- **TypeScript** - Linguagem com tipagem estática
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas do Next.js
│   ├── api/               # API routes (formulário de contato)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── layout/           # Header e Footer
│   ├── sections/         # Seções da página
│   └── ui/               # Componentes reutilizáveis
└── lib/                   # Utilitários e helpers
```

## ✏️ Atualizando Conteúdo

### Hero Section (Página Inicial)

Para alterar o conteúdo da seção principal, edite:

**Arquivo:** `src/components/sections/Hero.tsx`

```typescript
// Altere o título principal
<motion.h1>
  Transforme seu{' '}
  <span className="gradient-text">negócio</span>
  {' '}com tecnologia
</motion.h1>

// Altere a descrição
<motion.p>
  Desenvolvemos soluções digitais personalizadas...
</motion.p>
```

### Serviços

Para atualizar os serviços oferecidos, edite:

**Arquivo:** `src/components/sections/Services.tsx`

```typescript
const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Desenvolvimento Web',
    description: 'Sua descrição aqui...',
    features: ['React/Next.js', 'Design Responsivo', ...]
  },
  // Adicione mais serviços aqui
]
```

### Informações de Contato

Para alterar email e telefone, edite:

**Arquivo:** `src/components/sections/Contact.tsx`

```typescript
const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    value: 'contato@techlanding.com.br',  // Alterar aqui
    description: 'Respondemos em até 24 horas'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Telefone',
    value: '+55 (11) 99999-9999',  // Alterar aqui
    description: 'Segunda a sexta, 9h às 18h'
  }
]
```

### Footer

Para atualizar informações do rodapé, edite:

**Arquivo:** `src/components/layout/Footer.tsx`

## 🎨 Personalizando Design

### Cores

As cores podem ser alteradas no arquivo de configuração do Tailwind:

**Arquivo:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    // Tons de azul
    600: '#0284c7',  // Cor principal
    // ... outras variações
  },
  secondary: {
    // Tons de cinza
    // ...
  },
  accent: {
    // Tons de roxo/rosa
    // ...
  }
}
```

### Fontes

As fontes são definidas no layout principal:

**Arquivo:** `src/app/layout.tsx`

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

### Espaçamento e Layout

O espaçamento é controlado por classes Tailwind. Exemplos:
- `py-16` - Padding vertical
- `px-4` - Padding horizontal
- `mb-8` - Margin bottom
- `gap-6` - Gap entre elementos

## 📧 Configurando Formulário de Contato

### 1. Configurar Email (Recomendado: Resend)

1. Crie uma conta em [Resend](https://resend.com)
2. Obtenha sua API Key
3. Crie arquivo `.env.local`:

```env
RESEND_API_KEY=sua_api_key_aqui
CONTACT_EMAIL=seu-email@exemplo.com
```

4. Instale o Resend:

```bash
npm install resend
```

5. Edite `src/app/api/contact/route.ts` e descomente o código de envio:

```typescript
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contato@techlanding.com.br',
  to: process.env.CONTACT_EMAIL,
  subject: `Nova mensagem de contato - ${service || 'Geral'}`,
  html: `...`
})
```

### 2. Alternativa: SendGrid ou Nodemailer

Consulte a documentação de cada serviço para integração.

## 🚀 Deploy e Hospedagem

### Deploy na Vercel (Recomendado)

1. **Instale a Vercel CLI:**
```bash
npm i -g vercel
```

2. **Faça login:**
```bash
vercel login
```

3. **Execute o deploy:**
```bash
vercel
```

4. **Ou conecte seu repositório GitHub:**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu repositório
   - Configure as variáveis de ambiente
   - Deploy automático a cada push

### Variáveis de Ambiente

No painel da Vercel, configure:
- `RESEND_API_KEY` - Sua chave da API Resend
- `CONTACT_EMAIL` - Email para receber mensagens

### Build Local

Para testar o build antes do deploy:

```bash
npm run build
npm start
```

## 🔧 Manutenção

### Atualizar Dependências

```bash
npm update
```

### Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### Verificar Código

```bash
npm run lint
```

## 📱 Responsividade

A página é totalmente responsiva:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Teste em diferentes dispositivos usando as ferramentas de desenvolvedor do navegador.

## 🐛 Solução de Problemas

### Formulário não envia

1. Verifique se a API route está funcionando
2. Confirme as variáveis de ambiente
3. Verifique o console do navegador para erros

### Estilos não aplicam

1. Verifique se o Tailwind está processando
2. Execute `npm run build` para ver erros
3. Confirme que as classes Tailwind estão corretas

### Build falha

1. Verifique erros de TypeScript: `npm run build`
2. Confirme que todas as dependências estão instaladas
3. Verifique versões do Node.js (requer Node.js 18+)

## 📞 Suporte

Para dúvidas ou problemas:
- Email: contato@techlanding.com.br
- Documentação Next.js: https://nextjs.org/docs
- Documentação Tailwind: https://tailwindcss.com/docs

## ✅ Checklist de Manutenção

- [ ] Conteúdo atualizado regularmente
- [ ] Formulário de contato funcionando
- [ ] Links externos verificados
- [ ] Imagens otimizadas
- [ ] Performance verificada (Lighthouse)
- [ ] Mobile responsivo testado
- [ ] SEO atualizado
- [ ] Backup do código realizado

---

**Última atualização:** 2024

*Este tutorial cobre o básico de uso e manutenção da landing page TechLanding. Para personalizações avançadas, consulte a documentação das tecnologias utilizadas.*

