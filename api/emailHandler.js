const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (formData) => {
  try {
    // Konfigurasi transport email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Email pengirim
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Konfigurasi pesan email
    const mailOptions = {
      from: process.env.EMAIL_USER, // Pengirim tetap
      to: process.env.EMAIL_TO, // Penerima (Anda)
      subject: `Pesan Baru dari ${formData.firstName} ${formData.lastName}`,
      text: `
        Nama: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Telepon: ${formData.phone}
        Pesan: ${formData.message}
      `,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);
    console.log("Pesan berhasil dikirim.");
    return { success: true, message: "Email berhasil dikirim!" };
  } catch (error) {
    console.error("Error saat mengirim email:", error);
    return { success: false, message: "Gagal mengirim email." };
  }
};

module.exports = sendEmail;
