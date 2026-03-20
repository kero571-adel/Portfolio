import nodemailer from "nodemailer";

// Configure your email service here
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate form data
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }
    
    // Send email to your address
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "kerolesadel297@gmail.com",
      subject: `New Portfolio Message from ${name}: ${subject}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>Keroles Adel</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again." }),
      { status: 500 }
    );
  }
}