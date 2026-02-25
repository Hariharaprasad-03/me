import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const navItems = [
        { path: '/', label: 'About', icon: 'person' },
        { path: '/experience', label: 'Resume', icon: 'description' },
        { path: '/projects', label: 'Portfolio', icon: 'work' },
        { path: '/achievements', label: 'Achievements', icon: 'emoji_events' },
    ];

    return (
        <nav
            className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 10px)', paddingTop: '8px' }}
        >
            <div className="flex justify-around items-center">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-300 ${isActive(item.path)
                            ? 'text-primary'
                            : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                            }`}
                    >
                        <span className={`material-icons text-2xl transition-transform duration-300 ${isActive(item.path) ? 'scale-110' : ''
                            }`}>
                            {item.icon}
                        </span>
                        <span className="text-[10px] font-bold tracking-wide uppercase">
                            {item.label}
                        </span>
                        {isActive(item.path) && (
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default MobileNav;
