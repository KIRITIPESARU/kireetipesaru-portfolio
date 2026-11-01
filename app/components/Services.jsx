// src/components/Services.jsx
import React from 'react'
import Image from 'next/image'
import { serviceData, assets } from '@/assets/assets'

const colorStyles = [
  {
    card:      'border-emerald-200/60 dark:border-emerald-800/30 hover:border-emerald-400 dark:hover:border-emerald-500',
    dot:       'bg-emerald-500',
    titleText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    glow:      'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20',
  },
  {
    card:      'border-violet-200/60 dark:border-violet-800/30 hover:border-violet-400 dark:hover:border-violet-500',
    dot:       'bg-violet-500',
    titleText: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
    glow:      'hover:shadow-violet-100 dark:hover:shadow-violet-900/20',
  },
  {
    card:      'border-amber-200/60 dark:border-amber-800/30 hover:border-amber-400 dark:hover:border-amber-500',
    dot:       'bg-amber-500',
    titleText: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
    glow:      'hover:shadow-amber-100 dark:hover:shadow-amber-900/20',
  },
  {
    card: 'border-rose-200/60 dark:border-rose-800/30 hover:border-rose-400 dark:hover:border-rose-500',
    // iconBg: 'bg-rose-50 dark:bg-rose-950/40',
    dot: 'bg-rose-500',
    titleText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    glow: 'hover:shadow-rose-100 dark:hover:shadow-rose-900/20',
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-8 font-Ovo">
        I specialize in building responsive React applications, integrating REST APIs, developing reusable UI components, and supporting reliable frontend experiences across devices.
      </p>
      <div className="grid grid-cols-auto gap-6 my-6">
        {serviceData.map(({ icon, title, description, link }, index) => {
          const c = colorStyles[index % colorStyles.length];
          return (
            <div key={index}
              className={`group border bg-white dark:bg-gray-900/60 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${c.card} ${c.glow}`}>
              <Image src={icon} alt={title} className="w-10" />
              <h3 className={`text-lg my-4 text-gray-700 dark:text-gray-200 font-Ovo transition-colors duration-200 ${c.titleText}`}>{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-5 flex-1">{description}</p>
              {link && (
                <a href={link} className="flex items-center gap-2 text-sm mt-5">
                  Read More <Image src={assets.right_arrow} alt="arrow" className="w-4" />
                </a>
              )}
              {/* Bottom accent dot */}
              <div className={`mt-6 w-6 h-1 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Services