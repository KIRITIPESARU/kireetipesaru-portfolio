// app/components/Experience.jsx
import React from 'react'
import { experienceData } from '@/assets/assets'

const colorStyles = {
  rose: {
    card:      'border-rose-200/60 dark:border-rose-800/30 hover:border-rose-400 dark:hover:border-rose-500',
    dot:       'bg-rose-500',
    titleText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    glow:      'hover:shadow-rose-100 dark:hover:shadow-rose-900/20',
  },
};

const Experience = () => {
  const c = colorStyles.rose;
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
            className={`group border bg-white dark:bg-gray-900/60 rounded-2xl p-6 sm:p-8 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${c.card} ${c.glow}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className={`text-xl sm:text-2xl font-semibold font-Ovo text-gray-800 dark:text-white transition-colors duration-200 ${c.titleText}`}>
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
            <ul className="space-y-2.5 flex-1">
              {item.responsibilities.map((resp, rIdx) => (
                <li key={rIdx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-Ovo">
                  <span className={`inline-block w-2 h-2 rounded-full ${c.dot} mt-1.5 shrink-0`}></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            {/* Bottom accent dot */}
            <div className={`mt-6 w-6 h-1 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience