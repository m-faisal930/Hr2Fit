
// src/components/PageHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Briefcase, MapPin, Calendar, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/**
 * @param {{ breadcrumbs: { label: string, href: string }[] }} props
 */
export default function PageHero({ breadcrumbs }) {
  const { colors } = useTheme();
  
  return (
    <section id="page-hero" className={`relative ${colors.bgSecondary} py-3 overflow-hidden`}>

      <div className="relative z-10 flex justify-start md:pl-25 pt-10">
        {/* Flowbite‐style breadcrumb */}
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            {breadcrumbs.map((crumb, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={crumb.href} className="inline-flex items-center">
                  {isFirst ? (
                    // First item uses the home icon + link
                    <Link
                      to={crumb.href}
                      className={`inline-flex items-center text-sm font-medium ${colors.textSecondary} ${colors.hoverText}`}
                    >
                      <svg
                        className="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      {crumb.label}
                    </Link>
                  ) : (
                    // Subsequent items with arrow + link/text
                    <div className="flex items-center">
                      <svg
                        className={`rtl:rotate-180 w-3 h-3 ${colors.textSecondary} ${colors.hoverText} mx-1`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      {isLast ? (
                        <span className={`ms-1 text-sm font-medium md:ms-2 ${colors.textSecondary} ${colors.hoverText}`}>
                          {crumb.label}
                        </span>
                      ) : (
                        <Link
                          to={crumb.href}
                          className={`ms-1 text-sm font-medium ${colors.textSecondary} ${colors.hoverText} md:ms-2`}
                        >
                          {crumb.label}
                        </Link>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
