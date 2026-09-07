import { contact } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2>Let's talk</h2>
        <p>
          I'm looking for my first full-time role. If you're hiring, or just
          want to talk about how the seat-reservation logic in Encore works,
          my inbox is open.
        </p>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`} className="contact-link">{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
}
