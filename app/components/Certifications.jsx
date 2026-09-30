// app/components/Certifications.jsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { certificationData, assets } from '@/assets/assets';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div id="certifications" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Verified Credentials</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo">My Certifications</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        A showcase of my professional certifications, continuous learning accomplishments, and verified skills in frontend development and modern web technologies.
      </p>

      {/* Grid of Certificate Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {certificationData.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="group border border-gray-400 dark:border-white/30 rounded-2xl overflow-hidden cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
          >
            {/* Image Preview Container */}
            <div className="relative w-full h-48 sm:h-52 bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay Badge */}
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-darkHover/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 dark:border-white/20 text-xs font-semibold text-gray-800 dark:text-white shadow-sm">
                {cert.issuer}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold font-Ovo text-gray-800 dark:text-white mb-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-Ovo leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Certificate Action */}
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-600 dark:text-rose-400 group-hover:underline">
                  <span>View Certificate</span>
                  <Image src={assets.right_arrow} alt="Arrow" className="w-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* High Resolution Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-darkTheme border border-gray-300 dark:border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-rose-600 dark:text-rose-400 font-Ovo">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold font-Ovo text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full max-h-[65vh] h-[450px] bg-black/5 flex items-center justify-center p-2">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-darkHover/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-300 font-Ovo max-w-2xl">
                {selectedCert.description}
              </p>
              <div className="flex flex-wrap gap-2 shrink-0">
                {selectedCert.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;