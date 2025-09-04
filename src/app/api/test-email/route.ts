import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Environment değişkenlerini kontrol et
    const config = {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
      to: process.env.GMAIL_TO
    };
    
    console.log('Email config:', {
      user: config.user,
      passLength: config.pass?.length,
      to: config.to
    });
    
    // Transporter oluştur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.user,
        pass: config.pass
      }
    });
    
    // Bağlantıyı test et
    const verifyResult = await transporter.verify();
    console.log('SMTP Verify result:', verifyResult);
    
    // Test emaili gönder
    const info = await transporter.sendMail({
      from: `"Test Email" <${config.user}>`,
      to: config.to,
      subject: 'Test Email - Apart Kartal Web Sitesi',
      text: 'Bu bir test emailidir.',
      html: '<b>Bu bir test emailidir.</b>'
    });
    
    console.log('Email sent:', info);
    
    return NextResponse.json({
      success: true,
      message: 'Test email gönderildi',
      info: {
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected
      }
    });
    
  } catch (error: any) {
    console.error('Test email error:', error);
    
    return NextResponse.json({
      success: false,
      error: {
        message: error.message,
        code: error.code,
        command: error.command,
        responseCode: error.responseCode
      }
    }, { status: 500 });
  }
}