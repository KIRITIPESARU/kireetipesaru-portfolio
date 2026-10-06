// src/assets/assets.js
import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import firebase from './firebase.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import phone_call from './phone-call.png';
import google_maps from './google-maps.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import git from './git.png';
import github from './github.png';
import Vercel from './Vercel.png';
import vscode from './vscode.png';
import NPM from './NPM.png';
import Postman from "./Postman.png";
import figma from './figma.png';
import Build_Your_Own_Static_Website from './Certifications/Build_Your_Own_Static_Website.jpg';
import DOM_and_Events from './Certifications/DOM_and_Events.jpg';
import Infosys_Springboard_HTML5 from './Certifications/Infosys_Springboard_HTML5.jpg';
import Infosys_Springboard_Advanced_Function_Operations from './Certifications/Infosys_Springboard_Advanced_Function_Operations.jpg';
import Certificate_Udemy from './Certifications/Certificate_Udemy.jpg';
import my_sql_logo from './my_sql_logo.png';
import my_sql from './my_sql.png';
import JavaScript from './JavaScript.png';
import Java from './Java.png';
import HTML_5 from './HTML_5.png';
import CSS_3 from './CSS_3.png';
import BootStrap_logo from './BootStrap_logo.png';
import React_Js from './React_Js.png';
import duolingo from './duolingo.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import facebook from './facebook.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode, NPM, Postman,
    firebase,
    figma,
    git, github, Vercel,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark, phone_call, google_maps,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    DOM_and_Events,
    Build_Your_Own_Static_Website,
    Infosys_Springboard_HTML5,
    Infosys_Springboard_Advanced_Function_Operations,
    Certificate_Udemy,
    my_sql_logo, my_sql, JavaScript, Java, HTML_5, CSS_3, BootStrap_logo, React_Js,
    duolingo, instagram, linkedin, twitter, facebook
};

export const workData = [
    {
        title: 'AI Recruitment & HR Automation Platform',
        Category: 'React.js • FastAPI • Bootstrap 5 • REST APIs',
        description: 'Recruitment and HRMS platform featuring attendance, leave, payroll, onboarding, analytics dashboards, and role-based authentication.',
        bgImage: '/work-2.png',
    },
    {
        title: 'Hospital Management System',
        Category: 'React.js • React Native • FastAPI',
        description: 'Hospital management platform with role-based dashboards, appointment scheduling, responsive interfaces, and AI-powered symptom analysis.',
        bgImage: '/work-1.png',
    },
    {
        title: 'Institute Web Platform',
        Category: 'React.js • FastAPI • JWT • REST APIs',
        description: 'Responsive institute platform with admin dashboard, CRUD operations, analytics views, JWT authentication, and role-based access.',
        bgImage: '/work-3.png',
    },
    {
        title: 'Onboarding Form',
        Category: 'React.js • JavaScript',
        description: 'Multi-step onboarding form with validation, responsive UI, and localStorage-based data persistence.',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Frontend Development', description: 'Building responsive and user-friendly web applications using React.js, JavaScript, HTML5, and CSS3.', link: '' },
    // Building responsive and user-friendly web applications using React.js, JavaScript, HTML5, and CSS3.
    { icon: assets.mobile_icon, title: 'React.js Development', description: 'Developing reusable components, dynamic interfaces, and scalable React.js applications using modern frontend practices.', link: '' },
    // Developing reusable components, dynamic interfaces, and scalable React.js applications with modern frontend practices.
    { icon: assets.ui_icon, title: 'REST API Integration', description: 'Integrating REST APIs to fetch, manage, and display dynamic application data with proper error handling.', link: '' },
    // Integrating REST APIs to fetch, manage, and display dynamic data with proper loading and error handling.
    { icon: assets.graphics_icon, title: 'UI & Application Support', description: 'Creating responsive and user-friendly interfaces that work smoothly across desktop, tablet, and mobile devices.', link: '' },
    // Creating responsive and accessible interfaces that provide a consistent experience across desktop, tablet, and mobile devices.
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Java' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Information Technology(IT)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 6 projects' }
];

export const toolsData = [
    // assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
    assets.git, assets.github, assets.vscode, assets.Vercel, assets.NPM, assets.Postman, assets.figma
];

export const experienceData = [
    {
        title: 'Associate Software Engineer',
        company: 'Levitica Technologies Pvt. Ltd.',
        employmentType: 'Full-time',
        duration: 'Mar 2025 – Aug 2026',
        location: 'Hyderabad, India',
        responsibilities: [
            'Developed and maintained responsive web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.',
            'Integrated RESTful APIs and implemented dynamic data rendering in frontend applications.',
            'Collaborated with backend and QA teams to identify, debug, and resolve application issues.',
            'Worked on UI enhancements, performance improvements, and responsive design implementation.',
            'Provided application-level technical support and troubleshooting for client-reported issues.',
            'Participated in code reviews, bug tracking, testing, and deployment activities.',
            'Utilized Git and GitHub for version control and collaborative development.',
            'Started as a Frontend Developer Intern and progressed to the Associate Software Engineer role, gaining hands-on experience in modern frontend development.'
        ]
    }
];

export const certificationData = [
    {
        title: 'Build Your Own Static Website',
        issuer: 'NxtWave',
        description: 'Fundamentals of HTML, CSS, Responsive Web Design, and Bootstrap for constructing modern responsive static websites.',
        image: Build_Your_Own_Static_Website,
        tags: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design']
    },
    {
        title: 'DOM Manipulation & Dynamic Web Applications',
        issuer: 'Infosys Springboard',
        description: 'Hands-on training in JavaScript DOM manipulation, event listeners, array methods, and dynamic interactive user interfaces.',
        image: DOM_and_Events,
        tags: ['JavaScript', 'DOM', 'Events', 'ES6']
    },
    {
        title: 'HTML5 Course Completion',
        issuer: 'Infosys Springboard',
        description: 'Certification covering modern HTML5 semantics, structural tags, web forms, and accessibility best practices.',
        image: Infosys_Springboard_HTML5,
        tags: ['HTML5', 'Semantic HTML', 'Web Standards']
    },
    {
        title: 'Advanced Function Operations in JavaScript',
        issuer: 'Infosys Springboard',
        description: 'Advanced JavaScript paradigms including functional programming, higher-order functions, closures, and async operations.',
        image: Infosys_Springboard_Advanced_Function_Operations,
        tags: ['JavaScript', 'Functional Programming', 'ES6+']
    },
    {
        title: 'Web Development Certification',
        issuer: 'Udemy',
        description: 'Comprehensive course certification covering essential frontend technologies and modern web development practices.',
        image: Certificate_Udemy,
        tags: ['Web Development', 'Frontend', 'React.js']
    }
];

export const educationData = [
    {
        degree: 'Bachelor of Technology (B.Tech)',
        institution: 'Malla Reddy Institute of Technology and Science',
        department: 'Information Technology',
        score: 'CGPA: 6.28 | 2020 – 2023',
    },
    {
        degree: 'Diploma in AEI',
        institution: 'Government Polytechnic College, Bellampally',
        department: 'Applied Electronics and Instrumentation Engineering',
        score: 'Percentage: 61.89% | 2016 – 2019',
    },
    // {
    //     degree: 'SSC',
    //     institution: 'Siddhartha Gurkula High School',
    //     score: 'CGP: 9.2 (Out of 10.0)',
    //     duration: '2016',
    //     location: 'Warangal, India'
    //     // location: 'Chennaraopet, India'
    // }
];