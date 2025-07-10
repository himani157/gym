// NewsletterForm.jsx
import React, { useState } from 'react';

export default function NewsletterForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        categories: [],
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                categories: checked
                    ? [...prev.categories, value]
                    : prev.categories.filter((c) => c !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:4000/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            // No success message needed — just close form
            onClose();
        } catch (err) {
            console.error("Failed to submit:", err);
        }
    };

    return (
        <div style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            width: "400px",
            backgroundColor: "#fff0f5", // light pink
            border: "2px solid #ff66b2",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            zIndex: 9998,
        }}>
            <h3 style={{ color: "#cc0066", textAlign: "center", marginBottom: "15px" }}>Join the Glow-Up Newsletter ✨</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                    style={{ width: '100%', marginBottom: '8px' }}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    style={{ width: '100%', marginBottom: '8px' }}
                />

                <label><input type="checkbox" value="Fitness Tips" onChange={handleChange} /> Fitness Tips</label><br />
                <label><input type="checkbox" value="Diet Plans" onChange={handleChange} /> Diet Plans</label><br />
                <label><input type="checkbox" value="Motivation" onChange={handleChange} /> Motivation</label><br />
                <label><input type="checkbox" value="Weekly Challenges" onChange={handleChange} /> Weekly Challenges</label><br />

                <button type="submit" style={{ marginTop: '10px' }}>Subscribe</button>
                <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
            </form>
        </div>
    );
}
