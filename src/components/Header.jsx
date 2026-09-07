const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const scrollTo = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="wordmark" onClick={(e) => scrollTo(e, "top")}>
          Romson<span className="wordmark-last"> Nathaniel</span>
        </a>
        <nav>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => scrollTo(e, link.href.slice(1))}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
