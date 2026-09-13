import React from 'react';
import linkedinIcon from '../icons/linkedin.png';
import githubIcon from '../icons/github.png';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
        {/* Simple Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/20 mb-3 uppercase tracking-wider">
          Let's Connect
        </span>

        {/* Simple Title & Subtitle */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get In Touch</h2>
        <p className="mt-3 text-slate-300 max-w-xl mx-auto text-base leading-relaxed">
          I'm currently looking for full-stack developer opportunities. Whether you have a question, a project, or just want to say hi, feel free to connect!
        </p>

        {/* Simple Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/bharathkumarjn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-amber-500/20"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href="https://github.com/bharathdhana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5 brightness-0 invert" />
            <span>Visit GitHub Profile</span>
          </a>
        </div>

        {/* Location & Status Line */}
        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to opportunities
          </span>
          <span>•</span>
          <span>Tamil Nadu, India</span>
        </div>

        {/* Simple Footer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-xs text-slate-500">
          © {new Date().getFullYear()} Bharath Kumar. Built with React & Tailwind CSS.
        </div>
      </div>
    </section>
  );
};

export default Contact;
