import "./App.css";

function App() {
  return (
    <div className="container">
      {/* HERO */}
      <header className="hero">
        <div>
          <h1>Dylan Hernandez</h1>
          <p className="subtitle">
            Software Engineering Student @ Cal Poly <br />
            Hybrid Cloud Software Engineering Intern @ HPE
          </p>
          <div className="links">
            <a href="mailto:Hernandez.dylan0622@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/dylan3" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/dylanhernandez1" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section>
        <h2>About Me</h2>
        <p>
          I am a Software Engineering student at California Polytechnic State
          University, San Luis Obispo, with a minor in Data Science. I currently
          work as a Hybrid Cloud Software Engineering Intern at Hewlett Packard
          Enterprise, where I build tooling to improve test coverage,
          reliability, and developer workflows.
        </p>
        <p>
          I enjoy full-stack development, systems programming, and building
          software that is both scalable and maintainable. I value clean design,
          thoughtful architecture, and collaboration.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2>Experience</h2>

        <div className="card">
          <h3>Hybrid Cloud Software Engineering Intern</h3>
          <span>Hewlett Packard Enterprise · June 2025 – Present</span>
          <ul>
            <li>
              Built a command usage coverage tool to analyze nightly CLI test
              logs and identify gaps in test coverage.
            </li>
            <li>
              Developed a React frontend with an Express and MongoDB backend to
              visualize and store usage metrics.
            </li>
            <li>
              Wrote Python logic to parse debug logs across 400+ commands and
              generate AI-driven test statements.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Robotics Club Member</h3>
          <span>Cal Poly · Sept 2023 – Present</span>
          <ul>
            <li>
              Programmed an Astromech droid using ROS, C++, and Python,
              integrating hardware and software systems.
            </li>
            <li>Mentored new members and participated in outreach events.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>What’s In The Fridge</h3>
          <p>
            Full-stack web application for managing shared household food
            inventories and grocery lists.
          </p>
          <p className="tech">
            React · Express · MongoDB · JavaScript · CI/CD
          </p>
        </div>

        <div className="card">
          <h3>Just Prance</h3>
          <p>
            Computer vision–based dance game using real-time pose tracking to
            score player movement accuracy.
          </p>
          <p className="tech">
            Python · MediaPipe · OpenCV · PyQt5
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <h2>Skills</h2>
        <ul className="skills">
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>C / C++</li>
          <li>SQL</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Linux</li>
          <li>ROS</li>
        </ul>
      </section>

      {/* EXTRAS */}
      <section>
        <h2>Outside of Coding</h2>
        <p>
          Outside of academics and internships, I enjoy robotics projects,
          game development, and working on creative software ideas. I also have
          experience in graphic design using Adobe Photoshop and Illustrator.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Dylan Hernandez</p>
      </footer>
    </div>
  );
}

export default App;
