import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Gmail SMTP transporter oluştur
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS, // App password kullanılmalı
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function POST(request: NextRequest) {
  try {
    // Debug: Environment değişkenlerini kontrol et
    console.log('Environment kontrolü:', {
      GMAIL_USER: process.env.GMAIL_USER ? 'Var' : 'Yok',
      GMAIL_PASS: process.env.GMAIL_PASS ? 'Var' : 'Yok',
      GMAIL_TO: process.env.GMAIL_TO ? 'Var' : 'Yok',
    });
    
    // Transporter'ı doğrula
    try {
      await transporter.verify();
      console.log('SMTP bağlantısı başarılı');
    } catch (verifyError) {
      console.error('SMTP doğrulama hatası:', verifyError);
    }
    
    const data = await request.json();
    
    // Form verilerini al
    const { name, email, phone, subject, roomType, message } = data;
    
    // E-posta içeriğini hazırla
    const isQuoteForm = roomType ? true : false;
    const emailSubject = isQuoteForm 
      ? `Kartal Şubesi - Yeni Teklif Talebi - ${name}` 
      : `Kartal Şubesi - ${subject || 'İletişim Formu'} - ${name}`;
    
    let emailBody = `
      <h2 style="color: #f42a93;">${isQuoteForm ? 'Yeni Teklif Talebi' : 'Yeni İletişim Formu Mesajı'}</h2>
      <h3 style="color: #666;">Birgül Hanım Kartal Şubesi</h3>
      <hr style="border-color: #f42a93;">
      <table style="width: 100%; font-family: Arial, sans-serif;">
        <tr>
          <td style="padding: 8px; font-weight: bold; width: 200px;">Öğrenci Adı Soyadı:</td>
          <td style="padding: 8px;">${name}</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; font-weight: bold;">E-posta:</td>
          <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Telefon:</td>
          <td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td>
        </tr>
    `;
    
    if (isQuoteForm) {
      emailBody += `
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; font-weight: bold;">Talep Edilen Oda Tipi:</td>
          <td style="padding: 8px;">${roomType}</td>
        </tr>
      `;
    } else {
      emailBody += `
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 8px; font-weight: bold;">Konu:</td>
          <td style="padding: 8px;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold; vertical-align: top;">Mesaj:</td>
          <td style="padding: 8px;">${message || 'Mesaj girilmedi'}</td>
        </tr>
      `;
    }
    
    emailBody += `
      </table>
      <hr style="margin-top: 30px; border-color: #ddd;">
      <p style="color: #666; font-size: 12px; text-align: center;">
        Bu mesaj ${new Date().toLocaleString('tr-TR')} tarihinde 
        <strong>birgulhanimkizogrenciyurdukartal.com.tr</strong> web sitesi üzerinden gönderildi.
      </p>
    `;
    
    // E-posta ayarları
    const mailOptions = {
      from: `"Birgül Hanım Kartal Şubesi" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO,
      subject: emailSubject,
      html: emailBody,
      replyTo: email, // Yanıtla butonuna basıldığında form dolduran kişinin e-postası görünecek
    };
    
    // E-postayı gönder
    const info = await transporter.sendMail(mailOptions);
    console.log('Email gönderildi:', info.messageId);
    console.log('Email detayları:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      accepted: info.accepted,
      rejected: info.rejected,
    });
    
    // Başarılı yanıt döndür
    return NextResponse.json({
      success: true,
      message: 'Form başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    });
    
  } catch (error: any) {
    console.error('Email gönderme hatası detayı:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}