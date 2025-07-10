import express from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import newsletterRoutes from './routes/newsletter.js';
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
config({ path: "./config.env" });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", //[process.env.FRONTEND_URL], // or hardcode as: "http://localhost:5173"
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Routes
app.use('/api/newsletter', newsletterRoutes);

app.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "natashahp3947@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
