
import React, { useState, useEffect } from 'react';
import {
  FaNewspaper,
  FaComments,
  FaCheckCircle,
  FaClock,
  FaEye,
} from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import api from '../../services/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const [stats, setStats] = useState([]);
  const [blogPostsData, setBlogPostsData] = useState({
    labels: [],
    datasets: [{ label: 'Blog Posts', data: [], backgroundColor: 'rgba(59, 130, 246, 0.5)', borderColor: 'rgba(59, 130, 246, 1)', borderWidth: 1 }],
  });
  const [commentsData, setCommentsData] = useState({
    labels: [],
    datasets: [{ label: 'Comments', data: [], backgroundColor: 'rgba(124, 58, 237, 0.5)', borderColor: 'rgba(124, 58, 237, 1)', borderWidth: 1, tension: 0.3 }],
  });
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [statsRes, postsRes, commentsRes, actsRes] = await Promise.all([
          api.get('/admin/stats'),
          api.get('/admin/blog-posts'),
          api.get('/admin/comments'),
          api.get('/admin/activities'),
        ]);

        setStats([
          { title: 'Published Posts', value: statsRes.data.publishedPosts, icon: <FaNewspaper className="text-blue-500" />, change: statsRes.data.postsChange },
          { title: 'Total Comments', value: statsRes.data.totalComments, icon: <FaComments className="text-purple-500" />, change: statsRes.data.commentsChange },
          { title: 'Approved Comments', value: statsRes.data.approvedComments, icon: <FaCheckCircle className="text-green-500" />, change: statsRes.data.approvedChange },
          { title: 'Pending Comments', value: statsRes.data.pendingComments, icon: <FaClock className="text-yellow-500" />, change: statsRes.data.pendingChange },
        ]);

        setBlogPostsData({
          ...blogPostsData,
          labels: postsRes.data.labels,
          datasets: [{ ...blogPostsData.datasets[0], data: postsRes.data.data }],
        });

        setCommentsData({
          ...commentsData,
          labels: commentsRes.data.labels,
          datasets: [{ ...commentsData.datasets[0], data: commentsRes.data.data }],
        });

        setRecentActivities(actsRes.data.activities);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      }
    };
    fetchDashboard();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-800 mt-1">{stat.value}</p>
                <p className={`text-sm ${stat.change.includes('+') ? 'text-green-500' : stat.change.includes('Need') ? 'text-yellow-500' : 'text-gray-500'} mt-1`}>{stat.change}</p>
              </div>
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-50">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Blog Posts</h2>
            <select className="text-sm border-gray-300 rounded-md">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-64">
            <Bar data={blogPostsData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } }, x: { grid: { display: false } } } }} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Comments</h2>
            <select className="text-sm border-gray-300 rounded-md">
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>All time</option>
            </select>
          </div>
          <div className="h-64">
            <Line data={commentsData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0, 0, 0, 0.05)' } }, x: { grid: { display: false } } } }} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
          {/* <button className="text-sm text-blue-600 hover:text-blue-800">View All</button> */}
        </div>
        <div className="space-y-4">
          {recentActivities.map(activity => (
            <div key={activity.id} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
                {activity.action.includes('comment') ? <FaComments /> : activity.action.includes('post') ? <FaNewspaper /> : <FaEye />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{activity.action}{activity.author && ` from ${activity.author}`}</p>
                <p className="text-sm text-gray-500">{activity.title || activity.post} • {new Date(activity.time).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}