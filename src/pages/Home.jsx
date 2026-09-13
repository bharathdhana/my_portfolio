import React from 'react';
import linkedinIcon from '../icons/linkedin.png';
import githubIcon from '../icons/github.png';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bharathkumarjn/',
    icon: <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />,
    color: 'hover:bg-blue-50',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/bharathdhana',
    icon: <img src={githubIcon} alt="GitHub" className="w-6 h-6" />,
    color: 'hover:bg-gray-100',
  },
];

const Home = () => {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-surface min-h-[calc(100vh-4rem)] flex items-center border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="flex flex-col items-center gap-10 text-center animate-fade-up">
          <span className="inline-flex items-center rounded-full border border-amber-300/50 bg-amber-100/60 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-amber-900 uppercase">
            Open To Full-Stack Opportunities
          </span>

          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
              Hi, I'm <br /><span className="text-slate-600">Bharath Kumar</span>
              <br />
              <span className="text-amber-600">Full Stack Developer.</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              I've completed my undergraduate studies and am eager to apply my skills and knowledge
              in real projects. I'm looking for opportunities that help me grow, learn, and gain
              wisdom while making a meaningful impact.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 shadow-md hover:shadow-lg"
            >
              Explore Projects
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-700 shadow-sm"
            >
              About Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-3 rounded-full border border-slate-200 bg-white/80 text-gray-600 transition-all duration-200 shadow-sm hover:-translate-y-1 hover:shadow-lg ${color}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
