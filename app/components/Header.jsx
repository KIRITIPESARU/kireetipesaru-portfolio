import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
    return (
        <div className="w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
            <div>
                <Image src={assets.profile_img} alt="Profile" className="w-32 rounded-full" />
            </div>
            <h3 className="flex items-end text-xl md:text-2xl mb-3 font-ovo">
                Hi! I'm Kireeti Pesaru <Image src={assets.hand_icon} alt="Hand_Icon" className="w-6 h-6" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[62px] font-ovo font-bold">
                Frontend Web Developer | React.js Developer
            </h1>
            <p className="max-w-2x1 mx-auto font-Ovo">
                Frontend Developer with 1.6 years of hands-on experience building responsive and user-friendly web applications using React.js, JavaScript, 
                HTML5, CSS3, and Tailwind CSS. Skilled in REST API integration, UI development, debugging, and application support, with a strong foundation 
                in Core Java, OOPs, Collections, Exception Handling, and MySQL. Passionate about creating efficient, scalable, and intuitive user experiences 
                while continuously growing technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact" className="px-10 py-3 border border-e-white rounded-full bg-black text-white flex items-center gap-2">
                    Contact Me <Image src={assets.right_arrow_white} alt="Right Arrow" className="w-4" />
                </a>
                <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2">
                    My Resume <Image src={assets.download_icon} alt="Download Icon" className="w-4" />
                </a>
            </div>
        </div>
    )
}

export default Header