// NewsletterFloatingButton.jsx
import React, { useState } from 'react';
import NewsletterForm from './NewsletterForm'; // a separate component we'll create

export default function NewsletterFloatingButton() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowForm(!showForm)}
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    backgroundColor: "#ff4da6", // pinkish
                    color: "#fff",
                    border: "none",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                    fontSize: "30px",
                    cursor: "pointer",
                    boxShadow: "0 0 12px rgba(132, 128, 128, 0.81)",
                    zIndex: 9995,
                }}
                title="Join Newsletter"
            >
                ✉️
            </button>

            {showForm && <NewsletterForm onClose={() => setShowForm(false)} />}
        </>
    );
}
