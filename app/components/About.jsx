// app/components/About.jsx
import Image from 'next/image'
import React from 'react'
import { assets, whatIBringData, growthMindsetData } from '@/assets/assets'

const About = ({ isDarkMode }) => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center mb-2 text-5xl font-Ovo">Professional Summary</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-12 sm:gap-16 my-12">
                <div className='w-64 sm:w-80 rounded-3xl max-w-none shrink-0 relative'>
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl shadow-lg dark:shadow-white/10" />
                </div>
                <div className='flex-1 w-full'>
                    <p className="mb-6 font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed text-center sm:text-left">
                        Frontend Developer with 1.5+ years of professional experience building responsive, user-friendly web applications using React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and Bootstrap. Experienced in developing reusable React components, integrating REST APIs, implementing dynamic user interfaces, form validation, authentication, debugging, and application support. Strong foundation in Core Java, OOP, Collections, Exception Handling, Multithreading, SQL, and MySQL.
                    </p>
                </div>
            </div>

            {/* What I Bring & Growth Mindset Side by Side */}
            <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* What I Bring Section */}
                <div>
                    <h3 className="text-2xl font-semibold font-Ovo text-gray-800 dark:text-white mb-6 text-center sm:text-left">
                        What I Bring
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                        {whatIBringData.map((item, index) => (
                            <div key={index} className="border border-gray-400 dark:border-white/30 rounded-2xl p-6 hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-500 hover:-translate-y-1 hover:shadow-black">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0"></span>
                                    <h4 className="font-semibold font-Ovo text-lg text-gray-800 dark:text-white">{item.title}</h4>
                                </div>
                                <p className="font-Ovo text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-5.5">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Growth Mindset Section */}
                <div>
                    <h3 className="text-2xl font-semibold font-Ovo text-gray-800 dark:text-white mb-6 text-center sm:text-left">
                        Growth Mindset
                    </h3>
                    <div className="border border-gray-400 dark:border-white/30 rounded-2xl p-6 sm:p-8 hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-500">
                        <ul className="space-y-4">
                            {growthMindsetData.map((point, index) => (
                                <li key={index} className="flex items-start gap-3.5 text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0"></span>
                                    <span>{point}</span>
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