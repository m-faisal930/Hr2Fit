
import { useState, useEffect, useContext } from 'react';
import {
  FiSearch,
  FiBriefcase,
  FiMapPin,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import JobCard from '../components/JobCard';
import { useJobs } from '../context/JobContext';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


// Jobs Listing Page
const JobsPage = () => {
  const { jobs, loading, error } = useJobs();
  
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    type: '',
    experience: '',
  
  });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Transform job data to match your existing structure
  const transformJobData = (job) => ({
    _id: job._id,
    status: job.status,
    title: job.title,
    company: job.department, // Using department as company
    location: job.location,
    type: job.type,
    salary: job.salary,
    experience: job.experience,
    postedDate: formatPostedDate(job.posted),
    requirements: job.requirements || [], // Using requirements as skills
    skills: job.skills || [], // Using requirements as skills
  });

  // Helper function to format posted date
  const formatPostedDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return 'Just now';
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  };

  // Transform all jobs to match the expected format
  const transformedJobs = jobs.map(transformJobData);

  // Filter jobs based on filters
  const filteredJobs = transformedJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.location === '' || job.location.includes(filters.location)) &&
      (filters.type === '' || job.type === filters.type) &&
      (filters.experience === '' ||
        job.experience === filters.experience 
      ) 
    );
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
// console.log(currentJobs);
  return (
    <>
      <div className='bg-gray-50'>
        <PageHero
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Jobs', href: '/job' },
          ]}
        />
      </div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pt-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Find Your Dream Job
          </h1>
          <p className="mt-2 text-lg">
            Browse {transformedJobs.length} opportunities across Pakistan
          </p>
        </div>

        {/* Filter Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {/* Search */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title or keywords"
                  className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
              </div>

              {/* Location */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiMapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full appearance-none rounded-lg border-0 py-2 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                >
                  <option value="">All Locations</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* Job Type */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full appearance-none rounded-lg border-0 py-2 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                >
                  <option value="">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              {/* Experience Type */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <FiBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="block w-full appearance-none rounded-lg border-0 py-2 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  value={filters.experience}
                  onChange={(e) =>
                    setFilters({ ...filters, experience: e.target.value })
                  }
                >
                  <option value="">Any Experience</option>
                  <option value="Entry">Entry Level</option>
                  <option value="Mid">Mid Level</option>
                  <option value="Senior">Senior Level</option>
                  {/* <option value="Internship">Internship</option> */}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{filteredJobs.length}</span>{' '}
              results
            </p>
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">Sort by:</span>
              <select className="rounded-lg border-0 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500">
                <option>Most Recent</option>
                <option>Highest Salary</option>
                <option>Most Relevant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
                  <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4 mb-6"></div>
                  <div className="h-8 bg-gray-200 rounded w-24 ml-auto"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {filteredJobs.length === 0 ? (
                <div className="rounded-xl bg-white p-8 text-center shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900">
                    No jobs found
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Try adjusting your search filters
                  </p>
                  <button
                    onClick={() =>
                      setFilters({
                        search: '',
                        location: '',
                        type: '',
                        experience: '',
                        salary: '',
                      })
                    }
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {currentJobs.map((job) => (
                      // console.log("current job is", job),
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-between">
                      <button
                        onClick={() =>
                          paginate(currentPage > 1 ? currentPage - 1 : 1)
                        }
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                      >
                        <FiChevronLeft className="h-5 w-5" />
                        Previous
                      </button>
                      <div className="hidden sm:flex sm:gap-2">
                        {[...Array(totalPages)].map((_, index) => (
                          <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium ${
                              currentPage === index + 1
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          paginate(
                            currentPage < totalPages
                              ? currentPage + 1
                              : totalPages
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Next
                        <FiChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobsPage;