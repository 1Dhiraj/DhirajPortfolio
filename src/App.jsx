import { useState, useEffect } from 'react';
import { Moon, Sun, ArrowRight, Code, MessageSquare, UserCircle, ExternalLink, Award } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const projects = [
    {
      title: 'Real-Time Messaging Web App',
      desc: 'A real-time messaging application allowing users to send and receive text and voice messages seamlessly.',
      tech: ['React', 'Context API', 'WebSockets'],
      link: 'https://messaging-web-xi.vercel.app/',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
      title: 'AI-Powered Cloud-Based IDE',
      desc: 'An intelligent cloud-based code editor with AI-assisted generation, multi-file project support, and real-time live preview.',
      tech: ['React', 'FastAPI', 'Docker'],
      link: 'https://cursor-clone-k6ot.vercel.app/',
      gradient: 'linear-gradient(135deg, #434343 0%, #000000 100%)'
    },
    {
      title: 'Full-Stack E-Commerce Platform',
      desc: 'A robust, end-to-end MERN stack e-commerce application featuring product management, secure checkouts, and a scalable backend.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://ecommerce-project-htpl.vercel.app/',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  ];

  const pageCards = [
    { cardTitle: 'Cybersecurity Essentials', issuer: 'Cisco', singlePageFile: '/certificates/cybersecurity-analyst-page-1.pdf', gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' },
    { cardTitle: 'Power BI Data Analyst Associate', issuer: 'Microsoft', singlePageFile: '/certificates/wipro-page-1.pdf', gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' },
    { cardTitle: 'Data Science for Beginners', issuer: 'BOARD INFINITY', singlePageFile: '/certificates/wipro-page-2.pdf', gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' },
    { cardTitle: 'Automation Implementation Fundamentals', issuer: 'UiPath', singlePageFile: '/certificates/wipro-page-3.pdf', gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' },
    { cardTitle: 'Cloud Computing Elite', issuer: 'NPTEL', singlePageFile: '/certificates/dhiraj-general-page-1.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'Full-Stack Web Development Bootcamp', issuer: 'Udemy', singlePageFile: '/certificates/dhiraj-general-page-2.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'Generative AI Consortium Internship', issuer: 'Generative AI Consortium', singlePageFile: '/certificates/dhiraj-general-page-3.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'Machine Learning A-Z: AI, Python & R', issuer: 'Udemy', singlePageFile: '/certificates/dhiraj-general-page-4.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'PyTorch for Deep Learning Bootcamp', issuer: 'Udemy', singlePageFile: '/certificates/dhiraj-general-page-5.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'Cybersecurity for Beginners', issuer: 'TATA STRIVE', singlePageFile: '/certificates/dhiraj-general-page-6.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'AI and Machine Learning Internship', issuer: 'RECCSAR Pvt Ltd', singlePageFile: '/certificates/dhiraj-general-page-7.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'BYTE BRIAN CHALLENGE', issuer: 'National Level Technical Symposium', singlePageFile: '/certificates/dhiraj-general-page-8.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'Hack The Horizon - 24 Hour Hackathon', issuer: 'IEEE', singlePageFile: '/certificates/dhiraj-general-page-9.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'TECH PICTIONARY Second Place', issuer: 'SPECTRA GENIX 24', singlePageFile: '/certificates/dhiraj-general-page-10.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'OOPs in Java', issuer: 'Great Learning', singlePageFile: '/certificates/dhiraj-general-page-11.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
    { cardTitle: 'Data Structures in C', issuer: 'Great Learning', singlePageFile: '/certificates/dhiraj-general-page-12.pdf', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' }
  ];

  return (
    <div className="app-container">
      {/* Background elements */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <header className="header container">
        <div className="header-content glass-panel">
          <a href="#" className="logo">Dhiraj.</a>
          
          <nav className="nav">
            <ul className="nav-links">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#certifications">Certificates</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="home" className="hero container">
          <div className="hero-content">
            <span className="tag">Full-Stack Developer</span>
            <h1>Crafting digital experiences with code and design.</h1>
            <p className="hero-subtitle">
              Hi, I'm Dhiraj. I build modern, scalable, and aesthetically pleasing web applications. 
              Welcome to my digital garden where I share my projects and thoughts on technology.
            </p>
            <div className="hero-actions">
              <a href="#portfolio" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#blog" className="btn btn-outline">
                Read the Blog
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section container">
          <h2 className="section-title">Selected Works</h2>
          <div className="grid grid-3">
            {projects.map((project, idx) => (
              <article key={idx} className="card glass-panel">
                <div className="card-img" style={{ background: project.gradient }}></div>
                <div className="card-content">
                  <div className="tech-stack">
                    {project.tech.map(t => <span key={t} className="tech-bubble">{t}</span>)}
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>
                  <div className="card-footer">
                    <a href={project.link} className="btn-outline btn" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section container">
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-3">
            {pageCards.map((cert, idx) => (
              <article key={idx} className="card glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden', background: '#fff', borderBottom: '1px solid var(--glass-border)' }}>
                  <iframe 
                    src={`${cert.singlePageFile}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`} 
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title={cert.cardTitle}
                  ></iframe>
                  {/* Invisible overlay to prevent iframe from trapping mouse clicks/scrolls */}
                  <div 
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, cursor: 'pointer' }} 
                    onClick={() => window.open(cert.singlePageFile, '_blank')}
                    title="Click to view full certificate"
                  ></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title" style={{ margin: 0, fontSize: '1.25rem', marginBottom: '8px' }}>{cert.cardTitle}</h3>
                  <p className="card-desc" style={{ margin: 0, fontSize: '0.9rem', flex: 1 }}>{cert.issuer}</p>
                  
                  <div className="card-footer" style={{ marginTop: '24px' }}>
                    <a href={cert.singlePageFile} target="_blank" rel="noopener noreferrer" className="btn-outline btn" style={{ padding: '8px 16px', fontSize: '0.85rem', width: '100%' }}>
                      Open <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section container">
          <h2 className="section-title">My Blog</h2>
          <article className="glass-panel" style={{ padding: '48px', borderRadius: '24px' }}>
            <span className="tag" style={{ marginBottom: '24px' }}>Development / AI</span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: 1.2 }}>Building My AI-Powered Cursor Clone</h1>
            <div className="card-meta" style={{ marginBottom: '48px', fontSize: '0.95rem' }}>
              <span>May 14, 2026</span> &middot; <span>6 min read</span>
            </div>
            
            <div className="blog-content" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p>I’ve always been interested in developer tools, especially AI-powered coding assistants like Cursor AI. While using modern AI coding tools, I started thinking about how these systems actually work behind the scenes — live code editing, AI-assisted generation, multi-file handling, and real-time previews.</p>
              
              <p>That curiosity eventually turned into a project: <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>cursorClone GitHub Repository</a>. This project is my attempt to build an AI-powered cloud-based code editor inspired by modern AI development environments.</p>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '16px' }}>The Idea</h3>
              <p>Most traditional code editors focus only on writing code, while modern AI tools are starting to become intelligent development environments that can understand project structure, generate code, assist with debugging, and improve developer productivity.</p>
              <p>Recent AI coding platforms are moving toward multi-agent workflows, semantic understanding of repositories, and real-time AI collaboration. I wanted to explore these ideas by creating my own version of an AI-assisted development platform.</p>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '16px' }}>What the Project Does</h3>
              <p>The platform is designed to combine cloud-based coding, AI-assisted development, live editing, modern UI/UX, and scalable architecture. The goal is to create a developer environment where users can write code directly in the browser, manage project files, generate code using AI, preview applications in real time, and improve productivity with intelligent assistance.</p>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '16px' }}>Features</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong>AI-Assisted Code Generation:</strong> The editor integrates AI APIs to help generate and modify code based on prompts.</li>
                <li><strong>Multi-File Project Structure:</strong> Instead of generating only single-page applications, the system supports complete project structures with interconnected files and components.</li>
                <li><strong>Live Preview:</strong> Real-time previewing allows developers to instantly see the output of generated code.</li>
                <li><strong>Modern Developer UI:</strong> Designed with clean layouts, responsive design, dark theme support, and developer-focused workflows.</li>
              </ul>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '16px' }}>Tech Stack</h3>
              <p>The project uses modern full-stack technologies including <strong>React, FastAPI, Docker, and Tailwind CSS</strong>. These technologies helped create a scalable architecture for handling frontend rendering, backend AI communication, and isolated execution environments.</p>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '16px' }}>Challenges I Faced</h3>
              <p>Building an AI-powered editor is much more complex than building a normal web application. Some major challenges included:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong>Managing Multiple Files:</strong> Handling imports, dependencies, and file relationships required careful project structuring.</li>
                <li><strong>Live Synchronization:</strong> Keeping the editor, preview window, and generated code synchronized in real time was one of the most difficult parts.</li>
                <li><strong>AI Output Reliability:</strong> AI-generated code is not always perfect, making error handling and regeneration workflows extremely important.</li>
                <li><strong>Containerized Execution:</strong> Running generated applications safely required isolated execution environments using containers.</li>
              </ul>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '16px' }}>What I Learned & Future Improvements</h3>
              <p>This project taught me a lot about full-stack architecture, AI-assisted development workflows, frontend-backend communication, and scalable project organization. More importantly, it helped me understand how modern AI coding platforms are evolving from simple autocomplete systems into intelligent development environments.</p>
              <p>In future versions, I plan to add real-time collaboration, an AI debugging assistant, project deployment support, autonomous agent workflows, and integrated terminal support.</p>

              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginTop: '16px' }}>Final Thoughts</h3>
              <p>Building this project gave me a deeper understanding of how AI can transform software development workflows. AI coding assistants are rapidly evolving beyond autocomplete into systems that can reason about entire codebases, assist with architecture decisions, and automate large parts of development. This project is one step toward exploring that future.</p>
            </div>
          </article>
        </section>
      </main>

      {/* About Section */}
      <section id="about" className="section container" style={{ paddingBottom: '0' }}>
        <div className="glass-panel" style={{ padding: '48px', borderRadius: '24px' }}>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>About Me</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            <p>
              Hi, I’m Dhiraj J A L, a passionate developer focused on building modern web applications and AI-powered tools. I enjoy creating scalable software, experimenting with new technologies, and turning ideas into real products. My interests include full-stack development, artificial intelligence, cloud technologies, and interactive user experiences.
            </p>
            <p>
              I love working on projects that combine creativity with problem-solving, especially in areas like AI-assisted development, real-time communication systems, and modern web platforms. My goal is to build applications that are not only functional but also intuitive, fast, and visually engaging.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-content glass-panel" style={{ padding: '32px 48px', borderRadius: '24px' }}>
          <div>
            <h2 className="logo" style={{ fontSize: '1.25rem' }}>Dhiraj.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '8px' }}>
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="social-links">
            <a href="#" aria-label="GitHub"><Code size={20} /></a>
            <a href="#" aria-label="Twitter"><MessageSquare size={20} /></a>
            <a href="#" aria-label="LinkedIn"><UserCircle size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
