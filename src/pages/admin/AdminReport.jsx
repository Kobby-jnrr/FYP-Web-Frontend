import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import ReportModal from "../../components/ReportModal";
import './Reports.css';

const AdminReport = () => {
    // 1. State for pagination and modal
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedReport, setSelectedReport] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const reportsPerPage = 5;

    // Open modal with specific report data
    const handleViewClick = (report) => {
        setSelectedReport(report);
        setIsModalOpen(true);
    };

    // Mock Data
    const allReports = [
        { id: "#RPT0012", date: "10 May 2024", time: "10:30 AM", student: "Anonymous", incident: "Verbal Abuse", status: "Pending" },
        { id: "#RPT0011", date: "09 May 2024", time: "02:15 PM", student: "Riya Sharma", incident: "Bullying", status: "Need Attention" },
        { id: "#RPT0010", date: "08 May 2024", time: "11:45 AM", student: "Anonymous", incident: "Inappropriate Behavior", status: "Pending" },
        { id: "#RPT0009", date: "07 May 2024", time: "09:20 AM", student: "Arjun Mehta", incident: "Physical Threat", status: "Resolved" },
        { id: "#RPT0008", date: "06 May 2024", time: "01:10 PM", student: "Sneha Patel", incident: "Cyberbullying", status: "Resolved" },
        // Page 2 Data
        { id: "#RPT0007", date: "05 May 2024", time: "03:00 PM", student: "John Doe", incident: "Theft", status: "Pending" },
    ];

    // 2. Logic to get current reports for the table
    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = allReports.slice(indexOfFirstReport, indexOfLastReport);

    const totalPages = Math.ceil(allReports.length / reportsPerPage);

    return (
        <div className="reports-container">
            <header className="page-header reports-header">
                <div>
                    <h1 className="page-title">All Reports</h1>
                    <p className="page-subtitle">View and manage student reports</p>
                </div>
                <div className="search-wrapper">
                    <Search size={18} className="search-icon" color="#94A3B8"/>
                    <input type="search" placeholder="Search reports..." className="reports-search-input"/>
                </div>
            </header>

            <section className="table-wrapper content-panel">
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>Report ID</th>
                            <th>Date & Time</th>
                            <th>Student</th>
                            <th>Incident</th>
                            <th>Status</th>
                            <th className="action-col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentReports.map((row) => (
                            <tr key={row.id}>
                                <td className="font-medium">{row.id}</td>
                                <td>{row.date} <br/> <small>{row.time}</small></td>
                                <td>{row.student}</td>
                                <td>{row.incident}</td>
                                <td>
                                    <span className={`status-badge ${row.status.toLowerCase().replace(' ', '-')}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="action-col">
                                    <button 
                                        className="view-btn" 
                                        onClick={() => handleViewClick(row)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* 3. Functional Pagination Footer */}
            <footer className="table-footer">
                <span className="showing-entries-text">
                    Showing {indexOfFirstReport + 1} to {Math.min(indexOfLastReport, allReports.length)} of {allReports.length} reports
                </span>
                <div className="pagination-controls">
                    <button 
                        className="pagi-btn" 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button 
                        className={`pagi-btn page-num ${currentPage === 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </button>

                    <button 
                        className={`pagi-btn page-num ${currentPage === 2 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(2)}
                    >
                        2
                    </button>

                    <button 
                        className="pagi-btn" 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </footer>

            {/* Modal remains outside the table but inside the container */}
            <ReportModal 
                report={selectedReport} 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </div>
    );
};

export default AdminReport;