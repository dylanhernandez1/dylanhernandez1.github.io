function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="card">
        <h3>What’s In The Fridge</h3>
        <span>Full-Stack Web Application · Jan 2025 – June 2025</span>
        <p>
          Full-stack food inventory and grocery management app that enables users to create shared
          households, manage food items, maintain grocery lists, and fetch AI-generated recipe suggestions.
        </p>
        <p className="tech">React · Express · MongoDB · JavaScript · CI/CD · Testing</p>
      </div>

      <div className="card">
        <h3>Just Prance</h3>
        <span>Computer Vision Dance Game · June 2024 – Sept 2024</span>
        <p>
          A Just Dance–inspired game built in Python using MediaPipe and OpenCV for real-time pose
          tracking, scoring player movement accuracy based on pose matching.
        </p>
        <p className="tech">Python · MediaPipe · OpenCV · PyQt5 · Unsplash API</p>
      </div>
    </section>
  );
}

export default Projects;
