// app/components/About.jsx
import Image from 'next/image'
import React from 'react'
import { assets, whatIBringData, growthMindsetData } from '@/assets/assets'

// Color styles matching the Skills.jsx pattern
const colorStyles = {
  rose: {
    card:      'border-rose-200/60 dark:border-rose-800/30 hover:border-rose-400 dark:hover:border-rose-500',
    iconBg:    'bg-rose-50 dark:bg-rose-950/40',
    dot:       'bg-rose-500',
    titleText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    glow:      'hover:shadow-rose-100 dark:hover:shadow-rose-900/20',
  },
  indigo: {
    card:      'border-indigo-200/60 dark:border-indigo-800/30 hover:border-indigo-400 dark:hover:border-indigo-500',
    iconBg:    'bg-indigo-50 dark:bg-indigo-950/40',
    dot:       'bg-indigo-500',
    titleText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    glow:      'hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20',
  },
};

const About = ({ isDarkMode }) => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center mb-2 text-5xl font-Ovo">Professional Summary</h2>

            {/* Image section with paragraph directly below */}
            <div className="flex flex-col items-center max-w-4xl mx-auto my-10 gap-8">
                {/* <div className="w-56 sm:w-64 md:w-72 rounded-3xl shrink-0 relative overflow-hidden shadow-lg dark:shadow-white/10 border border-gray-200 dark:border-white/10">
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl object-cover" />
                </div> */}
                <p className="font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed text-center text-base sm:text-lg max-w-3xl">
                    Frontend Developer with 1.5+ years of professional experience building responsive, user-friendly web applications using React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and Bootstrap. Experienced in developing reusable React components, integrating REST APIs, implementing dynamic user interfaces, form validation, authentication, debugging, and application support. Strong foundation in Core Java, OOP, Collections, Exception Handling, Multithreading, SQL, and MySQL.
                </p>
            </div>

            {/* What I Bring & Growth Mindset Side by Side */}
            <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                {/* What I Bring Section — rose */}
                {(() => {
                    const c = colorStyles.rose;
                    return (
                        <div className="flex flex-col h-full">
                            <h3 className={`text-2xl font-semibold font-Ovo text-gray-800 dark:text-white mb-6 text-center sm:text-left transition-colors duration-200 ${c.titleText}`}>
                                What I Bring
                            </h3>
                            <div className={`group flex-1 border bg-white dark:bg-gray-900/60 rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${c.card} ${c.glow}`}>
                                <ul className="space-y-5 flex-1">
                                    {whatIBringData.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3.5 text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                                            <span className={`w-2.5 h-2.5 rounded-full ${c.dot} mt-2 shrink-0`}></span>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 dark:text-white text-base mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                {/* Bottom accent dot */}
                                <div className={`mt-6 w-6 h-1 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
                            </div>
                        </div>
                    );
                })()}

                {/* Growth Mindset Section — indigo */}
                {(() => {
                    const c = colorStyles.indigo;
                    return (
                        <div className="flex flex-col h-full">
                            <h3 className={`text-2xl font-semibold font-Ovo text-gray-800 dark:text-white mb-6 text-center sm:text-left transition-colors duration-200 ${c.titleText}`}>
                                Growth Mindset
                            </h3>
                            <div className={`group flex-1 border bg-white dark:bg-gray-900/60 rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${c.card} ${c.glow}`}>
                                <ul className="space-y-5 flex-1">
                                    {growthMindsetData.map((point, index) => (
                                        <li key={index} className="flex items-start gap-3.5 text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                                            <span className={`w-2.5 h-2.5 rounded-full ${c.dot} mt-2 shrink-0`}></span>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {point}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                                {/* Bottom accent dot */}
                                <div className={`mt-6 w-6 h-1 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
                            </div>
                        </div>
                    );
                })()}

            </div>
        </div>
    )
}

export default About