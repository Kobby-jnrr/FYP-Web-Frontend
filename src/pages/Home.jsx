import React, { useState } from 'react';
import {
  Home as HomeIcon, BookOpen, AlertCircle, MessageSquare,
  User, Bell, ChevronRight, ClipboardList, LifeBuoy, X
} from 'lucide-react';
import './Home.css';
import { NavLink } from "react-router-dom";

const Home = () => {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="page-wrapper">

      {/* 2. Hero Banner */}
      <div className="hero-section">
        <div className="hero-content2">
          <h1>Report Digital Abuse</h1>
          <p>Your voice matters. Speak up and get help.</p>
        </div>
      </div>

      {/* 3. Main Container (The Overlap) */}
      <div className="main-container">
        <div className="white-card">

          {/* Action Grid */}
          <div className="action-grid">
            {/* CLICKABLE REPORT BUTTON */}
            <NavLink to="/report" className="floating-action">
              <div className="card red-card">
                <div className="icon-wrapper"><AlertCircle size={40} /></div>
                <span>Report Incident</span>
              </div>
            </NavLink>

            <NavLink to="/myreports" className="floating-action">
              <div className="card purple-card">
                <div className="icon-wrapper"><ClipboardList size={40} /></div>
                <span>My Reports</span>
              </div>
            </NavLink>

            <NavLink to="/support" className="floating-action">
              <div className="card green-card">
                <div className="icon-wrapper"><LifeBuoy size={40} /></div>
                <span>Get Support</span>
              </div>
            </NavLink>
          </div>


          {/* Recent Reports */}
          <div className="section-header">
            <h2>Recent Reports</h2>
            <button className="view-all">View All <ChevronRight size={18} /></button>
          </div>

          <div className="report-list">
            <ReportRow title="Cyberbullying" sub="Received threats online." time="10 mins ago" color="red" />
            <ReportRow title="Inappropriate Content" sub="Harassing texts received." time="1 day ago" color="orange" />
          </div>
        </div>
      </div>

      {/* 5. BOTTOM NAVIGATION BAR */}
      <div className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          <HomeIcon size={25} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/report" className={({ isActive }) => isActive ? "active" : ""}>
          <MessageSquare size={25} />
          <span>Report</span>
        </NavLink>

        {/* BIG CENTER ACTION BUTTON */}
        <NavLink to="/report" className="floating-action">
          <div className="red-circle">
            <AlertCircle size={30} />
          </div>
          <span className="float-label">Report</span>
        </NavLink>

        <NavLink to="/Resource" className={({ isActive }) => isActive ? "active" : ""}>
          <BookOpen size={25} />
          <span>Resource</span>
        </NavLink>

        <NavLink to="/Profile" className={({ isActive }) => isActive ? "active" : ""}>
          <User size={25} />
          <span>profile</span>
        </NavLink>
      </div>
    </div>
  );
};

// Sub-component for Report Rows
const ReportRow = ({ title, sub, time, color }) => (
  <div className="report-row">
    <div className="report-info">
      <div className={`report-icon-box ${color}-bg`}>
        <AlertCircle size={20} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{sub}</p>
      </div>
    </div>
    <div className="report-meta">
      <span>{time}</span>
      <div className={`status-dot ${color}-dot`}><AlertCircle size={12} fill="currentColor" /></div>
    </div>
  </div>
);

export default Home;