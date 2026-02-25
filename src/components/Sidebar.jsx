import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileImg from '../assets/1766727681172.png';

const Sidebar = () => {
    const location = useLocation();
    const [imageLoaded, setImageLoaded] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'About Me', icon: 'person' },
        { path: '/experience', label: 'Resume', icon: 'description' },
        { path: '/projects', label: 'Portfolio', icon: 'work' },
        { path: '/achievements', label: 'Achievements & Contacts', icon: 'emoji_events' },
    ];

    const socialLinks = [
        {
            href: 'https://www.linkedin.com/in/hariharaprasad-r110703/',
            icon: 'fab fa-linkedin',
            label: 'LinkedIn',
            hoverColor: 'hover:text-[#0077b5]'
        },
        {
            href: 'https://github.com/Hariharaprasad-03',
            icon: 'fab fa-github',
            label: 'GitHub',
            hoverColor: 'hover:text-[#333] dark:hover:text-white'
        },
        {
            href: 'https://leetcode.com/u/Hariharaprasad_03/',
            icon: 'fas fa-code',
            label: 'LeetCode',
            hoverColor: 'hover:text-[#ffa116]'
        },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="col-span-12 md:col-span-3">
                <div className="glass-card rounded-2xl shadow-xl p-7 flex flex-col items-center text-center sticky top-8 fade-in">
                    {/* Profile image with status ring */}
                    <div className="relative mb-5 group">
                        <div className="w-36 h-36 rounded-full p-1 border-2 border-primary/30 overflow-hidden mx-auto relative">
                            {/* Animated gradient border */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-surface-elevated-light dark:bg-surface-elevated-dark">
                                <img
                                    alt="Hariharaprasad R"
                                    className={`w-full h-full rounded-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    src={profileImg}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://ui-avatars.com/api/?name=Harihara+Prasad&background=ffb400&color=fff&size=256&font-size=0.35&bold=true";
                                    }}
                                />
                                {!imageLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Online status dot */}
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-surface-dark pulse-ring" title="Available for opportunities" />
                    </div>

                    {/* Name & Title */}
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                        Hariharaprasad R
                    </h1>
                    <div className="flex items-center gap-1.5 mt-1 mb-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            Available for opportunities
                        </p>
                    </div>
                    <p className="text-xs text-primary font-semibold tracking-wide mb-5">
                        Software Engineer · Full Stack Developer
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mb-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`tooltip-container w-10 h-10 rounded-xl bg-gray-100 dark:bg-zinc-700/60 flex items-center justify-center text-gray-500 dark:text-gray-400 ${social.hoverColor} hover:bg-gray-200 dark:hover:bg-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                                aria-label={social.label}
                            >
                                <i className={`${social.icon} text-lg`} />
                                <span className="tooltip">{social.label}</span>
                            </a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-600 to-transparent mb-5" />

                    {/* Navigation */}
                    <nav className="w-full">
                        <ul className="space-y-1">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 group ${isActive(item.path)
                                            ? 'bg-primary/10 text-primary shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-700/40 hover:text-gray-900 dark:hover:text-white'
                                            }`}
                                    >
                                        <span className={`material-icons text-base transition-transform duration-300 group-hover:scale-110 ${isActive(item.path) ? 'text-primary' : ''
                                            }`}>
                                            {item.icon}
                                        </span>
                                        <span>{item.label}</span>
                                        {isActive(item.path) && (
                                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Bottom CTA */}
                    <div className="w-full mt-6 pt-5 border-t border-gray-200/60 dark:border-zinc-700/40">
                        <a
                            href="/resume.pdf"
                            download="Hariharaprasad_Resume.pdf"
                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary text-gray-900 font-bold text-xs uppercase tracking-wider hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98]"
                        >
                            <span className="material-icons text-sm">download</span>
                            Download CV
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
