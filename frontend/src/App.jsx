import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import { ThemeProvider } from "./context/ThemeContext";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HRServices from "./pages/HRServices";
import RecruitingSolutions from "./pages/RecruitingSolutions";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import AdminLogin from "./pages/Admin/AdminLogin"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import BlogManagement from "./pages/Admin/BlogManagement"
import CommentsManagement from "./pages/Admin/CommentsManagement"
import CommentDetails from "./pages/Admin/CommentDetails"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminLayout from "./pages/Admin/AdminLayout";

function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <BlogProvider>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<HRServices />} />
                <Route path="/recruiting" element={<RecruitingSolutions />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="*" element={<LandingPage />} />
                <Route exact path="/login" element={<AdminLogin />} />
                
                <Route path="/admin" element={<AdminLayout />}>
                  <Route
                    path="dashboard"
                    element={
                      <ProtectedRoute>
                        <AdminDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="blog"
                    element={
                      <ProtectedRoute>
                        <BlogManagement />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="comments"
                    element={
                      <ProtectedRoute>
                        <CommentsManagement />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="comments/:id"
                    element={
                      <ProtectedRoute>
                        <CommentDetails />
                      </ProtectedRoute>
                    }
                  />
                </Route>
              </Routes>
            </BlogProvider>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App
