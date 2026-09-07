import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-intro">
        <h2>Projects</h2>
        <p>Four full-stack builds, each solving a different real problem.</p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.title} className="project-row">
            <div className="project-icon">{project.icon}</div>
            <div className="project-body">
              <div className="project-heading">
                <h3>{project.title}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  View code
                </a>
              </div>
              <p className="project-signal">{project.signal}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
