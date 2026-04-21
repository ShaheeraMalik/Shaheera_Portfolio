import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, subject, message } = body

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Name, email, and message are required.' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'shaheeramalik533@gmail.com',
    reply_to: email,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #08080f; padding: 24px; border-left: 4px solid #49B6E5;">
          <h2 style="color: #49B6E5; font-size: 18px; margin: 0 0 4px;">New Portfolio Contact</h2>
          <p style="color: #666; font-size: 12px; margin: 0;">Via shaheeraimtiaz portfolio</p>
        </div>
        <div style="padding: 28px; background: #fafafa; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase;">Email</td>
              <td style="padding: 8px 0; color: #2A3FE5;">${email}</td>
            </tr>
            ${subject ? `<tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase;">Subject</td>
              <td style="padding: 8px 0; color: #111827;">${subject}</td>
            </tr>` : ''}
          </table>
          <div style="background: white; border: 1px solid #e5e7eb; padding: 20px; border-radius: 4px;">
            <p style="color: #374151; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="padding: 16px 28px; background: #f3f4f6; text-align: center;">
          <p style="color: #9ca3af; font-size: 11px; margin: 0;">Click Reply to respond directly to ${name}</p>
        </div>
      </div>
    `,
  })

  return { success: true }
})
