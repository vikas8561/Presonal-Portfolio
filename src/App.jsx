import React, { useState } from "react";
import "./App.css";
import { Github, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal Portfolio website to showcase my work and skills.",
    link: "https://github.com/vikas8561/Presonal-Portfolio",
  },
  {
    title: "Zeesh (restaurant reservation)",
    description: "An online shopping platform built with MERN stack.",
    link: "https://github.com/vikas8561/restaurantReservation",
  },
  {
    title: "Task Management Application",
    description: "A task management system to create and manage tasks",
    link: "https://github.com/vikas8561/Task-Management-Syatem",
  },
];

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Java",
  "Data Structure and Algorithm",
  "Git",
  "API Development",
];

const education = [
  {
    degree: "B.tech in Computer Science",
    institution: "Poornima College Of Engineering",
    year: "2023",
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Masai School",
    year: "2025",
  },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <div className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          </li>
          <li>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <header>
          <h1>Hi, I'm Vikas Kumar</h1>
          <section className="about" id="about">
            <h2>About Me</h2>
            <p>
              I'm a passionate Full-Stack Developer with experience in building
              scalable web applications. I love working with the latest
              technologies and learning new concepts to improve my skills.
            </p>
          </section>
          <p>Full-Stack Developer | React | Node.js</p>
          <div className="socials" id="contact">
            <a
              href="https://github.com/vikas8561"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-kumar-2304a92a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin /> LinkedIn
            </a>
            <a href="mailto:vikas12252@gmail.com">
              <Mail /> Contact
            </a>
          </div>
        </header>

        <section className="education" id="education">
          <h2>Education</h2>
          {education.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </section>

        <section className="skills" id="skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>

        <h2 className="project" id="projects">
          Projects
        </h2>
        <section className="projects">
          {projects.map((proj, idx) => (
            <div className="card" key={idx}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a
                href={proj.link}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </section>

        <footer>
          <p>© {new Date().getFullYear()} Vikas Kumar. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
