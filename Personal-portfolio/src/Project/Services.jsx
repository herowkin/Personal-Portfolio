/**
 * File: Services.jsx
 * Student: Braiden Jensen
 * StudentID: 301475238
 * Date: 2025-09-16
 * Purpose: Services page with visually styled service cards
 */

export default function Services() {
  const services = [
    { icon: "💻", title: "Web Development", desc: "Building fast, responsive websites using modern frameworks like React." },
    { icon: "🎨", title: "Frontend Design", desc: "Designing clean and accessible user interfaces with HTML, CSS, and JavaScript." },
    { icon: "🗄️", title: "Database Basics", desc: "Designing and maintaining simple databases for small projects." }
  ];

  return (
    <section>
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
