import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Experience = () => {
    const education = [
        {
            date: 'May 2025',
            degree: 'BE. Electronics & Communications Engineering',
            institution: 'Thanthai Periyar Government Institute of Technology',
            icon: 'school',
        },
        {
            date: 'Apr 2020',
            degree: 'Higher Secondary Examination',
            institution: 'Vani Metric Higher Secondary School',
            icon: 'menu_book',
        },
    ];

    const experience = [
        {
            date: 'Aug 2025 – Present',
            role: 'Intern Trainee',
            company: 'Zoho Schools of Graduate Studies',
            description: 'Demonstrated strong command of Java and OOP concepts. Hands-on experience in HTML, CSS, and JavaScript. Designed web applications integrating UI, business logic, and performance optimization.',
            skills: ['Java', 'HTML/CSS', 'JavaScript', 'OOP'],
            isCurrent: true,
        },
        {
            date: 'Jun – Jul 2025',
            role: 'Incubation Trainee',
            company: 'ZOHO',
            description: 'Gained strong foundational knowledge in C programming. Enhanced problem-solving skills through hands-on coding sessions and algorithmic challenges.',
            skills: ['C Programming', 'Problem Solving', 'Algorithms'],
            isCurrent: false,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8 md:py-12 pb-24 md:pb-12">
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
                <Sidebar />
                <main className="col-span-12 md:col-span-8">
                    <div className="glass-card rounded-2xl shadow-xl p-8 md:p-12 fade-in">
                        {/* Header */}
                        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="h-px bg-gradient-to-r from-primary to-accent w-10" />
                                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Career</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
                                    Res<span className="gradient-text">ume</span>
                                </h2>
                            </div>
                            <a
                                href="/resume.pdf"
                                download="Hariharaprasad_Resume.pdf"
                                className="group bg-primary text-gray-900 font-bold py-3 px-7 rounded-xl uppercase tracking-wider text-sm hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-auto active:scale-[0.97]"
                            >
                                <span className="material-icons text-lg group-hover:animate-bounce">download</span>
                                Download PDF
                            </a>
                        </div>

                        {/* Education Section */}
                        <section className="mb-14">
                            <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="material-icons text-primary text-xl">school</span>
                                </div>
                                Education
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-in">
                                {education.map((edu, i) => (
                                    <div
                                        key={i}
                                        className="relative group p-5 rounded-xl border border-gray-100 dark:border-zinc-700/50 bg-gray-50/50 dark:bg-zinc-800/30 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <span className="material-icons text-primary text-sm">{edu.icon}</span>
                                            </div>
                                            <span className="text-xs font-semibold bg-gray-200/80 dark:bg-zinc-700 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">
                                                {edu.date}
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-1">
                                            {edu.degree}
                                        </h4>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                            <span className="material-icons text-xs">location_on</span>
                                            {edu.institution}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Experience Section */}
                        <section>
                            <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="material-icons text-primary text-xl">business_center</span>
                                </div>
                                Experience
                            </h3>
                            <div className="space-y-6 stagger-in">
                                {experience.map((exp, i) => (
                                    <div
                                        key={i}
                                        className="relative group p-6 rounded-xl border border-gray-100 dark:border-zinc-700/50 bg-gray-50/50 dark:bg-zinc-800/30 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                                    >
                                        {/* Current badge */}
                                        {exp.isCurrent && (
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                    Current
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <span className="material-icons text-primary text-sm">work</span>
                                            </div>
                                            <span className="text-xs font-semibold bg-gray-200/80 dark:bg-zinc-700 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300">
                                                {exp.date}
                                            </span>
                                        </div>

                                        <h4 className="font-bold text-gray-900 dark:text-white mb-0.5">{exp.role}</h4>
                                        <p className="text-sm text-primary font-semibold mb-3">{exp.company}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Skill tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-2.5 py-1 bg-primary/8 text-primary text-[10px] font-bold rounded-lg uppercase tracking-wider border border-primary/15"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>
                <Navbar />
            </div>
        </div>
    );
};

export default Experience;
