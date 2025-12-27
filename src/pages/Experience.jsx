function Experience() {
  return (
    <section>
      <h2>Experience</h2>

      <div className="card">
        <h3>Hybrid Cloud Software Engineering Intern</h3>
        <span>Hewlett Packard Enterprise · June 2025 – Present · San Jose, CA</span>
        <ul>
          <li>
            Built a Command Usage Coverage Tool to analyze nightly command-line test logs and
            identify underutilized features and test gaps.
          </li>
          <li>
            Developed a dynamic React frontend and scalable Express/MongoDB backend for intuitive
            usage data visualization and storage.
          </li>
          <li>
            Wrote Python logic to parse debug logs across 401 commands and integrated Odin API for
            automated test result collection and AI-driven test statement generation.
          </li>
          <li>
            Delivered scalable tooling that improved reliability and was adopted for broader test
            coverage.
          </li>
        </ul>
      </div>

      <div className="card">
        <h3>Robotics Club Member</h3>
        <span>California Polytechnic State University · Sept 2023 – Present · San Luis Obispo, CA</span>
        <ul>
          <li>
            Programmed an Astromech droid with ROS, C++, and Python, integrating hardware and
            software systems.
          </li>
          <li>
            Mentored new members and represented Cal Poly at outreach and community events.
          </li>
        </ul>
      </div>

      <div className="card">
        <h3>Project Manager / Software Developer</h3>
        <span>Whitney High School · Aug 2022 – May 2023 · Rocklin, CA</span>
        <ul>
          <li>
            Led development of a cross-platform school app using Dart, overseeing the full software
            lifecycle from planning to testing.
          </li>
          <li>
            Managed a small team, ensured stakeholder alignment, and delivered the app on time while
            mitigating project risks.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
