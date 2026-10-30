// app/components/Skills.jsx
import React from 'react';
import { skillsData } from '@/assets/assets';

// Rich 6-color palette with hover borders, icon bg tints, title transitions & per-color glow
const colorMap = {
  rose: {
    card:         'border-rose-200/60 dark:border-rose-800/30 hover:border-rose-400 dark:hover:border-rose-500',
    iconBg:       'bg-rose-50 dark:bg-rose-950/40',
    icon:         'text-rose-500',
    dot:          'bg-rose-500',
    titleText:    'text-rose-600 dark:text-rose-400 group-hover:text-rose-600 dark:group-hover:text-rose-400',
    glow:         'hover:shadow-rose-100 dark:hover:shadow-rose-900/20',
    proficient:   'bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-400/30',
    // intermediate: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300/40',
  },
  indigo: {
    card:         'border-indigo-200/60 dark:border-indigo-800/30 hover:border-indigo-400 dark:hover:border-indigo-500',
    iconBg:       'bg-indigo-50 dark:bg-indigo-950/40',
    icon:         'text-indigo-500',
    dot:          'bg-indigo-500',
    titleText:    'text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    glow:         'hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20',
    proficient:   'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-400/30',
    // intermediate: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300/40',
  },
  emerald: {
    card:         'border-emerald-200/60 dark:border-emerald-800/30 hover:border-emerald-400 dark:hover:border-emerald-500',
    iconBg:       'bg-emerald-50 dark:bg-emerald-950/40',
    icon:         'text-emerald-500',
    dot:          'bg-emerald-500',
    titleText:    'text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    glow:         'hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20',
    proficient:   'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-400/30',
    // intermediate: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300/40',
  },
};

const LevelBadge = ({ level, colors }) => {
  const cls =
    level === 'Proficient'
      ? `text-xs font-medium px-2 py-0.5 rounded-full border ${colors.proficient}`
      : `text-xs font-medium px-2 py-0.5 rounded-full border ${colors.intermediate}`;
  return <span className={cls}>{level}</span>;
};

const Skills = () => {
  return (
    <section id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400">What I Work With</h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo text-gray-800 dark:text-white">Technical Skills</h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-10 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
        A focused set of technologies I use in real projects and can confidently
        discuss in depth — backed by hands-on professional and project experience.
      </p>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData.map((group, gi) => {
          const c = colorMap[group.color] ?? colorMap.indigo;
          return (
            <div key={gi} className={`group rounded-2xl border bg-white dark:bg-gray-900/60 p-6 flex flex-col gap-5 cursor-default hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${c.card} ${c.glow}`}>
              {/* Card Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-white/10">
                <span className={`flex items-center justify-center w-10 h-10 rounded-xl text-xl ${c.iconBg} ${c.icon}`}>
                  {group.icon}
                </span>
                <h3 className={`text-lg font-semibold font-Ovo transition-colors duration-200 ${c.titleText}`}>
                  {group.category}
                </h3>
              </div>

              {/* Skill List */}
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill, si) => (
                  <li key={si} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200 font-Ovo">
                        {skill.name}
                      </span>
                    </div>
                    {/* <LevelBadge level={skill.level} colors={c} /> */}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;