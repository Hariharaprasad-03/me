
import potrait from '../assets/profile.jpg';
const Index = () => {
    
    return (
        <>
            <style>{`
        .timeline-line::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 1px;
            height: 100%;
            background-color: #333;
        }

        .dark .timeline-line::before {
            background-color: #888;
        }
      `}</style>
            <div className="bg-[#f0f0f6] dark:bg-[#121212] font-sans text-gray-800 dark:text-gray-300 antialiased min-h-screen">
                <div className="container mx-auto p-4 md:p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <aside className="w-full md:w-1/4 bg-[#ffb400] text-gray-900 rounded-lg flex flex-col items-center justify-between p-8 space-y-8">
                            <div className="text-center space-y-4">
                                <img
                                    alt="Hariharaprasad R portrait"
                                    className="w-32 h-32 rounded-full border-4 border-gray-900 object-cover mx-auto"
                                    src={potrait}
                                />
                                <div className="flex justify-center gap-4 mt-4">
                                    <a href="https://www.linkedin.com/in/hariharaprasad-r110703/" className="text-gray-900 hover:text-white transition-colors">
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a href="https://github.com/Hariharaprasad-03" className="text-gray-900 hover:text-white transition-colors">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                    <a href="https://leetcode.com/u/Hariharaprasad_03/" className="text-gray-900 hover:text-white transition-colors">
                                        <i className="fas fa-code text-xl" title="LeetCode"></i>
                                    </a>
                                </div>
                                <span className="material-icons text-gray-900">arrow_upward</span>
                                <nav className="flex flex-col space-y-4 text-center">
                                    <a className="uppercase font-bold tracking-wider text-gray-900 border-b-2 border-gray-900 pb-1" href="index.html">
                                        About Me
                                    </a>
                                    <a className="uppercase font-bold tracking-wider" href="Experience.html">
                                        Resume
                                    </a>
                                    <a className="uppercase font-bold tracking-wider" href="projects.html">
                                        Portfolio
                                    </a>
                                    <a className="uppercase font-bold tracking-wider" href="achivemment&contact.html">
                                        Achievements & Contacts
                                    </a>
                                </nav>
                            </div>
                            <span className="material-icons text-gray-900">arrow_downward</span>
                        </aside>
                        <main className="w-full md:w-3/4 flex">
                            <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 relative">
                                <div className="flex items-center mb-8">
                                    <div className="h-px bg-gray-900 dark:bg-gray-100 w-12 mr-4"></div>
                                    <h1 className="text-4xl md:text-5xl font-display text-gray-900 dark:text-gray-100 tracking-wider">
                                        ABOUT ME
                                    </h1>
                                </div>
                                <p className="font-bold text-left text-lg text-gray-900 dark:text-gray-100">
                                    I'm Hariharaprasad R
                                </p>
                                <p className="font-bold text-left text-lg text-gray-900 dark:text-gray-100 " >
                                    Software Engineer / Full Stack Developer
                                </p>
                                <p className="mt-4 text-justify text-gray-600 dark:text-gray-400 ">
                                    Passionate developer with a strong command of Java, Object-Oriented Programming, and Data Structures. Experienced in building efficient backend functionality and seamless web applications. I love solving complex problems and have a keen interest in Machine Learning and Deep Learning.
                                </p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 bg-[#fffff]">
                                    <div className="bg-[#fffff]">
                                        <div className="inline-block px-4 py-1 bg-[#ffb400] rounded-full text-gray-900 font-bold text-sm mb-6">
                                            What I Do?
                                        </div>
                                        <div className="space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 bg-[#ffb400] rounded-full flex items-center justify-center">
                                                    <span className="material-icons text-3xl text-gray-900">code</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">PROGRAMMING</h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Java, C Programming, Python, SQL, HTML, CSS, JavaScript
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 bg-[#ffb400] rounded-full flex items-center justify-center">
                                                    <span className="material-icons text-3xl text-gray-900">psychology</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">TECHNICAL SKILLS</h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Problem Solving, DSA, Deep Learning, OOPS, Machine Learning
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-16 h-16 bg-[#ffb400] rounded-full flex items-center justify-center">
                                                    <span className="material-icons text-3xl text-gray-900">web</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 dark:text-gray-100">WEB DEVELOPMENT</h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Full Stack Development, Responsive Design, Performance Optimization
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="inline-block px-4 py-1 bg-[#ffb400] rounded-full text-gray-900 font-bold text-sm mb-6">
                                            Fun Facts
                                        </div>
                                        <div className="grid grid-cols-2 grid-rows-3 gap-4">
                                            <div className="bg-gray-900 dark:bg-gray-700 rounded-full flex flex-col items-center justify-center aspect-square text-center p-2">
                                                <div className="text-[#ffb400] font-display text-4xl">2+</div>
                                                <div className="text-white text-xs uppercase leading-tight">Projects Completed</div>
                                            </div>
                                            <div className="bg-gray-900 dark:bg-gray-700 rounded-full flex flex-col items-center justify-center aspect-square text-center p-2">
                                                <div className="text-[#ffb400] font-display text-4xl">5+</div>
                                                <div className="text-white text-xs uppercase leading-tight">Certifications</div>
                                            </div>
                                            <div className="bg-gray-900 dark:bg-gray-700 rounded-full flex flex-col items-center justify-center aspect-square text-center p-2">
                                                <div className="text-[#ffb400] font-display text-4xl">1st</div>
                                                <div className="text-white text-xs uppercase leading-tight">Coding Contest</div>
                                            </div>
                                            <div className="bg-gray-900 dark:bg-gray-700 rounded-full flex flex-col items-center justify-center aspect-square text-center p-2">
                                                <div className="text-[#ffb400] font-display text-4xl">1st</div>
                                                <div className="text-white text-xs uppercase leading-tight">Hackathon Winner</div>
                                            </div>
                                            <div className="bg-gray-900 dark:bg-gray-700 rounded-full flex flex-col items-center justify-center aspect-square text-center p-2">
                                                <div className="text-[#ffb400] font-display text-4xl">2025</div>
                                                <div className="text-white text-xs uppercase leading-tight">Graduation Year</div>
                                            </div>
                                            <div className="bg-gray-900 dark:bg-gray-700 rounded-full flex flex-col items-center justify-center aspect-square text-center p-2">
                                                <div className="text-[#ffb400] font-display text-4xl">100%</div>
                                                <div className="text-white text-xs uppercase leading-tight">Dedication</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex flex-col items-center justify-center space-y-2 ml-4 relative timeline-line">
                                <span className="absolute -top-4 w-4 h-4 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center">
                                    <span className="w-1 h-1 bg-[#ffb400] rounded-full"></span>
                                </span>
                                <a
                                    className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center text-[#ffb400] z-10 hover:bg-[#ffb400] hover:text-gray-900 transition-colors"
                                    href="index.html"
                                >
                                    <span className="material-icons text-xl">person</span>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center text-[#ffb400] z-10 hover:bg-[#ffb400] hover:text-gray-900 transition-colors"
                                    href="Experience.html"
                                >
                                    <span className="material-icons text-xl">description</span>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center text-[#ffb400] z-10 hover:bg-[#ffb400] hover:text-gray-900 transition-colors"
                                    href="projects.html"
                                >
                                    <span className="material-icons text-xl">work</span>
                                </a>
                                <a
                                    className="w-10 h-10 rounded-full bg-gray-900 dark:bg-gray-700 flex items-center justify-center text-[#ffb400] z-10 hover:bg-[#ffb400] hover:text-gray-900 transition-colors"
                                    href="achivemment&contact.html"
                                >
                                    <span className="material-icons text-xl">send</span>
                                </a>
                                <span className="absolute -bottom-4 w-4 h-4 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center">
                                    <span className="w-1 h-1 bg-[#ffb400] rounded-full"></span>
                                </span>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
