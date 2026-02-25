import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [hoveredId, setHoveredId] = useState(null);

    const filters = ['All', 'AI/ML', 'Java', 'Web'];

    const projects = [
        {
            id: 1,
            title: 'Face Detection Smart Attendance',
            category: 'AI/ML',
            icon: 'face',
            description: 'Smart attendance system leveraging YOLO for real-time face detection and FaceNet for accurate facial recognition. Integrated database for tracking and management.',
            tags: ['YOLO', 'FaceNet', 'Python'],
            link: 'https://github.com/Hariharaprasad-03/SmartAttendatnceSystem_tpgit.git',
            color: 'from-violet-500/20 to-blue-500/20',
        },
        {
            id: 2,
            title: 'Stock & Temperature Prediction',
            category: 'AI/ML',
            icon: 'show_chart',
            description: 'Developed RNN and LSTM based models to predict future stock prices using historic data. Capable of predicting next day price based on previous four days.',
            tags: ['TensorFlow', 'LSTM', 'RNN'],
            link: 'https://github.com/Hariharaprasad-03/StockPrediction.git',
            color: 'from-emerald-500/20 to-teal-500/20',
        },
        {
            id: 3,
            title: 'Design Patterns & LLD',
            category: 'Java',
            icon: 'architecture',
            description: 'Comprehensive implementation of various software design patterns and low-level system design principles. Focuses on scalable and maintainable code architecture.',
            tags: ['Java', 'OOP', 'Design Patterns'],
            link: 'https://github.com/Hariharaprasad-03/Design-Patterns.git',
            color: 'from-orange-500/20 to-red-500/20',
        },
        {
            id: 4,
            title: 'Folder Management System',
            category: 'Java',
            icon: 'folder',
            description: 'Engineered using Java OOP and SRP principles, utilizing the Composite pattern for structure, Visitor for search, and Singleton for efficient JSON serialization.',
            tags: ['Java', 'Servlet/JSP', 'MySQL'],
            link: 'https://github.com/Hariharaprasad-03/FolderManagement-System.git',
            color: 'from-blue-500/20 to-indigo-500/20',
        },
        {
            id: 5,
            title: 'Java Web App',
            category: 'Web',
            icon: 'web',
            description: 'A robust web application built using Java technologies. Features include user authentication, data management, and dynamic content rendering.',
            tags: ['Java', 'Servlet/JSP', 'MySQL'],
            link: '#',
            color: 'from-pink-500/20 to-rose-500/20',
        },
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 pb-24 md:pb-12">
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <Sidebar />
                <main className="col-span-12 md:col-span-8">
                    <div className="glass-card rounded-2xl shadow-xl p-8 md:p-12 fade-in">
                        {/* Header */}
                        <div className="mb-10">
                            <div className="relative mb-8">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="h-px bg-gradient-to-r from-primary to-accent w-10" />
                                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">My Work</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
                                    Port<span className="gradient-text">folio</span>
                                </h2>
                            </div>

                            {/* Filter tabs */}
                            <div className="flex flex-wrap gap-2">
                                {filters.map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${filter === f
                                            ? 'bg-primary text-gray-900 shadow-md shadow-primary/20'
                                            : 'bg-gray-100 dark:bg-zinc-700/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-white'
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-in">
                            {filteredProjects.map(project => (
                                <div
                                    key={project.id}
                                    className="group relative flex flex-col bg-white dark:bg-zinc-900/80 rounded-2xl border border-gray-100 dark:border-zinc-700/50 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    {/* Card header with gradient */}
                                    <div className={`relative h-44 bg-gradient-to-br ${project.color} w-full flex items-center justify-center overflow-hidden`}>
                                        {/* Decorative circles */}
                                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 dark:bg-white/3" />
                                        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-white/5 dark:bg-white/3" />

                                        <span className={`material-icons text-7xl transition-all duration-500 drop-shadow-sm ${hoveredId === project.id
                                            ? 'text-primary scale-110 rotate-3'
                                            : 'text-gray-400/60 dark:text-gray-500/60'
                                            }`}>
                                            {project.icon}
                                        </span>

                                        {/* Category badge */}
                                        <div className="absolute top-3 right-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                                            <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold rounded-lg uppercase tracking-wider border border-gray-200/60 dark:border-zinc-700/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-3 px-6 rounded-xl uppercase tracking-wide text-xs hover:bg-primary hover:text-gray-900 dark:hover:bg-primary dark:hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/15 active:scale-[0.98]"
                                        >
                                            <span className="material-icons text-sm">open_in_new</span>
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty state */}
                        {filteredProjects.length === 0 && (
                            <div className="text-center py-16">
                                <span className="material-icons text-5xl text-gray-300 dark:text-zinc-600 mb-4">search_off</span>
                                <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
                            </div>
                        )}
                    </div>
                </main>
                <Navbar />
            </div>
        </div>
    );
};

export default Projects;
