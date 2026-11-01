// app\components\Contact.jsx
import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
// import { createLazyResult } from "next/dist/server/lib/lazy-result";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "f793dce5-1275-4341-b795-baa3c0323200");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Add contact information here */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">Get In Touch</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo dark:text-white">Contact Me</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-8 font-Ovo text-gray-600 dark:text-gray-400">
        I am open to frontend development opportunities and projects. Feel free
        to get in touch if you would like to discuss a project or professional
        opportunity.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto mt-10">
        <div className="flex-1 w-full flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          {/* Social media links */}
          {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-36 mb-2" /> */}
          {/* Email */}
          <div className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent hover:border-indigo-300 dark:hover:border-indigo-600
                          hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:translate-x-2 transition-all duration-300 ease-out cursor-default" >
            <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Mail Icon" className="w-6" />
            </span>
            <span className="text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 text-sm">
              kireetipesaru@gmail.com
            </span>
          </div>

          {/* LinkedIn */}
          <div className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent hover:border-blue-300 dark:hover:border-blue-600
                          hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:translate-x-2 transition-all duration-300 ease-out">
            <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={assets.linkedin}
                alt="LinkedIn Icon"
                className="w-6"
              />
            </span>
            <a target="_blank" href="https://www.linkedin.com/in/kireeti-pesaru-8aab06228/?isSelfProfile=true"
              className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm font-medium">
              LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent hover:border-gray-400 dark:hover:border-gray-500 
                          hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:translate-x-2 transition-all duration-300 ease-out">
            <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image src={assets.github} alt="GitHub Icon" className="w-6" />
            </span>
            <a target="_blank" href="https://github.com/KIRITIPESARU"
              className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-sm font-medium">
              GitHub
            </a>
          </div>

          {/* Phone */}
          <div className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent hover:border-emerald-300 dark:hover:border-emerald-600 
                          hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:translate-x-2 transition-all duration-300 ease-out cursor-default">
            <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image src={assets.phone_call} alt="Phone Icon" className="w-6" />
            </span>
            <span className="text-gray-700 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 text-sm">
              +91 950 256 8744
            </span>
          </div>

          {/* Location */}
          <div className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-transparent hover:border-rose-300 dark:hover:border-rose-600 
                          hover:bg-rose-50 dark:hover:bg-rose-950/30 hover:translate-x-2 transition-all duration-300 ease-out cursor-default">
            <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image src={assets.google_maps} alt="Google Maps Icon" className="w-6 shrink-0"/>
            </span>
            <span className="text-gray-700 dark:text-gray-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300 text-sm text-left">Durgam Cheruvu, Hyderabad, Telangana, India</span>
          </div>
          {/* <div className="w-max flex items-center gap-2">
            <Image src={assets.twitter} alt="Twitter Icon" className="w-6" />
            <a target="_blank" href="https://x.com/KireetiPesaru" alt="Twitter">
              KireetiPesaru
            </a>
          </div> */}
        </div>
        <form onSubmit={onSubmit} className="flex-1 w-full">
          <div className="grid grid-cols-auto gap-6 mb-4">
            <input type="text" id="name" name="name" placeholder="Enter Your Name" required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"/>
            {/* w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 */}
            <input type="email" id="email" name="email" placeholder="Enter Your Email" required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"/>
          </div>
          <textarea rows="6" placeholder="Enter Your Message" name="message" required
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 mb-4">
            </textarea>
          <button type="submit"
            className="px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 dark:bg-white dark:text-gray-900 text-white rounded-full hover:bg-black dark:hover:bg-gray-200 duration-500 mx-auto">
            Send Message
            <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt="" className="w-4"/>
          </button>
          <p className="mt-4 text-center text-gray-700 dark:text-gray-300">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;