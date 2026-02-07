const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-booking', async (req, res) => {
  const data = req.body;
  const isFree = data.tour === "walking";
  const tourName = isFree ? "Free Walking Tour" : "Tenma Bar Hopping";

  // Change subject and alert style based on tour type
  const subjectTag = isFree ? "[FREE BOOKING]" : "[PENDING PAYMENT]";
  const statusColor = isFree ? "#28a745" : "#856404"; // Green for free, Yellow for pending
  const statusBg = isFree ? "#d4edda" : "#fff3cd";
  const statusBorder = isFree ? "#c3e6cb" : "#ffeeba";

  const mailOptions = {
    from: `"Booking System" <${process.env.EMAIL_USER}>`,
    to: "hoshisummertime@gmail.com",
    subject: `${subjectTag} ${tourName} - ${data.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #ddd; padding: 20px; color: #333;">
        <h2 style="color: #231816; border-bottom: 2px solid #231816; padding-bottom: 10px;">New Booking Request</h2>
        
        <div style="background-color: ${statusBg}; color: ${statusColor}; padding: 15px; border-radius: 4px; margin: 20px 0; border-left: 5px solid ${statusBorder};">
          <strong>Status:</strong> ${isFree ? "Free Tour Registration (No Payment Needed)" : data.statusNote}
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Customer:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Tour:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${tourName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.date}</td>
          </tr>
          
          ${data.tour === "tenma" ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Time Slot:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.timeSlot}</td>
          </tr>
          ` : ''}

          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Group Size:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.groupSize} People</td>
          </tr>
        </table>

        <p style="margin-top: 25px; font-size: 0.85rem; color: #777;">
          This booking was submitted via your website.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ ${subjectTag} sent for: ${data.name}`);
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("❌ Nodemailer Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.post('/send-contact', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: "hoshisummertime@gmail.com",
    subject: `[INQUIRY] New Message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #ddd; padding: 20px;">
        <h2 style="color: #231816; border-bottom: 2px solid #231816; padding-bottom: 10px;">New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 5px solid #231816;">
          <strong>Message:</strong><br/>
          ${message.replace(/\n/g, '<br/>')}
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Inquiry sent by: ${name}`);
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Nodemailer Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});