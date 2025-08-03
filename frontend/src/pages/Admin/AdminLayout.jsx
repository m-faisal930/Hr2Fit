
import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from "../../assets/logo.png";
import {
  FaNewspaper,
  FaComments,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth(); // Assuming you have a logout function in your auth context

  const isActive = (path) => location.pathname === path;

    const handleLogout = () => {
      logout();
      navigate('/login');
    };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transform fixed md:static inset-y-0 left-0 w-64 bg-white shadow-lg 
        z-40 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-center px-4">
          <img className="mx-auto h-40 w-auto" src={logo} alt="App Logo" />
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/dashboard"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive('/admin/dashboard')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <FaChartLine className="mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blog"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive('/admin/blog')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <FaNewspaper className="mr-3" />
                Blog Management
              </Link>
            </li>
            <li>
              <Link
                to="/admin/comments"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive('/admin/comments')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <FaComments className="mr-3" />
                Comments
              </Link>
            </li>

          </ul>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <button
            onClick={handleLogout}
             className="flex items-center w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600">
              <FaSignOutAlt className="mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold text-gray-900 pl-10">
                Admin Dashboard
              </h2>
            </div>
            {/* <div className="flex items-center">
              <div className="relative">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Admin profile"
                />
              </div>
            </div> */}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
