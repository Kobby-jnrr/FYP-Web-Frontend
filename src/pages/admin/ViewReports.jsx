import React from "react";
import "./Admin.css";
import { Search, Filter, Download, MoreVertical, Eye, Trash2 } from "lucide-react";

function ViewReports() {
    const reports = [
        { id: "REP-001", user: "Anonymous", category: "Cyber-bullying", status: "pending", date: "2024-04-09", location: "Dormitory A" },
        { id: "REP-002", user: "John Doe", category: "Harassment", status: "resolved", date: "2024-04-08", location: "Library" },
        { id: "REP-003", user: "Jane Smith", category: "Mental Health", status: "pending", date: "2024-04-08", location: "Off-campus" },
        { id: "REP-004", user: "Anonymous", category: "Physical Abuse", status: "urgent", date: "2024-04-07", location: "Cafeteria" },
        { id: "REP-005", user: "Alice Brown", category: "Theft", status: "resolved", date: "2024-04-05", location: "Main Gate" },
    ];

    return (
        <div className="admin-wrapper">
            <header className="admin-header">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h1>Incident Reports</h1>
                        <p>Managing and reviewing all submitted reports from the campus.</p>
                    </div>
                    <button className="btn-view">
                        <Download size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        Export CSV
                    </button>
                </div>
            </header>

            <div className="admin-content-card">
                <div className="card-header">
                    <div style={{ position: "relative", width: "300px" }}>
                        <Search size={18} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                        <input
                            type="text"
                            placeholder="Search reports..."
                            style={{ padding: "10px 10px 10px 40px", width: "100%", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "0.9rem" }}
                        />
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button className="btn-icon"><Filter size={18} /></button>
                        <button className="btn-icon"><MoreVertical size={18} /></button>
                    </div>
                </div>

                <table className="premium-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Reporting User</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report.id}>
                                <td><strong>{report.id}</strong></td>
                                <td>{report.user}</td>
                                <td>{report.category}</td>
                                <td><span className={`badge ${report.status}`}>{report.status}</span></td>
                                <td>{report.location}</td>
                                <td>{report.date}</td>
                                <td>
                                    <button className="btn-icon"><Eye size={16} /></button>
                                    <button className="btn-icon" style={{ color: '#e11d48' }}><Trash2 size={16} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewReports;
