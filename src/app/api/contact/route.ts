import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Initialize AWS SES Client
const sesClient = new SESClient({
  region: process.env.AWS_SES_REGION || 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Send email via AWS SES if credentials are available
    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
      try {
        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0f172a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>

            <h3 style="color: #0f172a; margin-top: 20px;">Message:</h3>
            <div style="background-color: #fff; border-left: 4px solid #3b82f6; padding: 15px; margin: 15px 0;">
              <p>${message.replace(/\n/g, '<br/>')}</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              <strong>Reply to:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 10px;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        `;

        const params = {
          Source: process.env.AWS_SES_FROM_EMAIL || 'ismailakhtar.com',
          Destination: {
            ToAddresses: [process.env.AWS_SES_TO_EMAIL || 'ismailakhtar786@gmail.com'],
          },
          Message: {
            Subject: {
              Data: `New Inquiry from ${name}: ${subject}`,
              Charset: 'UTF-8',
            },
            Body: {
              Html: {
                Data: htmlContent,
                Charset: 'UTF-8',
              },
            },
          },
          ReplyToAddresses: [email],
        };

        await sesClient.send(new SendEmailCommand(params));
        console.log(`✅ Email sent successfully to ${process.env.AWS_SES_TO_EMAIL}`);
      } catch (sesError) {
        console.error('❌ Error sending email via AWS SES:', sesError);
        // Continue even if email fails - don't break the API
      }
    } else {
      console.log('⚠️ AWS SES credentials not configured. Email not sent. Check .env.local file.');
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
