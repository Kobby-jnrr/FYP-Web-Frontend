import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Admin.css";

const ReportDetail = () => {
    const { id } = useParams();
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/reports/${id}`)
            .then(res => res.json())
            .then(data => {
                setReportData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching report detail:", err);
                setLoading(false);
            });
    }, [id]);

    const handleResolve = () => {
        fetch(`http://localhost:5000/api/reports/${id}/resolve`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                setReportData(data);
            })
            .catch(err => console.error("Error resolving report:", err));
    };

    if (loading) return <div className="admin-wrapper">Loading...</div>;
    if (!reportData) return <div className="admin-wrapper">Report not found.</div>;

    return (
        <div className="admin-wrapper">
            <div className="admin-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>Report #{id} Details</h1>
                <Link to="/admin/reports" className="back-link">← Back to Reports</Link>
            </div>

            <div className="admin-content-card" style={{ padding: "2rem" }}>
                <div className="detail-section">
                    <h3>Category</h3>
                    <p>{reportData.category}</p>
                </div>

                <div className="detail-section">
                    <h3>Status</h3>
                    <span className={`badge ${reportData.status.toLowerCase()}`} style={{
                        backgroundColor: reportData.status === "Resolved" ? "#10b981" : "#f59e0b",
                        padding: "6px 16px",
                        fontSize: "1rem"
                    }}>
                        {reportData.status}
                    </span>
                </div>

                <div className="detail-section">
                    <h3>Submitted By</h3>
                    <p>{reportData.user}</p>
                </div>

                <div className="detail-section">
                    <h3>Submission Date</h3>
                    <p>{reportData.date}</p>
                </div>

                <div className="detail-section">
                    <h3>Description</h3>
                    <p style={{ backgroundColor: "#f8fafc", padding: "1rem", borderRadius: "8px", lineHeight: "1.6" }}>
                        {reportData.description}
                    </p>
                </div>

                <div className="detail-section">
                    <h3>Attachments</h3>
                    <div style={{ display: "flex", gap: "10px" }}>
                        {reportData.attachments ? reportData.attachments.map((file, index) => (
                            <div key={index} style={{ padding: "8px 16px", background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "6px" }}>
                                {file}
                            </div>
                        )) : <p>No attachments</p>}
                    </div>
                </div>

                {reportData.status === "Pending" && (
                    <button className="resolve-btn" onClick={handleResolve} style={{
                        marginTop: "1rem",
                        padding: "12px 24px",
                        backgroundColor: "#10b981",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}>
                        ✅ Mark as Resolved
                    </button>
                )}
            </div>
        </div>
    );
};

export default ReportDetail;
