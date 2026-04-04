import React from 'react';
import githubIcon from '../icons/github.png';

const projects = [
  { title: 'Amazon Scraper', description: 'Web scraper for Amazon product data.', github: 'https://github.com/bharathdhana/Amazon_Scraper' },
  { title: 'Indeed Scraper', description: 'Web scraper for Indeed job data.', github: 'https://github.com/bharathdhana/Indeed_Scraper' },
  { title: 'Ebay Scraper', description: 'Web scraper for Ebay product data.', github: 'https://github.com/bharathdhana/Ebay_Scraper' },
  { title: 'Credit Card Approval using ML', description: 'Machine learning model to predict credit card approvals.', github: 'https://github.com/bharathdhana/Credit_card_approval_ML' },
  { title: 'E-Commerce Price Comparison Tool', description: 'A tool to compare prices across different e-commerce platforms.', github: 'https://github.com/bharathdhana/Price_Comparison_Tool' },
  { title: 'Fake News Detection using ML', description: 'A tool to detect fake news using machine learning techniques.', github: 'https://github.com/bharathdhana/Fake_news_detection_using_ML' },
  { title: 'Image Viewer using Tkinter', description: 'A simple image viewer application built with Tkinter.', github: 'https://github.com/bharathdhana/Image_Viewer_using_Tkinter' },
  { title: 'Policy Insurance Tracker', description: 'A web app to track insurance policies and renewals.', github: 'https://github.com/bharathdhana/Policy-Insurance-Tracker' },
  { title: 'Employee Management System', description: 'A comprehensive system to manage employee operations efficiently.', github: 'https://github.com/bharathdhana/Employee-Management-System' },
  { title: 'Ink Of My Soul', description: 'A platform to share your poetry and connect with fellow poets.', github: 'https://github.com/bharathdhana/ink-of-my-soul', live: 'https://bharathdhana.github.io/ink-of-my-soul/' },
  { title: 'Taxi Booking System', description: 'A web application to book taxis online with real-time tracking.', github: 'https://github.com/bharathdhana/Taxi-Booking-System' },
  { title: 'Library Application', description: 'Python based library application to manage books and users.', github: 'https://github.com/bharathdhana/library-application' },
  { title: 'Disease Prediction System', description: 'Predicting chronic diseases using deep learning models.', github: 'https://github.com/bharathdhana/Disease-Prediction-System-fyp' },
  { title: 'Personal Poetry Webpage', description: 'Showcases my art of poetry and human emotions.', github: 'https://github.com/bharathdhana/poetry-webpage', live: 'https://policytracker-58fs.onrender.com/'},
];

const Projects = () => (
  <section className="hero-surface py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Projects</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          A mix of full-stack applications, web scrapers, and machine learning projects built to solve practical problems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-slate-200 bg-white/85 p-6 flex flex-col text-center card-hover backdrop-blur"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

            <div className="flex gap-2 justify-center flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center animate-fade-up">
        <a
          href="https://github.com/bharathdhana"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-bold text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-700 hover:shadow-lg"
        >
          <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
          For More Visit GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
