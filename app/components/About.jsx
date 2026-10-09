// app/components/About.jsx
import Image from 'next/image'
import React from 'react'
import { assets, whatIBringData, growthMindsetData } from '@/assets/assets'

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
                {/* What I Bring Section */}
                <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-semibold font-Ovo text-gray-800 dark:text-white mb-6 text-center sm:text-left">
                        What I Bring
                    </h3>
                    <div className="flex-1 border border-gray-400 dark:border-white/30 rounded-2xl p-6 sm:p-8 hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-500 hover:-translate-y-1 hover:shadow-black">
                        <ul className="space-y-5">
                            {whatIBringData.map((item, index) => (
                                <li key={index} className="flex items-start gap-3.5 text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
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
                    </div>
                </div>

                {/* Growth Mindset Section */}
                <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-semibold font-Ovo text-gray-800 dark:text-white mb-6 text-center sm:text-left">
                        Growth Mindset
                    </h3>
                    <div className="flex-1 border border-gray-400 dark:border-white/30 rounded-2xl p-6 sm:p-8 hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-500 hover:-translate-y-1 hover:shadow-black">
                        <ul className="space-y-5">
                            {growthMindsetData.map((point, index) => (
                                <li key={index} className="flex items-start gap-3.5 text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {point}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About