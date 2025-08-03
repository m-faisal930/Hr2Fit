

// src/components/JobCard.jsx
import React from 'react'
import { Clock, Briefcase, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * @typedef Job
 * @property {string} id
 * @property {string} status
 * @property {string} title
 * @property {string} location
 * @property {string} type
 * @property {string} experience
 * @property {string} salary
 * @property {string} postedDate    ISO date string
 * @property {string[]} skills
 * @property {() => void} onView
 */

/**
 * @param {{ job: Job }} props
 */
const JobCard = ({ job }) => {
  const id = job._id;
 
  const {
    title,
    location,
    type,
    experience,
    salary,
    postedDate,
    skills = [],
    onView,
  } = job

  return (
    <div className="font-work group flex flex-col bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden">
      {job.status === 'active' ? (
        <Link to={`/jobs/${id}`}>
          {/* <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}

          {/* TITLE & LOCATION */}
          <div className="px-6 py-4 flex-1 space-y-1">
            <h3 className="text-xl font-semibold text-[#0041A8]">{title}</h3>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>

          {/* DETAILS */}
          <div className="px-6 space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1  rounded-sm   shadow-sm transition-colors group-hover:bg-gray-50">
                <Clock className="w-4 h-4" /> {type}
              </span>
              <span className="inline-flex items-center gap-1 bg-gray-100 text-dark text-sm font-medium px-3 py-1  rounded-sm  shadow-sm transition-colors group-hover:bg-gray-50">
                <Briefcase className="w-4 h-4" /> {experience} Level
              </span>
              <span className="inline-flex items-center gap-1 bg-gray-100 text-dark text-sm font-medium px-3 py-1  rounded-sm  shadow-sm transition-colors group-hover:bg-gray-50">
                {salary}
              </span>
            </div>
          </div>
          {/* SKILL TAGS */}
          <div className="px-6 py-4 bg-lightdiv flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill) => (
              // <span
              //   key={skill}
              //   className="bg-lightdiv text-dark text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors"
              // >
              //   {skill}
              // </span>
              <span className="bg-[#5F8DB8] text-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
                {skill}
              </span>
            ))}
          </div>
        </Link>
      ) : (
        <>
          {/* <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}

          {/* TITLE & LOCATION */}
          <div className="px-6 py-4 flex-1 space-y-1">
            <h3 className="text-xl font-semibold text-[#0041A8]">{title}</h3>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>

          {/* DETAILS */}
          <div className="px-6 space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 bg-gray-100  text-gray-800 text-sm font-medium px-3 py-1  rounded-sm   shadow-sm transition-colors group-hover:bg-gray-50">
                <Clock className="w-4 h-4" /> {type}
              </span>
              <span className="inline-flex items-center gap-1  text-dark text-sm font-medium px-3 py-1  rounded-sm  shadow-sm transition-colors group-hover:bg-gray-50">
                <Briefcase className="w-4 h-4" /> {experience}
              </span>
              <span className="inline-flex items-center gap-1  text-dark text-sm font-medium px-3 py-1  rounded-sm  shadow-sm transition-colors group-hover:bg-gray-50">
                {salary}
              </span>
            </div>
          </div>
          <div className="px-6 py-4 bg-lightdiv flex flex-wrap gap-2">
            {skills.slice(0, 4).map((skill) => (
              // <span
              //   key={skill}
              //   className="bg-lightdiv text-dark text-xs font-medium px-2.5 py-0.5 rounded-full transition-colors"
              // >
              //   {skill}
              // </span>
              <span className="bg-[#5F8DB8] text-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ">
                {skill}
              </span>
            ))}
          </div>
        </>
      )}

      {/* FOOTER */}
      <div className="mt-auto px-6 py-5 bg-white border-t border-gray-100 flex items-center justify-between transition-colors duration-300 group-hover:bg-gray-50">
        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
          <Calendar className="w-4 h-4" /> {postedDate}
        </span>

        {job.status === 'active' ? (
          <Link to={`/apply/${job.id}`}>
            <button
              // onClick={onView}
              className=" px-6 py-2 bg-buttons text-[#0041A8] hover:text-white  text-sm font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-[#0041A8] transform cursor-pointer"
            >
              Apply Now
            </button>
          </Link>
        ) : (
          <button
            disabled
            // onClick={onView}
            className=" px-6 py-2 bg-buttons text-gray-100 bg-gray-400   text-sm font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md  transform "
          >
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
}

export default JobCard

