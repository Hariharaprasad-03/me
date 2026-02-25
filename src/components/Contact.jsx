import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 4000);
        }, 1200);
    };

    const achievements = [
        {
            title: 'National Tech Symposium Winner',
            description: '1st Prize at National Level Tech Symposium, GCE Salem',
            icon: 'military_tech',
            color: 'from-amber-500/10 to-orange-500/10',
        },
        {
            title: 'LeetCode Contest Rank',
            description: 'Achieved 1049th Position in LeetCode Contest',
            icon: 'leaderboard',
            color: 'from-violet-500/10 to-purple-500/10',
        },
        {
            title: 'LeetCode Solver',
            description: 'Solved 100+ Problems across DSA topics',
            icon: 'code',
            color: 'from-blue-500/10 to-cyan-500/10',
        },
        {
            title: 'Hackathon Winner',
            description: 'First Place in College Tech Fest',
            icon: 'emoji_events',
            color: 'from-rose-500/10 to-pink-500/10',
        },
        {
            title: 'Coding Contest',
            description: '1st Place — Competitive Coding Event',
            icon: 'workspace_premium',
            color: 'from-teal-500/10 to-emerald-500/10',
        },
        {
            title: '5+ Certifications',
            description: 'Industry-recognized technical certifications',
            icon: 'verified',
            color: 'from-emerald-500/10 to-green-500/10',
        },
    ];

    const contactInfo = [
        {
            icon: 'email',
            label: 'Email',
            value: 'hariharaprasad.r03@gmail.com',
            href: 'mailto:hariharaprasad.r03@gmail.com',
        },
        {
            icon: 'location_on',
            label: 'Location',
            value: 'Tamil Nadu, India',
            href: null,
        },
        {
            icon: 'public',
            label: 'LinkedIn',
            value: 'linkedin.com/in/hariharaprasad-r110703',
            href: 'https://www.linkedin.com/in/hariharaprasad-r110703/',
        },
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
                                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Connect</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
                                Achievements & <span className="gradient-text">Contact</span>
                            </h2>
                        </div>

                        {/* Achievements */}
                        <section className="mb-12">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="material-icons text-primary text-lg">emoji_events</span>
                                </div>
                                Achievements
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-in">
                                {achievements.map((ach, i) => (
                                    <div
                                        key={i}
                                        className={`group p-5 rounded-xl bg-gradient-to-br ${ach.color} border border-gray-100 dark:border-zinc-700/40 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                                                <span className="material-icons text-primary text-lg group-hover:text-gray-900 transition-colors">
                                                    {ach.icon}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5">
                                                    {ach.title}
                                                </h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {ach.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Contact section */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                            {/* Contact Info */}
                            <div className="lg:col-span-2 space-y-5">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <span className="material-icons text-primary text-lg">contact_mail</span>
                                    </div>
                                    Get in Touch
                                </h3>

                                <div className="space-y-4">
                                    {contactInfo.map((info, i) => (
                                        <div key={i} className="flex items-start gap-3 group">
                                            <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-zinc-700/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                                                <span className="material-icons text-gray-400 text-base group-hover:text-primary transition-colors">
                                                    {info.icon}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                                                    {info.label}
                                                </p>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm text-gray-900 dark:text-gray-300 hover:text-primary transition-colors break-all"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm text-gray-900 dark:text-gray-300">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-3">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <span className="material-icons text-primary text-lg">mail</span>
                                    </div>
                                    Send a Message
                                </h3>

                                {submitted && (
                                    <div className="mb-5 p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 fade-in">
                                        <span className="material-icons text-green-500">check_circle</span>
                                        <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                                            Message sent successfully! I'll get back to you soon.
                                        </p>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Hello, I'd like to discuss a project..."
                                            rows={4}
                                            className="w-full bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 resize-none"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 bg-primary text-gray-900 font-bold py-3 rounded-xl uppercase text-xs tracking-wider hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <span className="material-icons text-sm">send</span>
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Navbar />
            </div>
        </div>
    );
};

export default Contact;
