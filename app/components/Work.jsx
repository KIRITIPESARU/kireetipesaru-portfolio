// src/components/Work.jsx
import React from 'react'
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'

const colorStyles = [
  { dot: 'bg-rose-500',    border: 'hover:border-rose-400 dark:hover:border-rose-500' },
  { dot: 'bg-indigo-500',  border: 'hover:border-indigo-400 dark:hover:border-indigo-500' },
  { dot: 'bg-emerald-500', border: 'hover:border-emerald-400 dark:hover:border-emerald-500' },
  { dot: 'bg-amber-500',   border: 'hover:border-amber-400 dark:hover:border-amber-500' },
  { dot: 'bg-violet-500',  border: 'hover:border-violet-400 dark:hover:border-violet-500' },
  { dot: 'bg-teal-500',    border: 'hover:border-teal-400 dark:hover:border-teal-500' },
];

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        {/* Add work items here */}
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">Featured Projects</h4>
        <h2 className="text-center mb-2 text-5xl font-Ovo dark:text-white">My Latest Work</h2>
        <p className="text-center max-w-2xl mx-auto mt-2 mb-8 font-Ovo text-gray-600 dark:text-gray-400">
            A collection of my frontend projects showcasing React.js development, responsive UI design, REST API integration, and modern web development practices.
        </p>
        <div className="grid grid-cols-auto gap-5 my-6">
            {workData.map((project, index) => {
                const c = colorStyles[index % colorStyles.length];
                return (
                    <div key={index} className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border border-gray-200 dark:border-gray-700 transition-all duration-300 ${c.border}`}>
                        <div className="bg-white dark:bg-gray-800 w-10/12 rounded-b-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-3 flex flex-col duration-500 group-hover:bottom-7 shadow-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                                </div>
                            </div>

                            {/* Bottom accent dot */}
                            <div className={`mt-3 w-6 h-1 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
                        </div>
                    </div>
                );
            })}
        </div>
        {/* <a href='' className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500">
            Show more <Image src={assets.right_arrow_bold} alt='Right Arrow' className="w-4" />
        </a> */}
    </div>
    )
}

export default Work