// src/app/components/Header.jsx
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
    return (
        <div id="home" className="w-11/12 max-w-5xl mx-auto min-h-screen pt-28 pb-12 flex flex-col justify-center">
            {/* Two-column layout: image left, text right */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left — Profile Image */}
                <div className="w-56 sm:w-64 md:w-72 lg:w-80 shrink-0 rounded-3xl overflow-hidden shadow-lg dark:shadow-white/10 border border-gray-200 dark:border-white/10">
                    <Image src={assets.user_image} alt="user" className="w-full rounded-3xl object-cover" />
                </div>

                {/* Right — Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                    <h3 className="flex items-center gap-2 text-2xl font-Ovo">
                        Hi! I&apos;m Kireeti Pesaru{' '}
                        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6 h-6" />
                    </h3>

                    <h1 className="text-4xl sm:text-5xl font-Ovo leading-tight">
                        Frontend Developer
                    </h1>

                    <p className="max-w-xl font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
                        Frontend Developer with 1.5+ years of professional experience building
                        responsive web applications using React.js, JavaScript, HTML5, CSS3, and
                        Tailwind CSS. Experienced in REST API integration, reusable components,
                        dynamic UI development, debugging, and application support.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-2">
                        <a
                            href="#contact"
                            className="px-10 py-3 border border-e-white rounded-full bg-black text-white flex items-center gap-2"
                        >
                            Contact Me{' '}
                            <Image src={assets.right_arrow_white} alt="Right Arrow" className="w-4" />
                        </a>
                        <a
                            href="/Pesaru_Kireeti.pdf"
                            download
                            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                        >
                            My Resume{' '}
                            <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header