/**
 * File: Contact.jsx
 * Student: Braiden Jensen
 * StudentID: 301475238
 * Date: 2025-09-16
 * Purpose: Contact page with read-only info and editable message field
 */

import { useState } from "react";

export default function Contact({ setPage }) {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Message sent:", message);
    setMessage("");
    setPage("Home");
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <div style={{ marginBottom: "1rem" }}>
        <p>Email: braidenjensen@gmail.com</p>
        <p>Phone: 905-928-0808</p>
        <p>Location: Toronto, ON</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <input value="Braiden Jensen" readOnly />
        <input value="905-928-0808" readOnly />
        <input value="braidenjensen@gmail.com" readOnly />
        <textarea
          placeholder="Enter your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </section>
  );
}
