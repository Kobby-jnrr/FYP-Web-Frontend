// src/pages/Dashboard.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ClipboardCheck, Clock, Flag, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import './Dashboard.css';

// Component for Status Cards
const StatusCard = ({ icon, count, label, color }) => (
    <div className={`status-card status-card-${color}`}>
        <div className="card-icon-wrapper">
            {icon}
        </div>
        <div className="card-info">
            <span className="card-count">{count}</span>
            <span className="card-label">{label}</span>
        </div>
    </div>
);

// Component for a line in Recent Reports
const RecentReportItem = ({ title, details, time, colorClass }) => (
    <div className="recent-report-item">
        <div className="report-item-left">
            <span className={`status-dot ${colorClass}-dot`}></span>
            <div className="report-item-text">
                <span className="report-title">{title}</span>
                <span className="report-details">{details}</span>
            </div>
        </div>
        <span className="report-time">{time}</span>
    </div>
);

const AdminDashboard = () => {
    // Mock Data based on image
    const statusData = [
        { icon: <ClipboardCheck size={28} color="#2563EB" />, count: 12, label: "Total Reports", color: "blue" },
        { icon: <Clock size={28} color="#D97706" />, count: 8, label: "Pending Review", color: "amber" },
        { icon: <Flag size={28} color="#DC2626" />, count: 2, label: "Need Attention", color: "red" },
        { icon: <CheckCircle size={28} color="#166534" />, count: 5, label: "Resolved", color: "green" },
    ];

    const recentReportsData = [
        { title: "Verbal Abuse in Classroom", details: "Class 9 - Anonymous", time: "2 hours ago", colorClass: "red" },
        { title: "Bullying in Playground", details: "Class 8 - Riya Sharma", time: "1 day ago", colorClass: "amber" },
        { title: "Inappropriate Behavior", details: "Class 10 - Anonymous", time: "2 days ago", colorClass: "blue" },
        { title: "Resolved: Physical Threat", details: "Class 7 - Arjun Mehta", time: "3 days ago", colorClass: "green" },
    ];

    return (
        <div className="dashboard-container">
            <header className="page-header">
                <h1 className="page-title">Dashboard</h1>
                <p className="page-subtitle">Welcome back, Admin!</p>
            </header>

            <section className="status-grid">
                {statusData.map((data, index) => <StatusCard key={index} {...data} />)}
            </section>

            <section className="dashboard-content-layout">
                {/* Left Panel: Recent Reports */}
                <div className="content-panel recent-reports-panel">
                    <div className="panel-header">
                        <h2 className="panel-title">Recent Reports</h2>
                        <NavLink to="/admin/report" className="view-all-link">
                            View All Reports <ArrowRight size={16} />
                        </NavLink>
                    </div>
                    <div className="reports-list">
                        {recentReportsData.map((data, index) => <RecentReportItem key={index} {...data} />)}
                    </div>
                </div>

                {/* Right Panel: CTA Callout */}
                <div className="content-panel cta-callout-panel">
                    <div className="cta-content">
                        <div className="cta-icon-wrapper">
                            <ShieldCheck size={48} color="#2563EB" />
                        </div>
                        <h2 className="cta-title">Keep Students Safe</h2>
                        <p className="cta-text">
                            Review reports and take action to create a safer school environment.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;