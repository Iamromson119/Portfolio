import { education, certification } from "../data.js";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-intro">
        <h2>Education</h2>
      </div>
      <div className="education-grid">
        <div className="education-item">
          <h3>{education.degree}</h3>
          <p>{education.school}, {education.location}</p>
        </div>
        <div className="education-item">
          <h3>
            <a href={certification.url} target="_blank" rel="noopener noreferrer">
              {certification.title}
            </a>
          </h3>
          <p>{certification.issuer} &middot; {certification.date} &middot; {certification.grade}</p>
        </div>
      </div>
    </section>
  );
}
