import { useState } from 'react';

function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              ×
            </button>
            <img src={selectedImage} alt="Expanded experience media" className="image-modal-image" />
          </div>
        </div>
      )}

      <section>
        <h2>Experience</h2>

        <div className="card">
          <h3>Software Engineering Intern</h3>
          <span>Hewlett Packard Enterprise · June 2025 – August 2026 · San Jose, CA</span>
          <ul>
            <li>Reduced test-suite runtime by <strong>28%</strong> with an <strong>AI-powered log-analysis tool</strong> for performance optimization.</li>
            <li>Analyzed <strong>700K+ test results</strong> across <strong>401 CLI commands</strong> to expose functional coverage gaps.</li>
            <li>Configured complex test environments to reproduce <strong>customer issues</strong> and traced root causes through logs.</li>
            <li>Built a coverage dashboard with <strong>React.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> for engineering teams.</li>
            <li>Integrated <strong>Jenkins CI/CD</strong> with <strong>200+ automated tests</strong> for continuous validation and deployment.</li>
            <li>Delivered production tooling adopted by <strong>~15 HPE teams</strong> to guide testing and coverage decisions.</li>
            <li>Built an <strong>AI test-generation tool</strong> to create targeted tests for uncovered CLI commands automatically.</li>
          </ul>

          <div className="media-gallery">
            <img
              src="/media/experience/hpe/internfair1.png"
              alt="HPE internship photo 1"
              className="media-preview"
              onClick={() => setSelectedImage('/media/experience/hpe/internfair1.png')}
            />
            <img
              src="/media/experience/hpe/internfair2.png"
              alt="HPE internship photo 2"
              className="media-preview"
              onClick={() => setSelectedImage('/media/experience/hpe/internfair2.png')}
            />
          </div>
          <div className="card-media-row">
            <a href="https://www.hpe.com/" target="_blank" rel="noreferrer" className="media-link-button">
              HPE link
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Robotics Club Member</h3>
          <span>California Polytechnic State University · Sept 2023 – June 2026 · San Luis Obispo, CA</span>
          <ul>
            <li>Programmed an Astromech droid using <strong>C++</strong>, <strong>Python</strong>, <strong>C</strong>, and <strong>ROS</strong>, integrating software and hardware.</li>
            <li>Collaborated on robotics development and <strong>mentored newer members</strong> on tools and project workflows.</li>
          </ul>

          <div className="media-gallery">
            <img
              src="/media/experience/robotics-club/image.png"
              alt="Cal Poly robotics club"
              className="media-preview"
              onClick={() => setSelectedImage('/media/experience/robotics-club/image.png')}
            />
          </div>
          <div className="card-media-row">
            <a href="https://www.calpoly.edu/" target="_blank" rel="noreferrer" className="media-link-button">
              Cal Poly link
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Software Developer / Project Manager</h3>
          <span>Whitney High School · Aug 2022 – May 2023 · Rocklin, CA</span>
          <ul>
            <li>Engineered a cross-platform <strong>Dart</strong> app for schedules, lunch menus, and school-wide announcements.</li>
            <li><strong>Led a 4-developer team</strong>, translated stakeholder needs, and drove development through testing.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Experience;
