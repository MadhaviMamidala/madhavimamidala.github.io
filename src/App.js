import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Madhavi Mamidala</h1>
        <h2>Full Stack Software Engineer</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/madhavi-mamidala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/MadhaviMamidala" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <section className="education">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-item">
            <h3>Master of Science in Computer Science</h3>
            <h4>University of Texas at Arlington, US</h4>
            <p>Jan 2023 - Dec 2024</p>
            <p>GPA: 4.0/4.0</p>
          </div>
          <div className="education-item">
            <h3>Bachelor of Technology in Computer Science</h3>
            <h4>CMR College of Engineering & Technology, India</h4>
            <p>Aug 2016 - Sep 2020</p>
            <p>GPA: 3.53/4.0</p>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>C</span>
              <span>C++</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Web Technologies</h3>
            <div className="skill-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>REST APIs</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <div className="skill-tags">
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>SQLite</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Linux</span>
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Tech Stack: React, Node.js, CSS</p>
            <p>A responsive portfolio website showcasing my skills and projects.</p>
            <a href="https://github.com/MadhaviMamidala/madhavimamidala.github.io" target="_blank" rel="noopener noreferrer">GitHub Code</a>
          </div>
          <div className="project-card">
            <h3>E-commerce Platform</h3>
            <p>Tech Stack: React, Node.js, MongoDB</p>
            <p>A full-stack e-commerce platform with user authentication and payment integration.</p>
            <a href="https://github.com/MadhaviMamidala/ecommerce-platform" target="_blank" rel="noopener noreferrer">GitHub Code</a>
          </div>
          <div className="project-card">
            <h3>Task Management App</h3>
            <p>Tech Stack: React, Express.js, PostgreSQL</p>
            <p>A collaborative task management application with real-time updates.</p>
            <a href="https://github.com/MadhaviMamidala/task-manager" target="_blank" rel="noopener noreferrer">GitHub Code</a>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-item">
            <h3>Graduate Teaching Assistant</h3>
            <h4>University of Texas at Arlington</h4>
            <p>Duration: Aug 2023 - Present</p>
            <ul>
              <li>Assisted in teaching Data Structures and Algorithms</li>
              <li>Conducted lab sessions and office hours</li>
              <li>Graded assignments and provided feedback</li>
            </ul>
            <div className="tech-stack">
              <span>Java</span>
              <span>Python</span>
              <span>Data Structures</span>
            </div>
          </div>
          <div className="experience-item">
            <h3>Software Engineer Intern</h3>
            <h4>Tech Company</h4>
            <p>Duration: Jun 2023 - Aug 2023</p>
            <ul>
              <li>Developed and maintained web applications using React and Node.js</li>
              <li>Implemented RESTful APIs and database schemas</li>
              <li>Participated in code reviews and agile development</li>
            </ul>
            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© Madhavi Mamidala {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App; 