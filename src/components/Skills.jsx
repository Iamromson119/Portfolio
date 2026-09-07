import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-intro">
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <h3>{group.label}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
