import { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const useTypingEffect = (texts, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, displayText.length + 1));
                if (displayText.length === currentText.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setDisplayText(currentText.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
};

const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [hasStarted, end, duration]);

    return [count, ref];
};

const About = () => {
    const typedText = useTypingEffect([
        'Software Engineer',
        'Full Stack Developer',
        'Problem Solver',
        'Tech Enthusiast',
    ]);

    const skills = [
        { name: 'Java', level: 90, icon: 'fab fa-java' },
        { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
        { name: 'React', level: 75, icon: 'fab fa-react' },
        { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
        { name: 'Python', level: 70, icon: 'fab fa-python' },
        { name: 'SQL', level: 75, icon: 'fas fa-database' },
    ];

    const whatIDo = [
        {
            icon: 'code',
            title: 'Programming',
            desc: 'Java, C, Python, SQL, HTML, CSS, JavaScript',
            gradient: 'from-blue-500/10 to-cyan-500/10',
        },
        {
            icon: 'psychology',
            title: 'Technical Skills',
            desc: 'Problem Solving, DSA, Deep Learning, OOP, ML',
            gradient: 'from-purple-500/10 to-pink-500/10',
        },
        {
            icon: 'web',
            title: 'Web Development',
            desc: 'Full Stack, Responsive Design, Performance',
            gradient: 'from-orange-500/10 to-amber-500/10',
        },
    ];

    const stats = [
        { value: 2, suffix: '+', label: 'Projects', icon: 'rocket_launch' },
        { value: 5, suffix: '+', label: 'Certifications', icon: 'verified' },
        { value: 1, suffix: 'st', label: 'Coding Contest', icon: 'emoji_events' },
        { value: 1, suffix: 'st', label: 'Hackathon Winner', icon: 'military_tech' },
    ];

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 pb-24 md:pb-12">
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <Sidebar />
                <main className="col-span-12 md:col-span-8">
                    <div className="glass-card rounded-2xl shadow-xl p-8 md:p-12 fade-in">
                        {/* Header */}
                        <div className="relative mb-10">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="h-px bg-gradient-to-r from-primary to-accent w-10" />
                                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Welcome</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
                                About <span className="gradient-text">Me</span>
                            </h2>
                        </div>

                        {/* Introduction */}
                        <div className="mb-10">
                            <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                I'm Hariharaprasad R
                            </p>
                            <p className="text-lg font-semibold text-primary mb-1 h-7">
                                <span>{typedText}</span>
                                <span className="typing-cursor" />
                            </p>
                            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                                Passionate developer with a strong command of Java, Object-Oriented Programming, and Data Structures.
                                Experienced in building efficient backend functionality and seamless web applications.
                                I love solving complex problems and have a keen interest in Machine Learning and Deep Learning.
                            </p>
                        </div>

                        {/* What I Do & Stats */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                            {/* What I Do */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6">
                                    <span className="material-icons text-primary text-sm">bolt</span>
                                    <span className="text-sm font-bold text-primary tracking-wide">What I Do</span>
                                </div>
                                <div className="space-y-4 stagger-in">
                                    {whatIDo.map((item, i) => (
                                        <div
                                            key={i}
                                            className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r ${item.gradient} border border-gray-100 dark:border-zinc-700/50 hover:shadow-md transition-all duration-300 group cursor-default`}
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                                                <span className="material-icons text-2xl text-primary group-hover:text-gray-900 transition-colors">
                                                    {item.icon}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6">
                                    <span className="material-icons text-primary text-sm">insights</span>
                                    <span className="text-sm font-bold text-primary tracking-wide">Quick Stats</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 stagger-in">
                                    {stats.map((stat, i) => {
                                        const [count, ref] = useCountUp(stat.value, 1500);
                                        return (
                                            <div
                                                key={i}
                                                ref={ref}
                                                className="relative group bg-gray-900 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center p-6 text-center overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-default"
                                            >
                                                {/* Background glow */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <span className="material-icons text-primary/30 text-3xl mb-2 group-hover:text-primary/60 transition-colors">
                                                    {stat.icon}
                                                </span>
                                                <div className="text-primary font-display text-3xl font-extrabold relative">
                                                    {count}{stat.suffix}
                                                </div>
                                                <div className="text-gray-400 text-[11px] uppercase tracking-wider mt-1 font-semibold">
                                                    {stat.label}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="mt-12">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6">
                                <span className="material-icons text-primary text-sm">construction</span>
                                <span className="text-sm font-bold text-primary tracking-wide">Tech Stack</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 stagger-in">
                                {skills.map((skill, i) => (
                                    <div key={i} className="group">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <i className={`${skill.icon} text-sm text-gray-400 group-hover:text-primary transition-colors`} />
                                                <span className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className="text-xs font-bold text-primary">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${i * 0.15}s`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <Navbar />
            </div>
        </div>
    );
};

export default About;
