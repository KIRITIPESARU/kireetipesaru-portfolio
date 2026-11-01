// src/app/components/Header.jsx
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const colorStyles = {
  rose: {
    card:  'hover:border-rose-400 dark:hover:border-rose-500',
    dot:   'bg-rose-500',
    glow:  'hover:shadow-rose-100 dark:hover:shadow-rose-900/20',
  },
  indigo: {
    card:  'hover:border-indigo-400 dark:hover:border-indigo-500',
    dot:   'bg-indigo-500',
    glow:  'hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20',
  },
};

const Header = () => {
    const r = colorStyles.rose;
    const i = colorStyles.indigo;
    return (
        <div id="home" className="w-11/12 max-w-5xl mx-auto min-h-screen pt-28 pb-12 flex flex-col justify-center">
            {/* Two-column layout: image left, text right */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left — Profile Image with rose hover glow + accent dot */}
                <div className={`group w-56 sm:w-64 md:w-72 lg:w-80 shrink-0 rounded-3xl overflow-hidden shadow-lg dark:shadow-white/10 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:shadow-xl flex flex-col ${r.card} ${r.glow}`}>
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl object-cover" />
                    {/* Bottom accent dot */}
                    {/* <div className={`w-6 h-1 rounded-full ${r.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300 mx-auto my-2`} /> */}
                </div>

                {/* Right — Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                    <h3 className="flex items-center gap-2 text-2xl font-Ovo">
                        Hi! I&apos;m Kireeti Pesaru
                        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6 h-6" />
                    </h3>
                    <h1 className="text-4xl sm:text-5xl font-Ovo leading-tight bg-gradient-to-r from-rose-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                        Frontend Developer
                    </h1>
                    <p className="max-w-xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
                        Frontend Developer with 1.5+ years of professional experience building
                        responsive web applications using React.js, JavaScript, HTML5, CSS3, and
                        Tailwind CSS. Experienced in REST API integration, reusable components,
                        dynamic UI development, debugging, and application support.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-2">
                        {/* Contact Me — rose glow */}
                        <a href="#contact" className={`group/btn px-10 py-3 border border-transparent rounded-full bg-black text-white flex items-center gap-2 transition-all duration-300 hover:shadow-lg ${r.glow}`}>
                            Contact Me
                            <Image src={assets.right_arrow_white} alt="Right Arrow" className="w-4" />
                        </a>
                        {/* My Resume — indigo hover border */}
                        <a href="/Pesaru_Kireeti.pdf" download className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 transition-all duration-300 hover:shadow-lg ${i.card} ${i.glow}`}>
                            My Resume
                            <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header