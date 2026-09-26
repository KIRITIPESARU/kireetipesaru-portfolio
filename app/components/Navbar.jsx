// app\components\Navbar.jsx
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if(scrolly > 50) {
  //       setIsScroll(true)
  //     }else {
  //       setIsScroll(false)
  //     }
  //   })
  // })
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScroll(true);
  //     }else {
  //       setIsScroll(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      {/* Background Image Header Pattern - hidden in dark mode */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] pointer-events-none dark:hidden">
        <Image src={assets.header_bg_color} alt="Header Background" className="w-full" priority />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/50 dark:shadow-white/20' : ''
        }`}>
        {/* Logo */}
        <a href="#top" className="shrink-0">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo" className="w-28 cursor-pointer shrink-0"
          />
        </a>

        {/* Desktop Navbar Menu Options Pill */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-8 lg:px-12 py-3 list-none transition-all duration-300 ${
            isScroll
              ? ''
              : 'bg-white/50 backdrop-blur-md shadow-sm border border-gray-500/20 dark:border dark:border-white/50 dark:bg-transparent'
          }`}>
          <li>
            <a href="#top" className="font-Ovo text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors whitespace-nowrap">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors whitespace-nowrap">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors whitespace-nowrap">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors whitespace-nowrap">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo text-gray-800 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors whitespace-nowrap">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right Action Icons & Buttons */}
        <div className="shrink-0 flex items-center gap-4">
          {/* Dark / Light Mode Toggle Button */}
          {setIsDarkMode && (
            <button onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label="Toggle Theme"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="theme toggle" className="w-6 cursor-pointer"
              />
            </button>
          )}

          {/* Styled Contact Pill Button */}
          <a className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 text-gray-800 dark:text-white rounded-full font-Ovo hover:bg-lightHover dark:hover:bg-darkHover transition dark:border-white/50 whitespace-nowrap"
            href="#contact">
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Contact Arrow" className="w-3 shrink-0"/>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button className="block md:hidden p-2" onClick={openMenu} aria-label="Open Navigation Menu">
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Open Menu" className="w-6 cursor-pointer"/>
          </button>
        </div>

        {/* Mobile Slide-out Menu Drawer */}
        <ul className="flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50/95 backdrop-blur-md transition-transform duration-500 dark:bg-darkHover/95 dark:text-white shadow-2xl list-none"
          ref={sideMenuRef}>
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5 cursor-pointer hover:opacity-75 transition"/>
          </div>

          <li>
            <a href="#top" className="font-Ovo text-lg text-gray-800 dark:text-white" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo text-lg text-gray-800 dark:text-white" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo text-lg text-gray-800 dark:text-white" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo text-lg text-gray-800 dark:text-white" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo text-lg text-gray-800 dark:text-white" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;