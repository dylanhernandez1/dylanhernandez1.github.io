import { useState } from 'react';

function Projects() {
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
            <img src={selectedImage} alt="Expanded project media" className="image-modal-image" />
          </div>
        </div>
      )}

      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>What&apos;s In The Fridge</h3>
          <span>Full-Stack Web Application · Jan 2025 – June 2025 · San Luis Obispo, CA</span>
          <ul>
            <li>Developed and deployed a full-stack food inventory platform using <strong>React</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</li>
            <li>Implemented shared households, inventory tracking, grocery lists, and <strong>AI-generated recipes</strong>.</li>
            <li>Automated testing and deployment with <strong>GitHub Actions CI/CD</strong> to improve reliability.</li>
          </ul>

          <div className="media-gallery">
            <img
              src="/media/projects/whats-in-the-fridge/image.png"
              alt="What's In The Fridge"
              className="media-preview"
              onClick={() => setSelectedImage('/media/projects/whats-in-the-fridge/image.png')}
            />
          </div>
          <div className="card-media-row">
            <a href="https://github.com/dylanhernandez1/Whats_In_The_Fridge" target="_blank" rel="noreferrer" className="media-link-button">
              Project link
            </a>
          </div>
        </div>

        <div className="card">
          <h3>AI Snake</h3>
          <span>Reinforcement Learning Game · Sept 2025 – Dec 2025</span>
          <ul>
            <li>Built a <strong>DQN reinforcement-learning agent</strong> in Python to autonomously learn Snake gameplay.</li>
            <li>Trained a <strong>PyTorch neural network</strong> using state features, reward engineering, and experience replay.</li>
            <li>Integrated the AI backend with a real-time web interface using <strong>Socket.IO</strong> and <strong>WebSockets</strong>.</li>
          </ul>

          <div className="media-gallery">
            <img
              src="/media/projects/ai-snake/image.png"
              alt="AI Snake"
              className="media-preview"
              onClick={() => setSelectedImage('/media/projects/ai-snake/image.png')}
            />
          </div>
          <div className="card-media-row">
            <a href="https://github.com/dylanhernandez1/fall-2025-snake-bootcamp" target="_blank" rel="noreferrer" className="media-link-button">
              Project link
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Just Prance</h3>
          <span>Computer Vision Dance Game · June 2024 – Sept 2024 · Rocklin, CA</span>
          <ul>
            <li>Developed a real-time dance game in <strong>Python</strong> using <strong>MediaPipe/OpenCV</strong> for pose tracking.</li>
            <li>Designed pose-matching logic using joint angles and distances to evaluate player accuracy.</li>
            <li>Integrated the <strong>Unsplash API</strong> to source dance poses and generate dynamic gameplay challenges.</li>
          </ul>

          <div className="card-media-row">
            <a href="https://github.com/BradyCason/CV-Dance-Game" target="_blank" rel="noreferrer" className="media-link-button">
              GitHub link
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Get Away!</h3>
          <span>Godot 4 Space Shooter · May 2026</span>
          <ul>
            <li>Developed a top-down survival shooter in <strong>Godot 4</strong> with real-time movement, mouse aiming, enemy spawning, and projectile combat.</li>
            <li>Designed an <strong>object-oriented enemy and projectile system</strong> with reusable base classes and specialized behaviors.</li>
            <li>Implemented explosive grenades with area-of-effect damage, collision handling, and visual explosion feedback.</li>
            <li>Created multiple enemy types with dynamic difficulty scaling as player scores increase.</li>
            <li>Built complete game-state and UI flows including start and game-over menus, health, score, grenades, and restarting.</li>
            <li>Created a centralized <strong>AudioManager</strong> for music and event-driven sound effects throughout gameplay.</li>
            <li>Developed the game using <strong>GDScript</strong>, pixel-art visuals, and modular Godot scenes.</li>
          </ul>

          <div className="media-gallery">
            <img
              src="/media/projects/get-away/image.png"
              alt="Get Away! gameplay preview"
              className="media-preview"
              onClick={() => setSelectedImage('/media/projects/get-away/image.png')}
            />
          </div>
          <div className="card-media-row">
            <a href="https://drive.google.com/file/d/1bTLxfV_31wbhB4txM7b5DgV1SinpVXXL/view" target="_blank" rel="noreferrer" className="media-link-button">
              Video link
            </a>
            <a href="https://dylanhernandez1.itch.io/get-away" target="_blank" rel="noreferrer" className="media-link-button">
              itch.io link
            </a>
          </div>
        </div>

        <div className="card">
          <h3>Sticky Situation</h3>
          <span>Godot Game Jam Project · February 2026 · San Luis Obispo, CA</span>
          <ul>
            <li>Developed a complete game in <strong>Godot</strong> with a team of Cal Poly students in under <strong>48 hours</strong>.</li>
            <li>Built a fast-paced mask-making gameplay loop where players recreate requested designs before time expires.</li>
            <li>Helped implement gameplay systems, user interactions, and game-state logic under a strict game-jam deadline.</li>
            <li>Collaborated with teammates to rapidly prototype ideas, integrate features, troubleshoot issues, and deliver a playable build.</li>
            <li>Created an original narrative and gameplay concept centered around a lumberjack crafting masks for a tribe of stick people.</li>
          </ul>

          <div className="card-media-row">
            <a href="https://dylanhernandez1.itch.io/sticky-situation" target="_blank" rel="noreferrer" className="media-link-button">
              itch.io link
            </a>
          </div>
        </div>

        <div className="card">
          <h3>DataFest — Population Movement &amp; Commercial Leasing Analysis</h3>
          <span>Cal Poly DataFest · April 2025 · San Luis Obispo, CA</span>
          <ul>
            <li>Analyzed population migration and commercial leasing data using <strong>R</strong>, <strong>Python</strong>, and <strong>tidyverse</strong>.</li>
            <li>Investigated relationships between population shifts and commercial leasing activity across major U.S. markets.</li>
            <li>Compared trends across <strong>technology</strong>, <strong>financial</strong>, and <strong>legal industries</strong> to identify industry-specific leasing patterns.</li>
            <li>Found that California-to-Texas migration was not a primary driver of recent leasing spikes in the analyzed industries.</li>
            <li>Combined population, migration, projection, and leasing data to develop <strong>data-driven business recommendations</strong>.</li>
            <li>Presented findings and visualizations with a team, translating complex datasets into actionable insights.</li>
          </ul>

          <div className="media-gallery">
            <img
              src="/media/projects/datafest/image.png"
              alt="DataFest"
              className="media-preview"
              onClick={() => setSelectedImage('/media/projects/datafest/image.png')}
            />
          </div>
          <div className="card-media-row">
            <a href="https://www.calpoly.edu/" target="_blank" rel="noreferrer" className="media-link-button">
              Cal Poly link
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
