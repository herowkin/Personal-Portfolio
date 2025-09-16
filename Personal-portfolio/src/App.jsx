/**
 * File: App.jsx
 * Student: Your Name
 * StudentID: 123456789
 * Date: 2025-09-16
 * Purpose: Root component that switches pages using useState
 */
import { useState } from "react";
import Navbar from "./Project/Navbar";
import Home from "./Project/Home";
import About from "./Project/About";
import Projects from "./Project/Projects";
import Services from "./Project/Services";
import Contact from "./Project/Contact";
import "./App.css";


export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      <Navbar setPage={setPage} />
      {page === "Home" && <Home setPage={setPage} />}
      {page === "About" && <About />}
      {page === "Projects" && <Projects />}
      {page === "Services" && <Services />}
      {page === "Contact" && <Contact setPage={setPage} />}
    </>
  );
}
