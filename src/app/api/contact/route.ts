import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function POST(request: NextRequest) {
  if (!resend) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }

  try {
    const { name, email, projectType, message } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Alisca Digital <alainalisca@aplusfitnessllc.com>',
      to: ['darianraphael67@gmail.com'],
      subject: `New Project Inquiry from ${name}`,
      html: `<h2>New Project Inquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p><p><strong>Message:</strong></p><p>${message || 'No message provided'}</p>`,
    })

    await resend.emails.send({
      from: 'Alisca Digital <alainalisca@aplusfitnessllc.com>',
      to: [email],
      subject: 'Thanks for reaching out - Alisca Digital',
      html: `<h2>Thanks for your inquiry, ${name}!</h2><p>I've received your message and will get back to you within 24 hours.</p><p>Best,</p><p>Alain Alisca<br>Alisca Digital</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
