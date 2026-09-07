export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>
            Full-stack developer
            <span className="hero-line-2">who ships and can explain why.</span>
          </h1>
          <p className="hero-subtitle">
            I build working software end to end, React on the frontend, Node
            and MongoDB behind it, and I care about the parts that are easy
            to skip: validation, failure states, the bug that only shows up
            under load.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              See the projects
            </a>
            <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-head">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="code-card-title">bookingController.js</span>
            </div>
            <pre className="code-card-body">{`Slot.findOneAndUpdate(
  {
    _id: slotId,
    remainingCapacity: { $gte: seats }
  },
  { $inc: { remainingCapacity: -seats } }
)`}</pre>
            <p className="code-card-caption">
              the line that stops two people booking the same seat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
