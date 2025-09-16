/**
 * File: About.jsx
 * Student: Braiden Jensen
 * StudentID: 301475238
 * Date: 2025-09-16
 * Purpose: About Me page
 */

import me from "../assets/Me.png";

export default function About() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>About Me</h1>

      <img
        src={me}
        alt="Braiden Jensen"
        style={{ width: "150px", borderRadius: "50%", margin: "1rem 0" }}
      />

      <p><strong>Name:</strong> Braiden Jensen</p>
      <p><strong>Email:</strong> braidenjensen@gmail.com</p>
      <p><strong>Phone:</strong> 905-928-0808</p>
      <p><strong>Location:</strong> Toronto, ON</p>

      <p style={{ marginTop: "1rem" }}>
        I'm a web developer passionate about building clean, accessible, and user-friendly
        web applications. I love learning new technologies and turning creative ideas into
        real working projects.
      </p>

      <p style={{ marginTop: "1rem" }}>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">View My Resume (PDF)</a>
      </p>
    </section>
  );
}
