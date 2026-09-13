import React, { useState } from 'react';
import javaIcon from '../icons/java.png';
import jsIcon from '../icons/js.png';
import htmlIcon from '../icons/html.png';
import cssIcon from '../icons/css-3.png';
import reactIcon from '../icons/atom.png';
import mysqlIcon from '../icons/mysql.png';
import pythonIcon from '../icons/python.png';
import springIcon from '../icons/spring.png';
import postgresIcon from '../icons/postgresql.svg';
import postmanIcon from '../icons/postman.svg';
import angularIcon from '../icons/angular.svg';

const skills = [
  { label: 'Java', category: 'Backend', icon: javaIcon, bg: 'bg-orange-50 border-orange-200 text-orange-800' },
  { label: 'Spring', category: 'Backend', icon: springIcon, bg: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
  { label: 'Python', category: 'Backend / Data', icon: pythonIcon, bg: 'bg-blue-50 border-blue-200 text-blue-800' },
  { label: 'React', category: 'Frontend', icon: reactIcon, bg: 'bg-cyan-50 border-cyan-200 text-cyan-800' },
  { label: 'Angular', category: 'Frontend', icon: angularIcon, bg: 'bg-rose-50 border-rose-200 text-rose-800' },
  { label: 'JavaScript', category: 'Frontend', icon: jsIcon, bg: 'bg-amber-50 border-amber-200 text-amber-800' },
  { label: 'HTML', category: 'Frontend', icon: htmlIcon, bg: 'bg-red-50 border-red-200 text-red-800' },
  { label: 'CSS', category: 'Frontend', icon: cssIcon, bg: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
  { label: 'PostgreSQL', category: 'Database', icon: postgresIcon, bg: 'bg-sky-50 border-sky-300 text-sky-900' },
  { label: 'MySQL', category: 'Database', icon: mysqlIcon, bg: 'bg-sky-50 border-sky-200 text-sky-800' },
  { label: 'Postman', category: 'API & Testing', icon: postmanIcon, bg: 'bg-orange-50 border-orange-200 text-orange-900' },
];

const roadmapItems = [
  {
    id: 1,
    category: 'education',
    period: '2022 - 2026',
    title: 'B.E. Computer Science & Engineering',
    subtitle: 'Gnanamani College of Technology',
    score: 'CGPA: 8.23 / 10',
    scoreColor: 'bg-purple-100 text-purple-800 border-purple-300',
    description: 'Undergraduate studies focusing on full-stack software development, machine learning, databases, and modern web frameworks.',
    tags: ['Java', 'Spring', 'React', 'Full-Stack Web', 'Machine Learning'],
    iconType: 'degree',
    nodeColor: 'from-purple-500 to-pink-600',
  },
  {
    id: 2,
    category: 'internship',
    period: 'Jul 2025 - Aug 2025',
    title: 'Web Development Intern',
    subtitle: 'Emglitz Technologies, Salem (Offline)',
    score: 'Full Web Stack',
    scoreColor: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    description: 'Engineered responsive web applications with pure HTML, CSS, and JavaScript with strong focus on UI/UX and cross-browser compatibility.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI Optimization'],
    iconType: 'internship',
    nodeColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 3,
    category: 'internship',
    period: 'Jan 2025 - Apr 2025',
    title: 'Python Developer Intern',
    subtitle: 'Cybernaut Edutech LLP, Karur (Online)',
    score: 'Python & Data Automation',
    scoreColor: 'bg-amber-100 text-amber-800 border-amber-300',
    description: 'Developed automated web scrapers, image gallery utility applications, and beginner machine learning workflows using BeautifulSoup and Pandas.',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Pandas', 'ML Basics'],
    iconType: 'internship',
    nodeColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 4,
    category: 'experience',
    period: 'Nov 2020 - Nov 2022',
    title: 'Trainee Operator',
    subtitle: 'Breaks India Private Limited, Chengalpet',
    score: '2 Years Experience',
    scoreColor: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Worked in raw material stores and inventory management, maintaining high operational accuracy and logistics organization.',
    tags: ['Inventory Management', 'Stock Auditing', 'Process Maintenance'],
    iconType: 'work',
    nodeColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 5,
    category: 'education',
    period: '2017 - 2020',
    title: 'Diploma in Computer Engineering',
    subtitle: 'Muthayammal Polytechnic College',
    score: '99% Score',
    scoreColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    description: 'Built foundational computing concepts, database structures, algorithms, and practical programming fundamentals.',
    tags: ['Computer Fundamentals', 'Programming', 'Hardware & Networking'],
    iconType: 'academic',
    nodeColor: 'from-blue-500 to-indigo-600',
  },
];

const About = () => {
  const [filter, setFilter] = useState('all');

  const filteredRoadmap = filter === 'all' 
    ? roadmapItems 
    : roadmapItems.filter(item => item.category === filter);

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-amber-700 bg-amber-100 border border-amber-300/60 rounded-full uppercase tracking-wider mb-3">
            Career Timeline & Roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Journey Roadmap
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base">
            From academic foundations and practical industry operations to full-stack engineering internships and web development.
          </p>
        </div>

        {/* Roadmap Filter Tabs */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {[
            { key: 'all', label: 'All Milestones' },
            { key: 'education', label: 'Education' },
            { key: 'internship', label: 'Internships' },
            { key: 'experience', label: 'Work Experience' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                filter === tab.key
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400 hover:text-amber-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Roadmap Timeline Path */}
        <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-8 md:ml-32 space-y-12 mb-20">
          {filteredRoadmap.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group animate-fade-up">
              {/* Node Icon on Timeline */}
              <div className={`absolute -left-[1.35rem] top-1.5 w-10 h-10 rounded-full bg-gradient-to-r ${item.nodeColor} text-white flex items-center justify-center shadow-lg border-4 border-slate-50 transition-transform duration-300 group-hover:scale-110`}>
                <span className="text-sm font-extrabold">{index + 1}</span>
              </div>

              {/* Period Badge (Visible on desktop on the left) */}
              <div className="md:absolute md:-left-36 md:top-2 mb-2 md:mb-0 text-xs font-bold text-slate-500 uppercase tracking-wide md:text-right md:w-28">
                {item.period}
              </div>

              {/* Roadmap Milestone Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 mt-0.5">{item.subtitle}</p>
                  </div>
                  <span className={`inline-block px-3 py-1 text-xs font-extrabold rounded-full border ${item.scoreColor}`}>
                    {item.score}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed my-4">
                  {item.description}
                </p>

                {/* Skill & Highlight Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-amber-800 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Roadmap Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-sm animate-fade-up">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-bold text-blue-700 bg-blue-100 border border-blue-300/60 rounded-full uppercase tracking-wider mb-2">
              Technology Stack
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">Technical Skills & Tooling</h3>
            <p className="text-sm text-slate-500 mt-1">Core programming languages, frameworks, and database technologies.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className={`p-4 rounded-2xl border ${skill.bg} flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-md transition-all duration-200`}
              >
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.label} className="w-10 h-10 object-contain drop-shadow-sm" />
                ) : (
                  skill.customIcon
                )}
                <span className="font-bold text-sm text-slate-900">{skill.label}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-white/80 px-2 py-0.5 rounded-full border border-slate-200">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;