// app/components/About.jsx
import Image from 'next/image'
import React from 'react' 
import { assets, infoList, toolsData } from '@/assets/assets'

const About = ({ isDarkMode }) => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center mb-2 text-5xl font-Ovo">About Me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-12 sm:gap-20 my-12">
                <div className='w-64 sm:w-80 rounded-3xl max-w-none shrink-0 relative'>
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl shadow-lg dark:shadow-white/10" />
                </div>
                <div className='flex-1 w-full lg:ml-0'>
                    <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed text-center sm:text-left">
                        I’m a Frontend Developer with 1.5+ years of professional experience in frontend development and application support. I have hands-on experience building responsive web applications using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap. <br/><br/>
                        My experience includes developing reusable React components, integrating REST APIs, implementing dynamic UI, form validation, authentication, debugging, and application support. I also have a strong foundation in Core Java, OOP, Collections, Exception Handling, Multithreading, SQL, and MySQL. <br/><br/>
                        I enjoy solving technical problems, learning new technologies, and building efficient, scalable, and user-friendly applications.
                    </p>
                    {/* <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-10 mx-auto sm:mx-0">
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li key={index} className="border border-gray-400 dark:border-white/20 rounded-xl p-6 cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-lg dark:hover:shadow-white/10">
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-1 md:mt-3 text-gray-900" />
                                <h3 className="font-semibold text-gray-800 dark:text-white mt-4 font-Ovo text-lg">{title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-gray-700 dark:text-gray-300 font-Ovo mb-4 font-semibold text-center sm:text-left">Tools I use</h4>
                    <ul className="flex flex-wrap items-center gap-3 sm:gap-5 justify-center sm:justify-start">
                        {toolsData.map((tool, index) => (
                            <li key={index} className="flex flex-col items-center justify-center w-12 sm:w-16 aspect-square border border-gray-400 dark:border-white/20 rounded-lg cursor-pointer hover:-translate-y-1 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-500 shadow-sm">
                                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default About