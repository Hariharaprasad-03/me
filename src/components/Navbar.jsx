import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', icon: 'person', label: 'About' },
        { path: '/experience', icon: 'description', label: 'Resume' },
        { path: '/projects', icon: 'work', label: 'Portfolio' },
        { path: '/achievements', icon: 'emoji_events', label: 'Achievements' },
    ];

    return (
        <nav className="hidden md:col-span-1 md:flex justify-center" aria-label="Main navigation">
            <div className="flex flex-col items-center justify-center space-y-3 relative h-full">
                {/* Gradient connecting line */}
                <div className="absolute top-1/2 -translate-y-1/2 h-2/5 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-zinc-600 to-transparent" />

                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`tooltip-container z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isActive(item.path)
                                ? 'bg-primary text-gray-900 shadow-lg shadow-primary/30 scale-110'
                                : 'bg-white/80 dark:bg-zinc-700/60 text-gray-500 dark:text-gray-400 hover:bg-primary/15 hover:text-primary hover:scale-105 shadow-sm'
                            }`}
                        aria-label={item.label}
                        aria-current={isActive(item.path) ? 'page' : undefined}
                    >
                        <span className="material-icons text-xl">{item.icon}</span>
                        <span className="tooltip">{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
