import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-10">
        <div className="text-center sm:flex item-center justify-center border-t border-gray-400 mx-[10%] py-6 mt-6">
            <p>&copy; {new Date().getFullYear()} Kireeti Pesaru. All rights reserved.</p>
            <ul className="flex items-center justify-center gap-4 mt-4 sm:mt-0 sm:ml-4">
                {/* <li>
                    <a target="_blank" href="https://www.linkedin.com/in/kireeti-pesaru-4b3b3b2b/" alt="LinkedIn">
                        <Image src={assets.linkedin} alt="LinkedIn" className="w-6" />
                    </a>
                </li> */}<li>
                    <a target="_blank" href="https://x.com/KireetiPesaru" alt="Twitter">
                        <Image src={assets.twitter} alt="Twitter" className="w-6" />
                    </a>
                </li><li>
                    <a target="_blank" href="https://www.facebook.com/kireeti.pesaru" alt="Facebook">
                        <Image src={assets.facebook} alt="Facebook" className="w-6" />
                    </a>
                </li><li>
                    <a target="_blank" href="https://www.instagram.com/kittu_pesaru?stkn=cXRmM2JuZHVzcTZs" alt="Instagram">
                        <Image src={assets.instagram} alt="Instagram" className="w-6" />
                    </a>
                </li><li>
                    <a target="_blank" href="https://www.duolingo.com/profile/KireetiPesaru" alt="Duolingo">
                        <Image src={assets.duolingo} alt="Duolingo" className="w-6" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer