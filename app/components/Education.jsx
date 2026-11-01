// app/components/Education.jsx
'use client';
import React, { useState } from 'react';
import { educationData, certificationData, assets } from '@/assets/assets';
import Image from 'next/image';

const colorStyles = {
  indigo: {
    card:      'border-indigo-200/60 dark:border-indigo-800/30 hover:border-indigo-400 dark:hover:border-indigo-500',
    dot:       'bg-indigo-500',
    titleText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    accent:    'text-indigo-600 dark:text-indigo-400',
    glow:      'hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20',
  },
  emerald: {
    card: 'border-emerald-200/60 dark:border-emerald-800/30 hover:border-emerald-400 dark:hover:border-emerald-500',
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    dot: 'bg-emerald-500',
    titleText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    glow: 'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20',
  },
};

const Education = ({ isDarkMode }) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const edu = colorStyles.indigo;
  const cert = colorStyles.emerald;

  return (
    <div id="education" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Academic & Achievements</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo">Education & Certifications</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-8 font-Ovo">
        {/* Here is a summary of my academic background and professional certifications. */}
        A strong combination of academic qualifications and professional certifications that reflects my technical foundation, continuous learning, and commitment to career growth.
      </p>
      <div className="flex flex-col lg:flex-row gap-10 mt-12 w-full">
        
        {/* Left Side: Education */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl font-Ovo mb-6 font-semibold text-center lg:text-left dark:text-white">Education</h3>
          <div className="flex flex-col gap-6">
            {educationData.map((item, index) => (
              <div key={index}
                className={`group border bg-white dark:bg-gray-900/60 rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${edu.card} ${edu.glow}`}>
                <div className="flex flex-col gap-2 mb-2 pb-2">
                  <h3 className={`text-xl sm:text-2xl font-semibold font-Ovo text-gray-800 dark:text-white transition-colors duration-200 ${edu.titleText}`}>
                    {item.degree}
                  </h3>
                  <p className={`font-medium text-base ${edu.accent}`}>
                    {item.institution}
                  </p>
                  {item.department && (
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                      {item.department}
                    </p>
                  )}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 font-Ovo mt-1 border-t border-gray-200 dark:border-gray-700/50 pt-3 flex-1">
                  {item.score}
                </div>
                {/* Bottom accent dot */}
                <div className={`mt-6 w-6 h-1 rounded-full ${edu.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Certifications */}
        <div className="flex-1 w-full">
          <h3 className="text-2xl font-Ovo mb-6 font-semibold text-center lg:text-left dark:text-white">Certifications</h3>
          <div className="flex flex-col gap-4">
            {certificationData.map((c, index) => (
              <div key={index} onClick={() => setSelectedCert(c)}
                className={`group cursor-pointer border bg-white dark:bg-gray-900/60 rounded-xl p-4 sm:p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${cert.card} ${cert.glow}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${cert.dot} group-hover:scale-150 transition-transform duration-300 shrink-0`}></div>
                    <span className={`font-Ovo text-xs sm:text-sm font-medium text-gray-800 dark:text-white transition-colors ${cert.titleText}`}>
                      {c.title}
                    </span>
                  </div>
                  <div className={`flex items-center gap-2 text-xs font-semibold ${cert.accent} group-hover:underline shrink-0`}>
                    <span>View</span>
                    <Image src={assets.right_arrow} alt="Arrow" className="w-3" />
                  </div>
                </div>
                {/* Bottom accent dot */}
                <div className={`mt-4 w-6 h-1 rounded-full ${cert.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* High Resolution Lightbox Modal for Certificate */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn" onClick={() => setSelectedCert(null)}>
          <div className="relative max-w-4xl w-full bg-white dark:bg-darkTheme border border-gray-300 dark:border-white/20 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-xl sm:text-2xl font-semibold font-Ovo text-gray-900 dark:text-white pr-4">
                {selectedCert.title}
              </h3>
              <button onClick={() => setSelectedCert(null)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full h-[60vh] max-h-[600px] bg-black/5 flex items-center justify-center p-4">
              <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;