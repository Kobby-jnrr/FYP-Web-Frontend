// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <header className="main-header">
            {/* Standard right-aligned icon */}
            <div className="header-actions">
                <button className="icon-btn notification-btn">
                    <Bell size={20} color="#1F2937" />
                    <span className="notification-badge"></span> {/* Placeholder badge */}
                </button>
            </div>
        </header>
        
        <main className="content-area">
          {/* This renders the specific page based on the route */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;