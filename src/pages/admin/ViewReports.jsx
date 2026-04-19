import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import { Search, Filter, Eye } from "lucide-react";

const ViewReports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/api/reports")
            .then(res => res.json())
            .then(data => {
                setReports(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching reports:", err);
                setLoading(false);
            });
    }, []);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case "pending": return "#f59e0b";
            case "resolved": return "#10b981";
            case "urgent": return "#ef4444";
            default: return "#6b7280";
        }
    };

    return (
        <div className="admin-wrapper">
            <header className="admin-header">
                <div>
                    <h1>📋 Incident Reports</h1>
                    <p>Managing and reviewing all submitted reports from the campus.</p>
                </div>
                <Link to="/admin/dashboard" className="back-link">← Back to Dashboard</Link>
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
                </div>

                <div className="table-container">
                    {loading ? (
                        <p style={{ padding: "20px" }}>Loading reports...</p>
                    ) : (
                        <table className="premium-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((report) => (
                                    <tr key={report.id}>
                                        <td><strong>#{report.id}</strong></td>
                                        <td>{report.user}</td>
                                        <td>{report.category}</td>
                                        <td>
                                            <span className={`badge ${report.status?.toLowerCase()}`} style={{ backgroundColor: getStatusColor(report.status) }}>
                                                {report.status}
                                            </span>
                                        </td>
                                        <td>{report.date}</td>
                                        <td>
                                            <Link to={`/admin/reports/${report.id}`} className="btn-icon">
                                                <Eye size={18} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewReports;
