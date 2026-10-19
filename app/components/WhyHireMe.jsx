// app/components/WhyHireMe.jsx
import React from 'react';

const reasons = [
  {
    icon: '🖥️',
    title: 'Modern Frontend Development',
    description:
      'Hands-on experience building responsive, user-friendly web applications using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.',
    color: 'rose',
  },
  {
    icon: '🧩',
    title: 'Reusable & Maintainable Code',
    description:
      'Focus on developing reusable React components, structured code, and maintainable UI solutions that scale cleanly.',
    color: 'indigo',
  },
  {
    icon: '⚙️',
    title: 'REST API Integration',
    description:
      'Practical experience integrating REST APIs, handling dynamic data, and connecting frontend interfaces with backend services.',
    color: 'emerald',
  },
  {
    icon: '🔍',
    title: 'Problem-Solving Mindset',
    description:
      'Experience debugging application issues, improving UI usability, and providing reliable application support.',
    color: 'amber',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Experience collaborating with backend developers and QA teams on implementation, testing, bug fixing, and deployment activities.',
    color: 'violet',
  },
  {
    icon: '📈',
    title: 'Continuous Learning',
    description:
      'Strong foundation in Core Java, OOP, Collections, Exception Handling, SQL, and MySQL, with a commitment to continuously improving technical skills.',
    color: 'teal',
  },
];

const colorStyles = {
  rose: {
    card: 'border-rose-200/60 dark:border-rose-800/30 hover:border-rose-400 dark:hover:border-rose-500',
    iconBg: 'bg-rose-50 dark:bg-rose-950/40',
    dot: 'bg-rose-500',
    titleText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    glow: 'hover:shadow-rose-100 dark:hover:shadow-rose-900/20',
  },
  indigo: {
    card: 'border-indigo-200/60 dark:border-indigo-800/30 hover:border-indigo-400 dark:hover:border-indigo-500',
    iconBg: 'bg-indigo-50 dark:bg-indigo-950/40',
    dot: 'bg-indigo-500',
    titleText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    glow: 'hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20',
  },
  emerald: {
    card: 'border-emerald-200/60 dark:border-emerald-800/30 hover:border-emerald-400 dark:hover:border-emerald-500',
    iconBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    dot: 'bg-emerald-500',
    titleText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    glow: 'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20',
  },
  amber: {
    card: 'border-amber-200/60 dark:border-amber-800/30 hover:border-amber-400 dark:hover:border-amber-500',
    iconBg: 'bg-amber-50 dark:bg-amber-950/40',
    dot: 'bg-amber-500',
    titleText: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
    glow: 'hover:shadow-amber-100 dark:hover:shadow-amber-900/20',
  },
  violet: {
    card: 'border-violet-200/60 dark:border-violet-800/30 hover:border-violet-400 dark:hover:border-violet-500',
    iconBg: 'bg-violet-50 dark:bg-violet-950/40',
    dot: 'bg-violet-500',
    titleText: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
    glow: 'hover:shadow-violet-100 dark:hover:shadow-violet-900/20',
  },
  teal: {
    card: 'border-teal-200/60 dark:border-teal-800/30 hover:border-teal-400 dark:hover:border-teal-500',
    iconBg: 'bg-teal-50 dark:bg-teal-950/40',
    dot: 'bg-teal-500',
    titleText: 'group-hover:text-teal-600 dark:group-hover:text-teal-400',
    glow: 'hover:shadow-teal-100 dark:hover:shadow-teal-900/20',
  },
};

const WhyHireMe = () => {
  return (
    <section id="why-hire-me" className="w-full px-[12%] py-10 scroll-mt-20">

      {/* Section heading */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400">
        The Value I Bring
      </h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo text-gray-800 dark:text-white">
        Why Hire Me
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-12 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
        Here is what you can expect when you bring me onto your team — practical skills, a
        collaborative approach, and a genuine commitment to building quality products.
      </p>

      {/* Banner callout */}
      {/* <div className="max-w-5xl mx-auto mb-10 rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-r from-rose-50 via-white to-indigo-50 dark:from-rose-950/20 dark:via-darkTheme dark:to-indigo-950/20 px-8 py-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-2xl shadow-sm">
          💡
        </div>
        <div className="text-center sm:text-left">
          <p className="font-semibold font-Ovo text-gray-800 dark:text-white text-base">
            What You Can Expect
          </p>
          <p className="text-sm font-Ovo text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
            A frontend developer who shows up, writes clean code, asks the right questions,
            and keeps improving — every single day.
          </p>
        </div>
      </div> */}

      {/* Reason cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((item, index) => {
          const c = colorStyles[item.color];
          return (
            <div key={index} className={`group relative border rounded-2xl p-6 flex flex-col gap-4 bg-white dark:bg-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-default ${c.card} ${c.glow}`}>
              {/* Number badge */}
              <span className="absolute top-4 right-5 text-[11px] font-semibold tracking-widest text-gray-300 dark:text-white/15 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${c.iconBg}`}>
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className={`text-base font-semibold font-Ovo text-gray-800 dark:text-white transition-colors ${c.titleText}`}>
                  {item.title}
                </h3>
                <p className="text-sm font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent dot */}
              <div className={`mt-auto w-6 h-1 rounded-full ${c.dot} opacity-60 group-hover:opacity-100 group-hover:w-10 transition-all duration-300`} />
            </div>
          );
        })}
      </div>

      {/* CTA strip */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <a
          href="#contact"
          className="px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-Ovo text-sm font-medium hover:opacity-80 transition-opacity duration-300"
        >
          Let&apos;s Work Together
        </a>
      </div>
    </section>
  );
};

export default WhyHireMe;