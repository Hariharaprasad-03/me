/*
  Resume.jsx
  - React single-file component for the provided HTML resume.
  - NOTES: Add the Google Fonts, Material Icons and Font Awesome links to your public/index.html <head>.
    Also configure Tailwind in your project (this file assumes Tailwind classes are available).

  Example head entries (public/index.html):
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

  If you previously used the tailwind CDN config script, move the config to your tailwind.config.js instead.
*/

import React from "react";

 function Resume() {
  return (
    <div className="font-display bg-background-light white:bg-background-white text-gray-700 dark:text-gray-300 min-h-screen py-8">
      <div className="container mx-auto px-4 md:py-12">
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-12 md:col-span-3">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center sticky top-8">
              <div className="relative mb-4">
                <img
                  alt="Portrait of Hariharaprasad R"
                  className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 dark:border-zinc-700"
                  src="/imgs/profile.jpg"
                />
              </div>
              <div className="flex justify-center gap-4 mb-4">
                <a
                  href="https://www.linkedin.com/in/hariharaprasad-r110703/"
                  className="text-gray-900 hover:text-primary transition-colors"
                >
                  <i className="fab fa-linkedin text-xl" />
                </a>
                <a href="https://github.com/Hariharaprasad-03" className="text-gray-900 hover:text-primary transition-colors">
                  <i className="fab fa-github text-xl" />
                </a>
                <a href="https://leetcode.com/u/Hariharaprasad_03/" className="text-gray-900 hover:text-primary transition-colors">
                  <i className="fas fa-code text-xl" title="LeetCode" />
                </a>
              </div>

              <h1 className="text-xl font-bold text-gray-800 dark:text-white">Hariharaprasad R</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Software Engineer / Full Stack Developer</p>

              <nav className="w-full">
                <ul className="space-y-4">
                  <li>
                    <a
                      className="text-xs font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                      href="/"
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a className="text-xs font-semibold tracking-wider uppercase text-primary" href="/experience">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a className="text-xs font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="/projects">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="flex flex-col items-center group" href="/achievements-contact">
                      <span className="text-xs font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                        Achievements & Contacts
                      </span>
                      <span className="material-icons text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">arrow_downward</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          <main className="col-span-12 md:col-span-8">
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 md:p-12">
              <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white uppercase">Resume</h2>
                  <div className="absolute top-1/2 left-0 w-12 h-1 bg-primary -translate-y-1/2 -z-10" />
                </div>

                <a
                  href="/files/Hariharaprasad_resume_11_11_25.pdf"
                  download
                  className="bg-primary text-gray-900 font-bold py-2 px-6 rounded-full uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  <span className="material-icons">download</span>
                  Download PDF
                </a>
              </div>

              <section className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-4">
                  <span className="material-icons text-primary text-4xl">school</span>
                  Education
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="relative pl-8 education-timeline">
                    <p className="text-sm bg-gray-200 dark:bg-zinc-700 inline-block px-2 py-1 rounded-full mb-2">May 2025</p>
                    <h4 className="font-bold text-gray-800 dark:text-white">BE. Electronics And Communications Engineering</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Thanthai Periyar Government Institute of Technology</p>
                  </div>

                  <div className="relative pl-8 education-timeline">
                    <p className="text-sm bg-gray-200 dark:bg-zinc-700 inline-block px-2 py-1 rounded-full mb-2">Apr 2020</p>
                    <h4 className="font-bold text-gray-800 dark:text-white">Higher Secondary Examination</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Vani Metric Higher Secondary School</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-4">
                  <span className="material-icons text-primary text-4xl">business_center</span>
                  Experience
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div className="relative pl-8">
                    <div className="timeline-connector" />
                    <div className="timeline-dot" />
                    <p className="text-sm bg-gray-200 dark:bg-zinc-700 inline-block px-2 py-1 rounded-full mb-2">Aug 2025 - Present</p>
                    <h4 className="font-bold text-gray-800 dark:text-white">Intern Trainee</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Zoho Schools of Graduate Studies</p>
                    <p className="text-sm mt-2">Demonstrated strong command of Java and OOPS concepts. Hands-on experience in HTML, CSS, and JavaScript. Designed web applications integrating UI, business logic, and performance optimization.</p>
                  </div>

                  <div className="relative pl-8">
                    <div className="timeline-dot" />
                    <p className="text-sm bg-gray-200 dark:bg-zinc-700 inline-block px-2 py-1 rounded-full mb-2">Jun - Jul 2025</p>
                    <h4 className="font-bold text-gray-800 dark:text-white">Incubation Trainee</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">ZOHO</p>
                    <p className="text-sm mt-2">Gained strong foundational knowledge in C programming. Enhanced problem-solving skills through hands-on coding sessions and algorithmic challenges.</p>
                  </div>
                </div>
              </section>
            </div>
          </main>

          <nav className="hidden md:col-span-1 md:flex justify-center">
            <div className="flex flex-col items-center justify-center space-y-2 relative h-full">
              <div className="absolute top-1/2 -translate-y-1/2 h-1/2 w-px bg-gray-300 dark:bg-zinc-600" />

              <a className="z-10 bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-gray-800 transition-colors" href="/">
                <span className="material-icons">person</span>
              </a>

              <a className="z-10 bg-primary text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-80 transition-opacity" href="/experience">
                <span className="material-icons">description</span>
              </a>

              <a className="z-10 bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-gray-800 transition-colors" href="/projects">
                <span className="material-icons">work</span>
              </a>

              <a className="z-10 bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-gray-800 transition-colors" href="/achievements-contact">
                <span className="material-icons">send</span>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Inline styles from original file - keep them here so the component renders the timeline accents */}
      <style jsx>{`
        .timeline-connector {
          position: absolute;
          top: 2rem;
          bottom: 0;
          left: 1rem;
          width: 2px;
          background-color: #ffb400;
        }

        .timeline-dot {
          position: absolute;
          top: 2rem;
          left: 1rem;
          transform: translateX(-50%);
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 9999px;
          background-color: #ffb400;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1rem;
          height: 2px;
          background-color: #ffb400;
        }

        .education-timeline::after {
          content: '';
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background-color: #ffb400;
        }
      `}</style>
    </div>
  );
}

export default Resume
