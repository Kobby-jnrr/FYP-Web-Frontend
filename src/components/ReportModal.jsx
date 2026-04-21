import React from 'react';
import { X, ShieldAlert } from 'lucide-react';
import './ReportModal.css';

const ReportModal = ({ report, isOpen, onClose }) => {
  if (!isOpen || !report) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="header-left">
            <ShieldAlert color="#2563eb" size={24} />
            <h3>Report Details - {report.id}</h3>
          </div>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="modal-body">
          <div className="info-group">
            <label>Student Name</label>
            <p>{report.student}</p>
          </div>
          <div className="info-group">
            <label>Incident Type</label>
            <p>{report.incident}</p>
          </div>
          <div className="info-group">
            <label>Date & Time</label>
            <p>{report.date} at {report.time}</p>
          </div>
          <div className="info-group">
            <label>Current Status</label>
            <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
              {report.status}
            </span>
          </div>
          <div className="info-group full-width">
            <label>Description</label>
            <p className="description-text">
              Detailed information about the {report.incident.toLowerCase()} incident involving {report.student}... 
              (In a real app, this text would come from your database).
            </p>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="secondary-btn" onClick={onClose}>Close</button>
          <button className="primary-btn">Take Action</button>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;