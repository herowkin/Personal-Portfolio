/**
 * File: Projects.jsx
 * Student: Braiden Jensen
 * StudentID: 301475238
 * Date: 2025-09-16
 * Purpose: Projects page showing 3 highlighted projects
 */

export default function Projects() {
  const projects = [
    {
      title: "Bug Smasher Game",
      role: "Solo Developer",
      desc: "An HTML5 canvas browser game where players click fast-moving bugs to earn points. Includes score tracking, speed resets, and simple animations."
    },
    {
      title: "GFAST 1.0 SRS",
      role: "Team Analyst / Documenter",
      desc: "A full Software Requirements Specification for a Game Feedback Automated Sort and Transfer system, including use-case diagrams, activity flows, and functional requirements."
    },
    {
      title: "E-Commerce Database",
      role: "Database Designer",
      desc: "A normalized multi-table Oracle SQL database for an online store. Designed schema, implemented constraints, populated test data, and wrote queries to fulfill business requirements."
    }
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h1>My Projects</h1>
      <div style={{
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        marginTop: "2rem"
      }}>
        {projects.map((p) => (
          <div key={p.title} style={{
            flex: "1 1 250px",
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
          }}>
            <h3>{p.title}</h3>
            <p><strong>Role:</strong> {p.role}</p>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
