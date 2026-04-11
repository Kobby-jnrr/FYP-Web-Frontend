import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./Support.css";

const socket = io("http://localhost:5000");

const AdminChat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // ADMIN ROOM (you can change this later per user)
  const room = "support_room";

  useEffect(() => {
    // JOIN AS ADMIN
    socket.emit("join", {
      role: "admin",
      room: room,
    });

    // RECEIVE MESSAGES
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  // SEND MESSAGE
  const sendMessage = () => {
    if (message.trim() === "") return;

    socket.emit("send_message", {
      room: room,
      text: message,
      sender: "admin",
      time: new Date().toLocaleTimeString(),
    });

    setMessage("");
  };

  return (
    <div className="support-container">
      <h1>🧑‍💻 Admin Support Panel</h1>

      <div className="chat-box">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === "admin" ? "chat user" : "chat bot"}
          >
            <p>{msg.text}</p>
            <small>{msg.time}</small>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Reply as admin..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AdminChat;