import React, { useEffect, useState } from 'react';
import javaIcon from '../icons/java.png';
import jsIcon from '../icons/js.png';
import htmlIcon from '../icons/html.png';
import cssIcon from '../icons/css-3.png';
import reactIcon from '../icons/atom.png';
import mysqlIcon from '../icons/mysql.png';
import pythonIcon from '../icons/python.png';
import springIcon from '../icons/spring.png';

const skills = [
  { label: 'Java', icon: javaIcon },
  { label: 'Spring', icon: springIcon },
  { label: 'Python', icon: pythonIcon },
  { label: 'HTML', icon: htmlIcon },
  { label: 'CSS', icon: cssIcon },
  { label: 'JavaScript', icon: jsIcon },
  { label: 'React', icon: reactIcon },
  { label: 'MySQL', icon: mysqlIcon },
];

const pill = 'inline-flex items-center justify-center p-3 m-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors';

const Card = ({ borderColor, children }) => (
  <div
    className="mb-6 rounded-xl bg-white p-6 border border-slate-200"
    style={{ borderLeft: `3px solid ${borderColor}` }}
  >
    {children}
  </div>
);

const CardTitle = ({ color, children }) => (
  <h3 className="text-xl font-bold mb-3" style={{ color }}>
    {children}
  </h3>
);

const AboutSkeleton = () => (
  <div className="space-y-6">
    {[1, 2, 3].map((item) => (
      <div key={item} className="rounded-xl border border-slate-200 bg-white p-6 animate-pulse">
        <div className="h-5 w-40 bg-slate-200 rounded mb-4" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-slate-200 rounded" />
          <div className="h-3 w-5/6 bg-slate-200 rounded" />
          <div className="h-3 w-4/6 bg-slate-200 rounded" />
        </div>
      </div>
    ))}
  </div>
);

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className="py-16"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">About</h2>
          <p className="mt-3 text-slate-600">
            Skills, internship experience, and academic background.
          </p>
        </div>

        {isLoading ? (
          <AboutSkeleton />
        ) : (
          <>

            <Card borderColor="#2563eb">
              <CardTitle color="#2563eb">Skills</CardTitle>
              <div className="flex flex-wrap justify-center">
                {skills.map(({ label, icon }) => (
                  <span key={label} className={pill} title={label}>
                    {icon && <img src={icon} alt={label} className="w-8 h-8 object-contain" />}
                  </span>
                ))}
              </div>
            </Card>

            <Card borderColor="#16a34a">
              <CardTitle color="#16a34a">Experience</CardTitle>
              <h5 className="font-semibold text-lg mt-2 mb-1 text-slate-900">Trainee Operator</h5>
              <p className="text-slate-600 leading-relaxed">
                Breaks India Private Limited, Chengalpet<br />
                Worked in raw material stores and stock management, ensuring inventory accuracy
                and warehouse maintenance.<br />
                Duration: Nov 2020 - Nov 2022
              </p>
            </Card>

            <Card borderColor="#ca8a04">
              <CardTitle color="#ca8a04">Internships</CardTitle>

              <h5 className="font-semibold text-lg mt-2 mb-1 text-slate-900">Web Development Intern</h5>
              <p className="text-slate-600 leading-relaxed mb-4">
                Emglitz Technologies, Salem | Mode: Offline<br />
                Built responsive websites using HTML, CSS, and JavaScript with a focus on
                usability and cross-browser compatibility.<br />
                Duration: Jul 2025 - Aug 2025
              </p>

              <h5 className="font-semibold text-lg mb-1 text-slate-900">Python Developer Intern</h5>
              <p className="text-slate-600 leading-relaxed">
                Cybernaut Edutech LLP, Karur | Mode: Online<br />
                Built Python-based projects including web scrapers, image gallery tools, and
                beginner ML workflows using BeautifulSoup and Pandas.<br />
                Duration: Jan 2025 - Apr 2025
              </p>
            </Card>

            <Card borderColor="#9333ea">
              <CardTitle color="#9333ea">Education</CardTitle>

              <h5 className="font-semibold text-lg mt-2 mb-1 text-slate-900">Engineering</h5>
              <p className="text-slate-600 leading-relaxed mb-4">
                UG in Computer Science and Engineering,<br />
                Gnanamani College of Technology, 2026<br />
                CGPA: 8.23/10
              </p>

              <h5 className="font-semibold text-lg mb-1 text-slate-900">Diploma</h5>
              <p className="text-slate-600 leading-relaxed">
                Diploma in Computer Engineering,<br />
                Muthayammal Polytechnic College, 2020<br />
                Percentage: 99%
              </p>
            </Card>
          </>
        )}
      </div>
    </section>
  );
};

export default About;