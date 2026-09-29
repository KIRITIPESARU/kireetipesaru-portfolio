// src/components/Services.jsx
import React from 'react'
import Image from 'next/image'
import { serviceData } from '@/assets/assets'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Frontend Developer with 1.7 years of experience specializing in React.js, JavaScript, responsive UI development, 
        and REST API integration. Strong foundation in Core Java, OOPs, and MySQL, with hands-on experience in debugging, 
        application support, and building scalable web experiences.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10"> 
        {serviceData.map(({icon, title, description, link}, index) => (
          <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">{/* bg-white rounded-lg shadow-md p-6 text-center */}
            <Image src={icon} alt={title} className="w-10" /> {/* mx-auto mb-4 */}
            <h3 className="text-lg my-4 text-gray-700">{title}</h3> {/* <h3 className="text-xl font-bold mb-2">{title}</h3> */}
            <p className="text-sm text-gray-600 leading-5">{description}</p> {/* <p className="text-gray-600">{description}</p> */}
            {link && (
              <a href={link} className="flex items-center gap-2 text-sm mt-5"> {/* text-blue-500 hover:underline */}
                Read More <Image src={assets.right_arrow} alt="arrow" className="w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services