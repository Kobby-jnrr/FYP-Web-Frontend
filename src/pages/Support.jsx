import React, { useState, useEffect } from "react";
import "./Support.css";
import { Phone, MessageCircle, Shield, LifeBuoy, ChevronDown, Home, BookOpen, User, AlertCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { io } from "socket.io-client";

// CONNECT TO BACKEND
const socket = io("http://localhost:5000");

function Support() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [showChat, setShowChat] = useState(false);

  // FIXED ROOM (we’ll make this dynamic later per user)
  const room = "support_room";

  // JOIN ROOM + RECEIVE MESSAGES
  useEffect(() => {
    socket.emit("join_room", room);

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  // SEND MESSAGE
  const sendMessage = () => {
    if (message.trim() === "") return;

    const msgData = {
      room: room,
      text: message,
      sender: "user",
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", msgData);
    setMessage("");
  };

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
            <button className="support-btn primary" onClick={() => setShowChat(!showChat)}>
              {showChat ? "Close Chat" : "Start Chat"}
            </button>
          </div>
        </div>

        {showChat && (
          <section className="chat-section" style={{ marginTop: "40px" }}>
            <h2>💬 Live Support Chat</h2>
            <div className="chat-box" style={{ height: "300px", overflowY: "auto", padding: "15px", border: "1px solid #eee", borderRadius: "8px", marginBottom: "15px" }}>
              {chat.map((msg, index) => (
                <div
                  key={index}
                  className={msg.sender === "user" ? "chat user" : "chat bot"}
                  style={{ marginBottom: "10px", textAlign: msg.sender === "user" ? "right" : "left" }}
                >
                  <div style={{
                    display: "inline-block",
                    padding: "10px",
                    borderRadius: "12px",
                    backgroundColor: msg.sender === "user" ? "#dcf8c6" : "#f0f0f0"
                  }}>
                    <p style={{ margin: 0 }}>{msg.text}</p>
                    <small style={{ fontSize: "0.7rem", color: "#666" }}>{msg.time}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-input" style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Type message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}
              />
              <button onClick={sendMessage} style={{ padding: "10px 20px", borderRadius: "8px", border: "none", backgroundColor: "#2563eb", color: "white", cursor: "pointer" }}>
                Send
              </button>
            </div>
          </section>
        )}

        <section className="faq-section" style={{ marginTop: "50px" }}>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item" style={{ marginBottom: "15px", padding: "15px", border: "1px solid #eee", borderRadius: "8px" }}>
                <summary style={{ fontWeight: "600", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q} <ChevronDown size={18} />
                </summary>
                <p style={{ marginTop: "10px", color: "#64748b", lineHeight: "1.6" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <div className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          <Home size={24} />
          <span>Home</span>
        </NavLink>

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