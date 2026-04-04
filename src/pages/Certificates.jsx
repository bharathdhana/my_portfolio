import React, { useEffect, useState } from 'react';

const certificates = [
  { title: 'C++', link: '/certificates/C++.jpg' },
  { title: 'Canva Bootcamp', link: '/certificates/Canva Bootcamp.jpg' },
  { title: 'ChatGpt Bootcamp', link: '/certificates/ChatGpt Bootcamp.jpg' },
  { title: 'Cybernaut Internship', link: '/certificates/Cybernaut Internship.jpg' },
  { title: 'Java', link: '/certificates/Java.jpg' },
  { title: 'Python', link: '/certificates/Python.jpg' },
  { title: 'Digital Marketing', link: '/certificates/Digital Marketing.jpg' },
  { title: 'Dotnet', link: '/certificates/Dotnet.jpg' },
  { title: 'Figma Udemy', link: '/certificates/Figma Udemy.jpg' },
  { title: 'LLM', link: '/certificates/LLM.jpg' },
  { title: 'Generative AI', link: '/certificates/Gen AI.jpg' },
  { title: 'Responsible AI', link: '/certificates/Responsible AI.jpg' },
  { title: 'Introduction JS', link: '/certificates/Introduction JS.jpg' },
  { title: 'Introduction to R', link: '/certificates/Introduction to R.jpg' },
  { title: 'MEAN Basics', link: '/certificates/MEAN Basics.jpg' },
  { title: 'NPTEL', link: '/certificates/NPTEL.jpg' },
  { title: 'UI UX', link: '/certificates/UI UX.jpg' },
  { title: 'Version Control', link: '/certificates/Version Control.jpg' },
  { title: 'Front End Dev', link: '/certificates/Front End Dev.jpg' },
  { title: 'JS Meta', link: '/certificates/JS Meta.jpg' },
];

const CertificatesSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx} className="rounded-xl border border-slate-200 bg-white p-3 animate-pulse">
        <div className="h-52 bg-slate-200 rounded-md" />
        <div className="h-4 w-2/3 bg-slate-200 rounded mt-4 mx-auto" />
      </div>
    ))}
  </div>
);

const Certificates = () => {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleShow = (img) => {
    setCurrentImg(img);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Certifications</h2>
          <p className="mt-3 text-slate-600">Click any certificate card to view it in full size.</p>
        </div>

        {isLoading ? (
          <CertificatesSkeleton />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden card-hover cursor-pointer"
                onClick={() => handleShow(cert.link)}
              >
                <img
                  src={cert.link}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-52 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-slate-800">{cert.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {show && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={currentImg} alt="Certificate" className="w-full" />
            <div className="p-3 text-right">
              <button
                onClick={handleClose}
                className="text-sm text-slate-500 hover:text-slate-800 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
