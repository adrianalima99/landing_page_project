import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    // Aqui você pode integrar com serviços de email como:
    // - Resend (recomendado para Next.js)
    // - SendGrid
    // - Nodemailer
    // - AWS SES
    
    // Exemplo com Resend (descomente após instalar: npm install resend)
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contato@techlanding.com.br',
      to: process.env.CONTACT_EMAIL || 'seu-email@exemplo.com',
      subject: `Nova mensagem de contato - ${service || 'Geral'}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        ${service ? `<p><strong>Serviço:</strong> ${service}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    })
    */

    // Por enquanto, apenas retorna sucesso
    // Em produção, você deve implementar o envio real de email acima
    console.log('Nova mensagem de contato:', {
      name,
      email,
      company,
      service,
      message
    })

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar formulário:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}

