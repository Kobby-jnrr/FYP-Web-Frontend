import React from "react";
import "./Admin.css";
import { Users, FileText, CheckCircle, Clock, ArrowRight, BarChart2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function AdminDashboard() {
    const stats = [
        { title: "Total Reports", value: "124", icon: <FileText />, color: "bg-indigo-soft" },
        { title: "Pending", value: "18", icon: <Clock />, color: "bg-amber-soft" },
        { title: "Resolved", value: "106", icon: <CheckCircle />, color: "bg-emerald-soft" },
        { title: "Total Users", value: "2,450", icon: <Users />, color: "bg-rose-soft" },
    ];

    const recentReports = [
        { id: "REP-001", user: "Anonymous", category: "Cyber-bullying", status: "pending", date: "2 mins ago" },
        { id: "REP-002", user: "John Doe", category: "Harassment", status: "resolved", date: "1 hour ago" },
        { id: "REP-003", user: "Jane Smith", category: "Mental Health", status: "pending", date: "3 hours ago" },
    ];

    return (
        <div className="admin-wrapper">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
                <p>Overview of campus safety and incident reports.</p>
            </header>

            <div className="admin-stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className={`stat-icon ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div className="stat-info">
                            <h3>{stat.title}</h3>
                            <div className="value">{stat.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="admin-content-card">
                <div className="card-header">
                    <h2>Recent Incident Reports</h2>
                    <NavLink to="/view-reports" className="btn-view">View All</NavLink>
                </div>

                <table className="premium-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentReports.map((report) => (
                            <tr key={report.id}>
                                <td><strong>{report.id}</strong></td>
                                <td>{report.user}</td>
                                <td>{report.category}</td>
                                <td><span className={`badge ${report.status}`}>{report.status}</span></td>
                                <td>{report.date}</td>
                                <td><button className="btn-icon"><BarChart2 size={16} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
