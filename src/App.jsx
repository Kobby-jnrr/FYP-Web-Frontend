import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Resource from "./pages/Resource";
import Profile from "./pages/Profile";
import SafetyTips from "./pages/SafetyTips";
import Counselling from "./pages/Counselling";
import Policies from "./pages/Policies";
import Hotlines from "./pages/Hotlines";
import Support from "./pages/Support";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ViewReports from "./pages/admin/ViewReports";

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
          <Link to="/admin/login">Admin</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/hotlines" element={<Hotlines />} />
        <Route path="/support" element={<Support />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<ViewReports />} />
      </Routes>
    </div>
  );
}

export default App;