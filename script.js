const { useState, useEffect } = React;

const skills = {
    'Frontend': ['React', 'Vue.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'],
    'Tools': ['Git', 'Docker', 'AWS', 'Postman', 'VS Code'],
    'Other': ['REST APIs', 'Web Scraping', 'Authentication', 'MERN Stack', 'Full Stack Development']
};

const projects = [
    {
        number: '01',
        title: 'E-Commerce MERN',
        description: 'A full-featured e-commerce platform built with the MERN stack. Includes product catalog, shopping cart, user authentication, order management, and payment integration.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        icon: '🛒',
        github: 'https://github.com/Iamromson119/ecommerce-mern',
        demo: '#'
    },
    {
        number: '02',
        title: 'Auth User System',
        description: 'Comprehensive authentication system with user registration, login, JWT token management, password hashing, and secure session handling.',
        tech: ['Node.js', 'Express', 'JWT', 'bcrypt'],
        icon: '🔐',
        github: 'https://github.com/Iamromson119/Auth-User-System',
        demo: '#'
    },
    {
        number: '03',
        title: 'Hiring Dashboard',
        description: 'Recruitment management dashboard for tracking job applications, candidate profiles, interview scheduling, and hiring pipeline analytics.',
        tech: ['React', 'Node.js', 'MongoDB', 'Dashboard'],
        icon: '💼',
        github: 'https://github.com/Iamromson119/hiring-dashboard',
        demo: '#'
    },
    {
        number: '04',
        title: 'Task Manager',
        description: 'Productive task management application with features for creating, organizing, and tracking tasks. Includes priority levels, due dates, and status updates.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        icon: '✅',
        github: 'https://github.com/Iamromson119/task-manager',
        demo: '#'
    },
    {
        number: '05',
        title: 'Airline Data Scraping',
        description: 'Web scraping tool for extracting airline flight data, prices, and schedules. Automated data collection with parsing and storage capabilities.',
        tech: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
        icon: '✈️',
        github: 'https://github.com/Iamromson119/Airline-data-scraping',
        demo: '#'
    }
];

function Portfolio() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header>
                <div className="header-content">
                    <div className="logo">Romson</div>
                    <nav>
                        <ul>
                            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
                            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
                            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="home" className="hero">
                <div className="hero-grid">
                    <div className="hero-text">
                        <h1>
                            Full Stack
                            <span className="accent-text">Developer.</span>
                        </h1>
                        <p className="hero-subtitle">
                            I build elegant web applications with clean code and thoughtful design. 
                            Passionate about creating seamless digital experiences that solve real problems.
                        </p>
                        <div className="hero-cta">
                            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                                View My Work
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                                Let's Talk
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="visual-card card-1">💻</div>
                        <div className="visual-card card-2">
                            <h3>Clean Code</h3>
                            <p>Building with best practices</p>
                        </div>
                        <div className="visual-card card-3"></div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="section-header">
                    <div className="section-label">About Me</div>
                    <h2 className="section-title">Crafting Digital Experiences</h2>
                    <p className="section-subtitle">
                        From concept to deployment, I bring ideas to life with modern technologies
                    </p>
                </div>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I'm Romson, a full stack developer with a passion for building products that make a difference. 
                            My journey in web development has taught me that the best solutions come from understanding 
                            both the technical challenges and the human needs behind every project.
                        </p>
                        <p>
                            I specialize in creating responsive, user-friendly applications using React, Node.js, and Python. 
                            Whether it's building e-commerce platforms, authentication systems, or data scraping tools, 
                            I love tackling complex problems with elegant solutions.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new technologies, contributing to open source, 
                            and constantly learning to stay at the forefront of web development.
                        </p>
                    </div>
                    <div className="stats">
                        <div className="stat-box">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Projects Built</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">GitHub Commits</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Dedication</div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="section-header">
                    <div className="section-label">My Expertise</div>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Tools and frameworks I use to build modern web applications
                    </p>
                </div>
                <div className="skills-container">
                    {Object.entries(skills).map(([category, techs]) => (
                        <div key={category} className="skill-box">
                            <h3>{category}</h3>
                            <div className="skill-items">
                                {techs.map(tech => (
                                    <span key={tech} className="skill-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects">
                <div className="section-header">
                    <div className="section-label">Portfolio</div>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        A showcase of my recent work demonstrating full stack capabilities
                    </p>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.number} className="project-card">
                            <div className="project-visual">
                                {project.icon}
                            </div>
                            <div className="project-content">
                                <div className="project-number">PROJECT {project.number}</div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                                        View on GitHub
                                    </a>
                                    {project.demo !== "#" && (
                                        <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact">
                <div className="contact-box">
                    <div className="section-label">Get In Touch</div>
                    <h2 className="contact-title">Let's Work Together</h2>
                    <p className="contact-text">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                        Feel free to reach out!
                    </p>
                    <div className="contact-methods">
                        <a href="mailto:romson.dev@gmail.com" className="contact-item">
                            📧 romsonnathaniel123@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/romson-nathaniel-340631338/" className="contact-item" target="_blank" rel="noopener noreferrer">
                            💼 LinkedIn Profile
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/Iamromson119" className="social-link" target="_blank" rel="noopener noreferrer">GH</a>
                        <a href="https://twitter.com/romson" className="social-link" target="_blank" rel="noopener noreferrer">TW</a>
                        <a href="https://www.linkedin.com/in/romson-nathaniel-340631338/" className="social-link" target="_blank" rel="noopener noreferrer">IN</a>
                    </div>
                </div>
            </section>

            <footer>
                <p>© 2026 Romson. Designed & Built with React</p>
            </footer>
        </>
    );
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));
