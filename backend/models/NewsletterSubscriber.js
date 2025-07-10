import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    categories: [{ type: String }],
    subscribedAt: { type: Date, default: Date.now }
});

const Subscriber = mongoose.model('NewsletterSubscriber', subscriberSchema);
export default Subscriber; // ✅ default export
