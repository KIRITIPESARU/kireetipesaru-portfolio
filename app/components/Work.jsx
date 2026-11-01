// src/components/Work.jsx
import React from 'react'
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'

const colorStyles = [
  {
    card:      'border-rose-200/60 dark:border-rose-800/30 hover:border-rose-400 dark:hover:border-rose-500',
    dot:       'bg-rose-500',
    titleText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    glow:      'hover:shadow-rose-100 dark:hover:shadow-rose-900/20',
  },
  {
    card:      'border-indigo-200/60 dark:border-indigo-800/30 hover:border-indigo-400 dark:hover:border-indigo-500',
    dot:       'bg-indigo-500',
    titleText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    glow:      'hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20',
  },
  {
    card:      'border-emerald-200/60 dark:border-emerald-800/30 hover:border-emerald-400 dark:hover:border-emerald-500',
    dot:       'bg-emerald-500',
    titleText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    glow:      'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20',
  },
  {
    card:      'border-amber-200/60 dark:border-amber-800/30 hover:border-amber-400 dark:hover:border-amber-500',
    dot:       'bg-amber-500',
    titleText: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
    glow:      'hover:shadow-amber-100 dark:hover:shadow-amber-900/20',
  },
  {
    card:      'border-violet-200/60 dark:border-violet-800/30 hover:border-violet-400 dark:hover:border-violet-500',
    dot:       'bg-violet-500',
    titleText: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
    glow:      'hover:shadow-violet-100 dark:hover:shadow-violet-900/20',
  },
  {
    card:      'border-teal-200/60 dark:border-teal-800/30 hover:border-teal-400 dark:hover:border-teal-500',
    dot:       'bg-teal-500',
    titleText: 'group-hover:text-teal-600 dark:group-hover:text-teal-400',
    glow:      'hover:shadow-teal-100 dark:hover:shadow-teal-900/20',
  },
];

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">Featured Projects</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo dark:text-white">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-8 font-Ovo text-gray-600 dark:text-gray-400">
        A collection of my frontend projects showcasing React.js development, responsive UI design, REST API integration, and modern web development practices.
      </p>

      <div className="grid grid-cols-auto gap-6 my-6">
        {workData.map((project, index) => {
          const c = colorStyles[index % colorStyles.length];
          return (
            <div key={index}
              className={`group border bg-white dark:bg-gray-900/60 rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${c.card} ${c.glow}`}>

              {/* Project screenshot */}
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card body — mirrors Services layout */}
              <div className="px-6 py-5 flex flex-col flex-1">
                <h3 className={`text-base font-semibold text-gray-800 dark:text-gray-200 font-Ovo transition-colors duration-200 ${c.titleText}`}>
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 mb-2 leading-4">
                  {project.Category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-5 flex-1">
                  {project.description}
                </p>

                {/* Bottom accent dot — identical to Services */}
                <div className={`mt-6 w-6 h-1 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Work