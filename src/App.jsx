import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import About from "./pages/About";
import Resource from "./pages/Resource";
import Profile from "./pages/Profile";
import SafetyTips from "./pages/SafetyTips";
import Support from "./pages/Support";
import Counselling from "./pages/Counselling";
import Policies from "./pages/Policies";
import Hotlines from "./pages/Hotlines";
import Myreports from "./pages/Myreports"
import AdminChat from "./pages/AdminChat";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Layout from './components/Layout';
import AdminReport from './pages/admin/AdminReport';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Student Safety</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/report">Report</Link>
          <Link to="/resource">Resource</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin/login" style={{ color: "#ef4444", fontWeight: "bold" }}>Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/hotlines" element={<Hotlines />} />
        <Route path="/support" element={<Support />} />
        <Route path="/myreports" element={<Myreports />} />
        {/* Admin Routes */}
        
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Layout />}>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/report"
          element={
            <ProtectedRoute>
              <AdminReport/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/chat"
          element={
            <ProtectedRoute>
              <AdminChat />
            </ProtectedRoute>
          }
        />
        </Route>
      </Routes>
    </div>
  );
}

export default App;