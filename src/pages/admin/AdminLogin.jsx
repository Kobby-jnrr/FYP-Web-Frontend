import React from "react";

function AdminLogin() {
  return (
    <div className="admin-login-container" style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h1>Admin Login</h1>
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input type="email" placeholder="Admin Email" style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input type="password" placeholder="Password" style={{ width: "100%", padding: "8px" }} />
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
