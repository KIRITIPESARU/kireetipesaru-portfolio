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
    formData.append("access_key", "25e62058-81c5-4b20-a74a-639dbb495d18");
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
      <h4 className="text-center mb-2 text-lg font-Ovo">Get In Touch</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo">Contact Me</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-8 font-Ovo">
        I am open to frontend development opportunities and projects. Feel free to get in touch if you would like to discuss a project or professional opportunity.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto mt-10">
        <div className="flex-1 w-full flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          {/* Social media links */}
          {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-36 mb-2" /> */}
          <div className="w-max flex items-center gap-2">
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Mail Icon" className="w-6" />
            kireetipesaru@gmail.com
          </div>
          <div className="w-max flex items-center gap-2">
            <Image src={assets.linkedin} alt="LinkedIn Icon" className="w-6" />
            <a target="_blank" href="https://www.linkedin.com/in/kireeti-pesaru-8aab06228/?isSelfProfile=true" alt="LinkedIn" >
              KireetiPesaru
            </a>
          </div>
          <div className="w-max flex items-center gap-2">
            <Image src={assets.github} alt="GitHub Icon" className="w-6" />
            <a target="_blank" href="https://github.com/KireetiPesaru" alt="GitHub" >
              KireetiPesaru
            </a>
          </div>
          <div className="w-max flex items-center gap-2">
            <Image src={isDarkMode ? assets.phone_call : assets.phone_call} alt="Phone Icon" className="w-6" />
            +91 950 256 8744
          </div>
          <div className="w-max flex items-center gap-2 text-left">
            <Image src={assets.google_maps} alt="Google Maps Icon" className="w-6 shrink-0" />
            {/* ECIL, Hyderabad, Telangana, India */}
            Durgam Cheruvu, Hyderabad, Telangana, India
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
            <input className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="text" id="name" name="name" placeholder="Enter Your Name" required />
            {/* w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 */}
            <input className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white" type="email" id="email" name="email" placeholder="Enter Your Email" required />
          </div>
          <textarea className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-4" rows="6" placeholder="Enter Your Message" name="message" required></textarea>
          <button type="submit" className="px-8 py-3 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full hover:bg-black duration-500 mx-auto" >
            Send Message
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>
          <p className="mt-4">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;