// app/components/About.jsx
import Image from 'next/image'
import React from 'react' 
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center mb-2 text-5xl font-Ovo">About Me</h2>
            <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-10">
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl" />
                </div>
                <div className='flex-1'>
                    <p className="mb-6 max-w-2xl font-Ovo">
                        I’m a Frontend Developer with 1.5+ years of professional experience in frontend development and application support. I have hands-on experience building responsive web applications using React.js, JavaScript, HTML5, CSS3, Tailwind CSS, and Bootstrap.
                        My experience includes developing reusable React components, integrating REST APIs, implementing dynamic UI, form validation, authentication, debugging, and application support. I also have a strong foundation in Core Java, OOP, Collections, Exception Handling, Multithreading, SQL, and MySQL.
                        I enjoy solving technical problems, learning new technologies, and building efficient, scalable, and user-friendly applications.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black">
                                <Image src={icon} alt={title} className="w-7 mt-3" />
                                <h3 className="font-semibold text-gray-700 mt-4">{title}</h3>
                                <p className="text-gray-600 text-sm">{description}</p>
                                {/* <span className="font-bold">{title}:</span> {description} */}
                            </li>
                        ))}
                    </ul>
                    {/* <ul>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li key={index} className="flex items-center gap-2 mb-2">
                                <Image src={icon} alt={title} className="w-6" />
                                <span className="font-bold">{title}:</span> {description}
                            </li>
                        ))}
                    </ul> */}
                    <h4 className="font-ovo text-gray-700 my-6">Tools I use</h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {toolsData.map((tool, index) => (
                            <li key={index} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About