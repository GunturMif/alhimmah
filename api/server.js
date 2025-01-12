const express = require("express");
const bodyParser = require("body-parser");
const sendEmail = require("./emailHandler");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Mengizinkan CORS
app.use(bodyParser.json());

// Endpoint API untuk mengirim email
app.post("/send-email", async (req, res) => {
  const formData = req.body;

  const result = await sendEmail(formData);
  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
