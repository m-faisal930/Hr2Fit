import { createContext, useContext, useState, useEffect } from 'react';
import { getJobs, getJobStats } from '../services/jobservice';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const [jobsData, statsData] = await Promise.all([
        getJobs(),
        getJobStats(),
      ]);
      setJobs(jobsData);
      setStats(statsData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]);
  };

  return (
    <JobContext.Provider
      value={{ jobs, stats, loading, error, fetchJobs, addJob }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);
