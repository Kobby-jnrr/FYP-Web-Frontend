// src/components/Sidebar.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, User, LogOut, ShieldCheck, LogOutIcon } from 'lucide-react';
import './Sidebar.css';

// Simple fallback logo component
const Logo = () => (
  <div className="sidebar-logo">
    <div className="logo-icon-bg">
        <ShieldCheck color="white" size={24}/>
    </div>
    <div className="logo-text-group">
        <span className="logo-title">School Safety</span>
        <span className="logo-subtitle">Admin Panel</span>
    </div>
  </div>
);

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Placeholder for real sign-out logic
        console.log("Signing out...");
        // navigate('/login'); // e.g., redirect to login
    };

  return (
    <aside className="sidebar">
        <div className="sidebar-top">
            <Logo />

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li>
                        <NavLink 
                            to="/admin/dashboard" 
                            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                        >
                            <LayoutDashboard size={20} className="nav-icon"/>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/admin/report" 
                            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
                        >
                            <FileText size={20} className="nav-icon"/>
                            All Reports
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="sidebar-bottom">
            <div className="admin-user-block">
                <div className="admin-avatar">
                   <User size={24} color="#6B7280"/>
                </div>
                
                <div className="admin-info">
                    <span className="admin-name">Admin User</span></div>
                    <NavLink 
                            to="/admin/login" 
                            className={({ isActive }) => (isActive ? 'sign-out-btn' : 'sign-out-btn')}>
                            <LogOutIcon size={20} div className="sign-out-btn"/>
                        Sign Out
                        </NavLink>
                </div>
            </div>
    </aside>
  );
};

export default Sidebar;