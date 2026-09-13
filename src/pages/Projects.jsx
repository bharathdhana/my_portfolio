import React, { useState } from 'react';
import githubIcon from '../icons/github.png';

const projectsData = [
  {
    title: 'ApexERP Enterprise Suite',
    category: 'web',
    tag: 'Enterprise Full-Stack ERP',
    featured: true,
    description: 'Comprehensive Enterprise Resource Planning system managing multi-warehouse inventory, automated sales invoicing, HR payroll, financial analytics, and real-time audit logging.',
    tech: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/bharathdhana/ApexERP.git',
    live: 'https://suite-apex-erp.netlify.app',
  },
  {
    title: 'Ticketo',
    category: 'web',
    tag: 'Backend REST API',
    featured: true,
    description: 'Backend ticket booking and event management service engineered with Java & Spring Boot, providing robust REST APIs for ticket reservations, availability tracking, and Postman API collection testing.',
    tech: ['Java', 'Spring Boot', 'REST API', 'Postman', 'PostgreSQL'],
    github: 'https://github.com/bharathdhana/Ticketo',
  },
  {
    title: 'Disease Prediction System',
    category: 'ml',
    tag: 'Deep Learning & Healthcare',
    featured: true,
    description: 'Predicting chronic diseases using deep learning models and health parameter analytics for early diagnosis.',
    tech: ['Python', 'Deep Learning', 'Pandas', 'Scikit-Learn'],
    github: 'https://github.com/bharathdhana/Disease-Prediction-System-fyp',
  },
  {
    title: 'Ink Of My Soul',
    category: 'web',
    tag: 'Full-Stack Platform',
    featured: true,
    description: 'A dedicated platform for poets to share poetry, express emotions, and connect with fellow creative writers.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    github: 'https://github.com/bharathdhana/ink-of-my-soul',
    live: 'https://bharathdhana.github.io/ink-of-my-soul/',
  },
  {
    title: 'Personal Poetry Webpage',
    category: 'web',
    tag: 'Interactive Web App',
    featured: true,
    description: 'A stylish personal website showcasing artistic poetry, literary craft, and human emotion.',
    tech: ['React', 'JavaScript', 'CSS3', 'Netlify'],
    github: 'https://github.com/bharathdhana/poetry-webpage',
    live: 'https://dhanavan-writes.netlify.app',
  },
  {
    title: 'Credit Card Approval using ML',
    category: 'ml',
    tag: 'Machine Learning',
    description: 'Machine learning model predicting credit card application approvals based on financial applicant profiles.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Jupyter'],
    github: 'https://github.com/bharathdhana/Credit_card_approval_ML',
  },
  {
    title: 'Fake News Detection using ML',
    category: 'ml',
    tag: 'NLP & ML',
    description: 'Natural Language Processing and classification model built to detect fake news articles accurately.',
    tech: ['Python', 'NLP', 'TF-IDF', 'Scikit-Learn'],
    github: 'https://github.com/bharathdhana/Fake_news_detection_using_ML',
  },
  {
    title: 'Amazon Scraper',
    category: 'scraper',
    tag: 'Web Scraping',
    description: 'Automated data scraper extracting product pricing, ratings, reviews, and specs from Amazon.',
    tech: ['Python', 'BeautifulSoup', 'Requests', 'Data Mining'],
    github: 'https://github.com/bharathdhana/Amazon_Scraper',
  },
  {
    title: 'Indeed Scraper',
    category: 'scraper',
    tag: 'Web Scraping',
    description: 'Job listing scraper retrieving job titles, companies, salary ranges, and locations from Indeed.',
    tech: ['Python', 'BeautifulSoup', 'Selenium', 'CSV Export'],
    github: 'https://github.com/bharathdhana/Indeed_Scraper',
  },
  {
    title: 'Ebay Scraper',
    category: 'scraper',
    tag: 'Web Scraping',
    description: 'Scraper tool extracting live product bidding info, prices, and seller ratings from Ebay listings.',
    tech: ['Python', 'BeautifulSoup', 'Requests'],
    github: 'https://github.com/bharathdhana/Ebay_Scraper',
  },
  {
    title: 'E-Commerce Price Comparison Tool',
    category: 'tools',
    tag: 'Product Utility',
    description: 'Comparative pricing utility evaluating product rates across multiple online retail platforms.',
    tech: ['Python', 'Web Scraping', 'Data Aggregation'],
    github: 'https://github.com/bharathdhana/Price_Comparison_Tool',
  },
  {
    title: 'Taxi Booking System',
    category: 'web',
    tag: 'Web Application',
    description: 'Online taxi booking application featuring ride scheduling, fare estimates, and user management.',
    tech: ['Java', 'Servlet/JSP', 'MySQL', 'HTML/CSS'],
    github: 'https://github.com/bharathdhana/Taxi-Booking-System',
  },
  {
    title: 'Employee Management System',
    category: 'web',
    tag: 'Enterprise Tool',
    description: 'Comprehensive dashboard system to manage employee records, attendance, and department operations.',
    tech: ['Java', 'Spring', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/bharathdhana/Employee-Management-System',
  },
  {
    title: 'Policy Insurance Tracker',
    category: 'web',
    tag: 'Web App',
    description: 'Tracking application to monitor insurance policies, premium due dates, and renewal alerts.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    github: 'https://github.com/bharathdhana/Policy-Insurance-Tracker',
  },
  {
    title: 'Library Application',
    category: 'tools',
    tag: 'Desktop App',
    description: 'Python-based library management system automating book checkouts, inventory, and user profiles.',
    tech: ['Python', 'SQLite', 'GUI'],
    github: 'https://github.com/bharathdhana/library-application',
  },
  {
    title: 'Image Viewer using Tkinter',
    category: 'tools',
    tag: 'Python GUI',
    description: 'Desktop graphic viewer built with Tkinter featuring image rotation, zoom, and gallery slides.',
    tech: ['Python', 'Tkinter', 'Pillow'],
    github: 'https://github.com/bharathdhana/Image_Viewer_using_Tkinter',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="hero-surface py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-amber-700 bg-amber-100 border border-amber-300/60 rounded-full uppercase tracking-wider mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base">
            Full-stack web applications, machine learning solutions, and automated data scrapers built to solve real-world problems.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white/80 p-4 rounded-2xl border border-slate-200/80 shadow-sm backdrop-blur-sm">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'web', label: 'Full-Stack & Web' },
              { key: 'ml', label: 'Machine Learning & AI' },
              { key: 'scraper', label: 'Web Scrapers' },
              { key: 'tools', label: 'Tools & Utilities' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                  activeCategory === tab.key
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-amber-400 hover:text-amber-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
            />
            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium text-sm">No projects match your search criteria.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-amber-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border bg-white/90 p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur card-hover relative ${
                  project.featured
                    ? 'border-amber-400/90 shadow-md ring-1 ring-amber-400/30'
                    : 'border-slate-200'
                }`}
              >
                {/* Header Tag */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {project.tag}
                    </span>
                    {project.live && (
                      <span className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Buttons */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                    >
                      <img src={githubIcon} alt="GitHub" className="w-3.5 h-3.5 brightness-0 invert" />
                      <span>Code Repo</span>
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                      >
                        <span>Live Demo</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GitHub Link Button */}
        <div className="mt-12 text-center animate-fade-up">
          <a
            href="https://github.com/bharathdhana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-slate-800 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-700 hover:shadow-lg shadow-sm"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
            <span>Explore All Repositories on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
