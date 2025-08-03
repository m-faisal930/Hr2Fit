// // src/components/FeaturedJobsSection.jsx
// import React from 'react';
// import JobCard from './JobCard';

// export default function FeaturedJobsSection() {
//   return (
//     <section id="jobs" className="bg-light py-12">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="font-work text-3xl text-dark mb-8">Featured Jobs</h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {jobs.map((job) => (
//             <JobCard key={job.id} job={job} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












// src/components/FeaturedJobsSection.jsx
import React from 'react'
import { useJobs } from '../context/JobContext'
import JobCard from './JobCard'
import { FiCalendar } from 'react-icons/fi'

export default function FeaturedJobsSection() {
  const { jobs, loading, error } = useJobs()
  const topJobs = jobs.slice(0, 4)

  // helper to format “N days ago”
  const getPostedLabel = (postedIso) => {
    const postedDate = new Date(postedIso)
    const diffMs = Date.now() - postedDate.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return '1 day ago'
    return `${diffDays} days ago`
  }
// console.log(topJobs)
  return (
    <section id="jobs" className="bg-light py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-work text-3xl text-dark mb-8">Featured Jobs</h2>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-64 bg-white rounded-2xl shadow-sm animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topJobs.map((job) => {
              const postedLabel = getPostedLabel(job.posted)
              job.postedDate = postedLabel; // Add the formatted date to the job object for display
              console.log("job is ", job);
              return (
                <div key={job._id} className="flex flex-col">
                  <JobCard job={job} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
