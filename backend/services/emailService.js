const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // for local testing only
  },
});

exports.sendWelcomeEmail = async (email, companyName) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Welcome to Recruitify Global',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0041A8;">Welcome ${companyName}!</h1>
          <p>Thank you for registering with Recruitify Global as a recruiter.</p>
          <p>Our team will review your application and contact you shortly.</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
            <h3 style="color: #0041A8; margin-top: 0;">Next Steps:</h3>
            <ul>
              <li>Complete your company profile</li>
              <li>Verify your email address</li>
              <li>Post your first job listing</li>
            </ul>
          </div>
          
          <p style="margin-top: 30px;">If you have any questions, please reply to this email.</p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p>Best regards,</p>
            <p><strong>The Recruitify Global Team</strong></p>
            <img src="https://yourdomain.com/logo.png" alt="Recruitify Logo" style="height: 40px; margin-top: 10px;">
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw new Error('Failed to send welcome email');
  }
};
