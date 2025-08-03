import { Search, Filter, Briefcase, MapPin, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const pakistaniCities = [
  'Islamabad',
  'Karachi',
  'Lahore',
  'Peshawar',
  'Quetta',
  'Faisalabad',
  'Rawalpindi',
  'Multan',
  'Gujranwala',
  'Hyderabad',
  'Sialkot',
  'Bahawalpur',
  'Sargodha',
  'Sukkur',
  'Larkana',
  'Sheikhupura',
  'Rahim Yar Khan',
  'Jhang',
  'Gujrat',
  'Mardan',
];

const JobSearchFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [showCities, setShowCities] = useState(false);
  const [filteredCities, setFilteredCities] = useState(pakistaniCities);

  useEffect(() => {
    if (location.length > 0) {
      setFilteredCities(
        pakistaniCities.filter((city) =>
          city.toLowerCase().includes(location.toLowerCase())
        )
      );
    } else {
      setFilteredCities(pakistaniCities);
    }
  }, [location]);

  const handleCitySelect = (city) => {
    setLocation(city);
    setShowCities(false);
  };

  return (
    <div className="relative mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl bg-white p-4 shadow-lg ring-1 ring-gray-200/80 backdrop-blur-sm sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-2">
          {/* Keyword Search (unchanged) */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Job Type Dropdown (unchanged) */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Briefcase className="h-5 w-5 text-gray-400" />
            </div>
            <select
              className="block w-full appearance-none rounded-lg border-0 py-3 pl-10 pr-8 text-gray-900 ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">All Job Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Filter className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Enhanced Location Input */}
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
              placeholder="City, Pakistan"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={() => setShowCities(true)}
              onBlur={() => setTimeout(() => setShowCities(false), 200)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>

            {/* Cities Dropdown */}
            {showCities && (
              <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredCities.length > 0 ? (
                  filteredCities.map((city) => (
                    <div
                      key={city}
                      className="relative cursor-pointer select-none px-4 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-600"
                      onMouseDown={() => handleCitySelect(city)}
                    >
                      {city}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">No cities found</div>
                )}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchFilters;
