import React from "react";
import "./Support.css";
import { Phone, MessageCircle, Shield, LifeBuoy, ChevronDown, Home, BookOpen, User, AlertCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

function Support() {
  const faqs = [
    {
      q: "How do I report an incident?",
      a: "You can use the 'Report' tab in the navigation bar or the floating red button to submit a new incident report. The process takes less than 3 minutes."
    },
    {
      q: "Is my report anonymous?",
      a: "Yes, you can choose to remain anonymous by toggling the 'Report Anonymously' option in the third step of the report form."
    },
    {
      q: "Who can see my reports?",
      a: "Only authorized campus security administrators and designated counselors have access to view report details to ensure your privacy and safety."
    },
    {
      q: "What happens after I submit a report?",
      a: "An administrator will review your report within 24 hours and assign it to the appropriate department for action or support."
    }
  ];

  return (
    <div className="support-page">
      <header className="support-hero">
        <h1>Get Support</h1>
        <p>Your safety and well-being are our top priorities. Reach out to our dedicated teams for immediate assistance.</p>
      </header>

      <div className="support-container">
        <div className="support-grid">
          <div className="support-card">
            <div className="icon-box red-icon">
              <Shield size={32} />
            </div>
            <h3>Emergency Services</h3>
            <p>Immediate 24/7 assistance for campus emergencies, safety threats, or medical needs.</p>
            <a href="tel:911" className="support-btn primary">Call Security</a>
          </div>

          <div className="support-card">
            <div className="icon-box blue-icon">
              <LifeBuoy size={32} />
            </div>
            <h3>Counseling Center</h3>
            <p>Professional counselors are available to talk and provide emotional support in a safe environment.</p>
            <NavLink to="/counselling" className="support-btn primary">Book Session</NavLink>
          </div>

          <div className="support-card">
            <div className="icon-box green-icon">
              <MessageCircle size={32} />
            </div>
            <h3>Chat with Support</h3>
            <p>Connect with a support representative for guidance on using the platform or general inquiries.</p>
            <button className="support-btn primary" onClick={() => alert("Chat coming soon!")}>Start Chat</button>
          </div>
        </div>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>
                  {faq.q} <ChevronDown size={18} />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>

        {/* BIG CENTER ACTION BUTTON */}
        <NavLink to="/report" className="floating-action">
          <div className="red-circle">
            <AlertCircle size={30} />
          </div>
          <span className="float-label">Report</span>
        </NavLink>

        <NavLink to="/resource" className={({ isActive }) => (isActive ? "active" : "")}>
          <BookOpen size={24} />
          <span>Resource</span>
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
          <User size={24} />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Support;