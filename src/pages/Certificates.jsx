import React, { useEffect, useState } from 'react';

const certificatesData = [
  { id: 20, title: 'Generative AI', year: '2025', category: 'ai', tag: 'AI & Machine Learning', link: '/certificates/Gen AI.jpg', color: 'from-amber-500 to-orange-600' },
  { id: 19, title: 'Large Language Models (LLM)', year: '2025', category: 'ai', tag: 'AI & Machine Learning', link: '/certificates/LLM.jpg', color: 'from-purple-500 to-indigo-600' },
  { id: 18, title: 'Responsible AI', year: '2025', category: 'ai', tag: 'AI & Machine Learning', link: '/certificates/Responsible AI.jpg', color: 'from-blue-500 to-cyan-600' },
  { id: 17, title: 'ChatGPT Bootcamp', year: '2025', category: 'ai', tag: 'AI Tools', link: '/certificates/ChatGpt Bootcamp.jpg', color: 'from-emerald-500 to-teal-600' },
  { id: 16, title: 'Meta Front End Developer', year: '2025', category: 'web', tag: 'Web Development', link: '/certificates/Front End Dev.jpg', color: 'from-sky-500 to-blue-600' },
  { id: 15, title: 'Cybernaut Internship Certificate', year: '2025', category: 'internship', tag: 'Internship', link: '/certificates/Cybernaut Internship.jpg', color: 'from-emerald-600 to-teal-700' },
  { id: 14, title: 'JavaScript Meta Certificate', year: '2024', category: 'web', tag: 'Web Development', link: '/certificates/JS Meta.jpg', color: 'from-yellow-500 to-amber-600' },
  { id: 13, title: 'Version Control (Git)', year: '2024', category: 'dev', tag: 'Software Engineering', link: '/certificates/Version Control.jpg', color: 'from-slate-700 to-slate-900' },
  { id: 12, title: 'Python Development', year: '2024', category: 'prog', tag: 'Programming', link: '/certificates/Python.jpg', color: 'from-blue-600 to-sky-500' },
  { id: 11, title: 'UI / UX Design', year: '2024', category: 'design', tag: 'Design & UX', link: '/certificates/UI UX.jpg', color: 'from-pink-500 to-rose-600' },
  { id: 10, title: 'Figma Design (Udemy)', year: '2024', category: 'design', tag: 'Design & UX', link: '/certificates/Figma Udemy.jpg', color: 'from-purple-500 to-pink-500' },
  { id: 9, title: 'Introduction to JavaScript', year: '2023', category: 'web', tag: 'Web Development', link: '/certificates/Introduction JS.jpg', color: 'from-amber-400 to-yellow-500' },
  { id: 8, title: 'MEAN Stack Basics', year: '2023', category: 'web', tag: 'Web Development', link: '/certificates/MEAN Basics.jpg', color: 'from-green-500 to-emerald-600' },
  { id: 7, title: 'Java Programming', year: '2023', category: 'prog', tag: 'Programming', link: '/certificates/Java.jpg', color: 'from-red-500 to-orange-600' },
  { id: 6, title: 'Dotnet Framework', year: '2023', category: 'prog', tag: 'Programming', link: '/certificates/Dotnet.jpg', color: 'from-violet-600 to-purple-700' },
  { id: 5, title: 'Introduction to R', year: '2023', category: 'prog', tag: 'Data & Analytics', link: '/certificates/Introduction to R.jpg', color: 'from-teal-500 to-cyan-600' },
  { id: 4, title: 'Canva Design Bootcamp', year: '2022', category: 'design', tag: 'Design Tools', link: '/certificates/Canva Bootcamp.jpg', color: 'from-cyan-400 to-blue-500' },
  { id: 3, title: 'C++ Programming', year: '2021', category: 'prog', tag: 'Programming', link: '/certificates/C++.jpg', color: 'from-indigo-600 to-purple-600' },
  { id: 2, title: 'Digital Marketing', year: '2021', category: 'other', tag: 'Marketing & Strategy', link: '/certificates/Digital Marketing.jpg', color: 'from-fuchsia-500 to-pink-600' },
  { id: 1, title: 'NPTEL Certification', year: '2020', category: 'academic', tag: 'Academic Excellence', link: '/certificates/NPTEL.jpg', color: 'from-amber-600 to-yellow-600' },
];

const CertificatesSkeleton = () => (
  <div className="space-y-8 max-w-4xl mx-auto">
    {[1, 2, 3, 4].map((idx) => (
      <div key={idx} className="flex gap-4 items-center animate-pulse">
        <div className="w-10 h-10 rounded-full bg-slate-200 shrink-0" />
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-4 space-y-3">
          <div className="h-4 w-32 bg-slate-200 rounded" />
          <div className="h-6 w-3/4 bg-slate-200 rounded" />
          <div className="h-32 bg-slate-200 rounded-xl" />
        </div>
      </div>
    ))}
  </div>
);

const Certificates = () => {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' = newest first, 'asc' = oldest first

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleShow = (img, title) => {
    setCurrentImg(img);
    setCurrentTitle(title);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  // Filter & Sort
  const filtered = filter === 'all'
    ? certificatesData
    : certificatesData.filter(c => c.category === filter);

  const displayedCerts = [...filtered].sort((a, b) => {
    return sortOrder === 'desc' ? b.id - a.id : a.id - b.id;
  });

  return (
    <section id="certificates" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-amber-700 bg-amber-100 border border-amber-300/60 rounded-full uppercase tracking-wider mb-3">
            Certifications Timeline
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Learning & Verified Credentials
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-base">
            A chronological timeline of verified credentials sorted in descending order (newest certifications first).
          </p>
        </div>

        {/* Timeline Controls: Filters & Sort Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 shadow-sm">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {[
              { key: 'all', label: 'All Certifications' },
              { key: 'ai', label: 'AI & GenAI' },
              { key: 'web', label: 'Web Dev' },
              { key: 'prog', label: 'Programming' },
              { key: 'design', label: 'UI/UX Design' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                  filter === tab.key
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-amber-400 hover:text-amber-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sort Order Button */}
          <button
            onClick={() => setSortOrder(prev => (prev === 'desc' ? 'asc' : 'desc'))}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs hover:bg-amber-100 transition-colors shadow-sm shrink-0"
          >
            <span>Sort: {sortOrder === 'desc' ? 'Newest First (Desc ⬇)' : 'Oldest First (Asc ⬆)'}</span>
          </button>
        </div>

        {isLoading ? (
          <CertificatesSkeleton />
        ) : (
          <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-8 md:ml-32 space-y-8">
            {displayedCerts.map((cert, idx) => (
              <div key={cert.id} className="relative pl-6 sm:pl-8 group animate-fade-up">
                {/* Node Bullet on Timeline */}
                <div className={`absolute -left-[1.1rem] top-4 w-8 h-8 rounded-full bg-gradient-to-r ${cert.color} text-white flex items-center justify-center shadow-md border-4 border-slate-50 transition-transform duration-300 group-hover:scale-125`}>
                  <span className="text-xs font-black">{idx + 1}</span>
                </div>

                {/* Year Label on Timeline Left */}
                <div className="md:absolute md:-left-32 md:top-5 mb-2 md:mb-0 text-xs font-bold text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-md border border-amber-300/50 inline-block md:text-right md:w-24 text-center">
                  {cert.year}
                </div>

                {/* Timeline Certificate Card */}
                <div 
                  onClick={() => handleShow(cert.link, cert.title)}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center gap-6"
                >
                  {/* Certificate Image Thumbnail */}
                  <div className="relative w-full sm:w-48 h-36 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 group-hover:opacity-95">
                    <img
                      src={cert.link}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs bg-slate-900/40 backdrop-blur-[2px]">
                      🔍 Click to Expand
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-left space-y-2 w-full">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        {cert.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">• Verified Credential</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed">
                      Completed training & verified assessment credential in {cert.title}.
                    </p>

                    <div className="pt-2 text-xs font-bold text-amber-600 flex items-center gap-1">
                      <span>View full certificate</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Preview Modal */}
      {show && (
        <div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-up"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <h4 className="font-bold text-sm sm:text-base text-amber-400">{currentTitle}</h4>
              <button
                onClick={handleClose}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-colors"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-2 max-h-[80vh] overflow-auto bg-slate-100 flex items-center justify-center">
              <img src={currentImg} alt={currentTitle} className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
