import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { FileText, CheckCircle, Clock } from "lucide-react";

const AdminDashboard = () => {
    const [stats, setStats] = useState([
        { label: "Total Reports", value: 0, color: "#3b82f6", icon: <FileText /> },
        { label: "Pending", value: 0, color: "#f59e0b", icon: <Clock /> },
        { label: "Resolved", value: 0, color: "#10b981", icon: <CheckCircle /> },
    ]);

    useEffect(() => {
        fetch("http://localhost:5000/api/reports")
            .then(res => res.json())
            .then(data => {
                const total = data.length;
                const pending = data.filter(r => r.status === "Pending").length;
                const resolved = data.filter(r => r.status === "Resolved").length;
                setStats([
                    { label: "Total Reports", value: total, color: "#3b82f6", icon: <FileText /> },
                    { label: "Pending", value: pending, color: "#f59e0b", icon: <Clock /> },
                    { label: "Resolved", value: resolved, color: "#10b981", icon: <CheckCircle /> },
                ]);
            })
            .catch(err => console.error("Error fetching stats:", err));
    }, []);

    return (
        <div className="admin-wrapper">
            <header className="admin-header">
                <h1>📊 Admin Dashboard</h1>
                <p>Overview of campus safety and incident reports.</p>
            </header>

            <div className="admin-stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-icon" style={{ backgroundColor: `${stat.color}22`, color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div className="stat-info">
                            <h3>{stat.label}</h3>
                            <div className="value">{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-actions" style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
                <Link to="/admin/reports" className="btn-view" style={{ textDecoration: "none" }}>
                    📋 View All Reports
                </Link>
                <Link to="/admin/chat" className="btn-view" style={{ backgroundColor: "#8b5cf6", textDecoration: "none" }}>
                    💬 Support Chat
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
