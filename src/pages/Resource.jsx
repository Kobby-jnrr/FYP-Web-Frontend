import React from "react";
import "./Resource.css";
import { Link, NavLink } from "react-router-dom";
import { Home, BookOpen, MessageSquare, User, AlertCircle } from "lucide-react";

function Resource() {
  return (
    <div className="page-wrapper">

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="hero-content1">
          <h1>Emergency Help</h1>
          <p>Need help? Quickly report abuse or reach out for support.</p>
        </div>
      </div>

      <div className="main-container">
        <div className="resource-card">

          {/* TOP OPTIONS */}
          <Link to="/safety-tips" className="resource-link">
            <div className="resource-item">
              <div className="left">
                <span className="icon">📋</span>
                <div>
                  <h3>Online Safety Tips</h3>
                  <p>Learn how to protect yourself from abuse</p>
                </div>
              </div>
              <span className="arrow"></span>
            </div>
          </Link>

          <Link to="/counselling" className="resource-link">
            <div className="resource-item">
              <div className="left">
                <span className="icon">🗒️</span>
                <div>
                  <h3>Counseling Service</h3>
                  <p>Contact school counselor for help</p>
                </div>
              </div>
              <span className="arrow"></span>
            </div>
          </Link>

          <Link to="/policies" className="resource-link">
            <div className="resource-item split">
              <div className="left">
                <span className="icon">🎧</span>
                <div>
                  <h3>School Policies</h3>
                  <p>Understand your school's policies on bullying and abuse</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/hotlines" className="resource-link">
            <div className="right">
              <div className="resource-item">
                <span className="icon">📞</span>
                <div>
                  <h3>School Helpline</h3>
                  <p>1-800-123-4567</p>
                </div>

                <button className="action-btn">Call</button>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>

        {/* BIG CENTER ACTION BUTTON */}
        <NavLink to="/report" className="floating-action">
          <div className="red-circle">
            <AlertCircle size={30} />
          </div>
          <span className="float-label">Report</span>
        </NavLink>

        <NavLink to="/resource" className={({ isActive }) => (isActive ? "active" : "")}>
          <BookOpen size={24} />
          <span>Resource</span>
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          <User size={24} />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Resource;