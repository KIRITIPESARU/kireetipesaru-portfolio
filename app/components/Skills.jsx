// app/components/Skills.jsx
import React from 'react';
import { skillsData } from '@/assets/assets';

// Color maps for the three themes (rose / indigo / emerald)
const colorMap = {
  rose: {
    header:    'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800/40',
    icon:      'text-rose-500',
    title:     'text-rose-600 dark:text-rose-400',
    badge:     'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-700/50',
    dot:       'bg-rose-500',
    proficient:'bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-400/30',
    intermediate:'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300/40',
  },
  indigo: {
    header:    'bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800/40',
    icon:      'text-indigo-500',
    title:     'text-indigo-600 dark:text-indigo-400',
    badge:     'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/50',
    dot:       'bg-indigo-500',
    proficient:'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-400/30',
    intermediate:'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300/40',
  },
  emerald: {
    header:    'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40',
    icon:      'text-emerald-500',
    title:     'text-emerald-600 dark:text-emerald-400',
    badge:     'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
    dot:       'bg-emerald-500',
    proficient:'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-400/30',
    intermediate:'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300/40',
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
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-gray-400">
        What I Work With
      </h4>
      <h2 className="text-center mb-2 text-5xl font-Ovo text-gray-800 dark:text-white">
        Technical Skills
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-2 mb-10 font-Ovo text-gray-600 dark:text-gray-300 leading-relaxed">
        A focused set of technologies I use in real projects and can confidently
        discuss in depth — backed by hands-on professional and project experience.
      </p>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillsData.map((group, gi) => {
          const c = colorMap[group.color];
          return (
            <div
              key={gi}
              className={`rounded-2xl border p-6 flex flex-col gap-5 cursor-default hover:-translate-y-1 hover:shadow-lg transition-all duration-300 dark:hover:shadow-white/10 ${c.header}`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-white/10">
                <span className={`text-2xl ${c.icon}`}>{group.icon}</span>
                <h3 className={`text-lg font-semibold font-Ovo ${c.title}`}>
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
                    <LevelBadge level={skill.level} colors={c} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-Ovo">Proficiency key:</p>
        <span className="text-xs font-medium px-3 py-1 rounded-full border bg-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-400/30">
          Proficient — used daily in professional work
        </span>
        <span className="text-xs font-medium px-3 py-1 rounded-full border bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300/40">
          Intermediate — applied in projects, can discuss confidently
        </span>
      </div>
    </section>
  );
};

export default Skills;
