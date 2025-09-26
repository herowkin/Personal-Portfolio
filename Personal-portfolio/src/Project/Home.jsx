/**
 * File: Home.jsx
 * Student: Braiden Jensen
 * StudentID: 301475238
 * Date: 2025-09-16
 * Purpose: Home page 
 */
export default function Home({ setPage }) {
  return (
    <section className="home-hero">
      <h1>Hello, I'm <span style={{ color: "#facc15" }}>Braiden Jensen</span></h1>
      <p>
        I’m a passionate web developer who builds clean, accessible, and responsive
        web applications with modern tools like React.
      </p>

      <div className="home-buttons">
        <button onClick={() => setPage("About")}>About Me</button>
        <button onClick={() => setPage("Projects")}>View Projects</button>
      </div>
    </section>
  );
}
