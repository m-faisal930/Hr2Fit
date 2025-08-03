// src/components/StatsSection.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

export default function StatsSection() {
  // triggerCount becomes true once the section is ≥30% visible
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const { colors } = useTheme();

  const stats = [
    { label: 'Recruiters Globally', value: 200, suffix: '+' },
    { label: 'Job Seekers Onboarded', value: 12000, suffix: '+' },
    { label: 'Vacancies Onboarded', value: 5000, suffix: '+' },
    { label: 'Placements Done', value: 500, suffix: '+' },
    { label: 'Satisfaction Rate', value: 95, suffix: '%' },
  ];

  return (
    <section id="stats" ref={ref} className={`${colors.bgSecondary} py-12`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`font-work text-3xl sm:text-4xl font-bold ${colors.textPrimary} text-center mb-8`}>
          From startups to large enterprises, our team has successfully hired
          500+ professionals worldwide for top global brands
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(({ label, value, suffix }, i) => (
            <div
              key={i}
              className={`${colors.cardBg} ${colors.cardBorder} border rounded-2xl p-6 flex flex-col items-center text-center`}
            >
              <span className={`text-4xl sm:text-5xl font-bold ${colors.textPrimary}`}>
                {inView ? (
                  <CountUp end={value} duration={2} suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </span>
              <span className={`mt-2 text-sm italic ${colors.textSecondary}`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
