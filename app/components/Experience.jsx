// app/components/Experience.jsx
import React from 'react'
import { experienceData } from '@/assets/assets'

const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Career Journey</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo">My Experience</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-8 font-Ovo">
        My professional journey and hands-on experience in frontend development, application support, API integration, and modern web technologies.
      </p>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto my-6">
        {experienceData.map((item, index) => (
          <div key={index}
            className="border border-gray-400 rounded-2xl p-6 sm:p-8 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/30 dark:hover:bg-darkHover transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold font-Ovo text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-rose-600 dark:text-rose-400 font-medium text-base mt-1">
                  {item.company}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:text-right">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-800/40">
                  {item.duration}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  {item.location}
                </span>
              </div>
            </div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-Ovo">
              Responsibilities
            </h4>
            <ul className="space-y-2.5">
              {item.responsibilities.map((resp, rIdx) => (
                <li key={rIdx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-Ovo">
                  <span className="inline-block w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0"></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience