// routes/newsletter.js
import express from 'express';
import Subscriber from '../models/NewsletterSubscriber.js';

const router = express.Router();

router.post('/subscribe', async (req, res) => {
    const { name, email, categories } = req.body;

    try {
        const newSubscriber = new Subscriber({ name, email, categories });
        await newSubscriber.save();
        res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to subscribe", error });
    }
});

export default router; // ✅ this fixes your import error
