/**
 * File: Navbar.jsx
 * Student: Your Name
 * StudentID: 123456789
 * Date: 2025-09-16
 * Purpose: Navigation bar with custom logo + page buttons
 */
export default function Navbar({ setPage }) {
  return (
    <nav style={{ display:"flex", alignItems:"center", gap:"1rem", padding:"1rem", borderBottom:"1px solid #ccc" }}>
      {/* Custom logo (square with initials) */}
      <div style={{
        width:"40px", height:"40px",
        background:"#3b82f6", color:"#fff",
        display:"flex", alignItems:"center", justifyContent:"center",
        fontWeight:"bold"
      }}>BJ</div>

      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("About")}>About</button>
      <button onClick={() => setPage("Projects")}>Projects</button>
      <button onClick={() => setPage("Services")}>Services</button>
      <button onClick={() => setPage("Contact")}>Contact</button>
    </nav>
  );
}
