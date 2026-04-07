import React, { useState } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import { Home, BookOpen, MessageSquare, User, AlertCircle } from "lucide-react";

const Profile = () => {
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/150?img=12");
  const [theme, setTheme] = useState("light"); // default theme

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const cards = [
    { title: "Reports", description: "View and manage your reports" },
    { title: "Notifications", description: "Manage notification preferences" },
    { title: "Privacy Settings", description: "Adjust your privacy options" },
    { title: "Theme", description: "Switch between light and dark mode", isTheme: true },
    { title: "Logout", description: "sign out from account" },
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Profile</h1>
        </div>
      </div>
      
      <div className="main-container">
        <div className="report-card">
          <div className="profile-container">
            {/* Profile Header */}
            <div className="profile-header">
              <div className="avatar-wrapper">
                <img src={avatar} alt="Avatar" className="profile-avatar" />
                <label htmlFor="avatar-upload" className="edit-avatar-btn">
                  ✎
                </label>
                <input
                  type="file"
                  id="avatar-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </div>
              <div className="profile-info">
                <h2>Prince Osei</h2>
                <p>Software Engineer & senior developer</p>
              </div>
            </div>

            {/* Vertical Action Cards */}
            <div className="profile-details">
              {cards.map((card, index) => (
                <div className="detail-card" key={index}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  {card.isTheme && (
                    <label className="switch">
                      <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
                      <span className="slider"></span>
                    </label>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/report" className={({ isActive }) => (isActive ? "active" : "")}>
          <BookOpen size={24} />
          <span>Report</span>
        </NavLink>

        {/* BIG CENTER ACTION BUTTON */}
        <NavLink to="/report" className="floating-action1">
          <div className="red-circle1">
            <AlertCircle size={30} />
          </div>
          <span className="float-label">Report</span>
        </NavLink>

        <NavLink to="/report" className={({ isActive }) => (isActive ? "active" : "")}>
          <MessageSquare size={24} />
          <span>Report</span>
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          <User size={24} />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;