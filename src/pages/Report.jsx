import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, BookOpen, AlertCircle, MessageSquare, User } from "lucide-react";
import "./Report.css";
import "./Home.css";
import { SPEAKUP_API } from "../config";


function Report() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("Cyberbullying");
  const [anonymous, setAnonymous] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({ description: "", name: "", email: "" });

  const abuseTypes = ["Inappropriate content", "Sexual Assault", "Cyberbullying", "Online Harassment", "Threats", "Other"];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("type", selectedType);
    data.append("description", formData.description);
    data.append("anonymous", anonymous);
    if (!anonymous) {
      data.append("firstname", formData.name);
      data.append("lastname", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("number", formData.number);
    }
    files.forEach((file) => data.append("files", file));

    try {
      const response = await fetch(`${SPEAKUP_API}/report`, { method: "POST", body: data });
      const result = await response.json().catch(() => null);

      if (response.status === 201 || response.ok) {
        alert("Report submitted successfully!");
        setStep(1);
        setFiles([]);
        setFormData({ description: "", name: "", email: "" });
        setAnonymous(false);
      } else {
        alert("Error submitting report");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content3">
          <h1>Report Digital Abuse</h1>
          <p>Your voice matters. Speak up and get help.</p>
        </div>
      </div>

      <div className="main-container">
        <div className="report-card">
          <p className="step">Step {step} of 3</p>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h2>Describe the Incident</h2>
              <p className="label">Type of Abuse</p>
              <div className="type-buttons">
                {abuseTypes.map((type) => (
                  <button
                    key={type}
                    className={selectedType === type ? "active" : ""}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <p className="label">Description</p>
              <textarea
                name="description"
                placeholder="Explain what happened..."
                value={formData.description}
                onChange={handleChange}
              />

              {/* FILE UPLOAD */}
              <label className="upload-box">
                <input type="file" multiple onChange={handleFileChange} />
                <p>Click or drag files to upload</p>
              </label>

              {/* FILE PREVIEW */}
              {files.length > 0 && (
                <div className="file-preview">
                  {files.map((file, index) => (
                    <div key={index} className="file-item">
                      {file.type.startsWith("image/") ? (
                        <img src={URL.createObjectURL(file)} alt="preview" className="preview-img" />
                      ) : (
                        <p className="file-name">{file.name}</p>
                      )}
                      <button className="remove-btn" onClick={() => removeFile(index)}>✕</button>
                    </div>
                  ))}
                </div>
              )}

              <button className="next-btn" onClick={nextStep}>Next</button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h2>Your Information</h2>
              <div className="anonymous">
                <div>
                  <p>Submit Anonymously</p>
                  <span>Your identity will be kept private.</span>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={anonymous} onChange={() => setAnonymous(!anonymous)} />
                  <span className="slider"></span>
                </label>
              </div>

              {!anonymous && (
                <>
                  <p className="label">FirstName</p>
                  <input type="text" name="firstname" value={formData.name} onChange={handleChange} />

                  <p className="label">LastName</p>
                  <input type="text" name="lastname" value={formData.name} onChange={handleChange} />

                  <p className="label">Email</p>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />

                  <p className="label">Password</p>
                  <input type="pass" name="password" value={formData.password} onChange={handleChange} />

                  <p className="label">Phone number</p>
                  <input type="number" name="number" value={formData.name} onChange={handleChange} />
                </>
              )}

              <div className="btn-group">
                <button className="back-btn" onClick={prevStep}>Back</button>
                <button className="next-btn" onClick={nextStep}>Next</button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h2>Review Your Report</h2>
              <div className="review-box">
                <p><strong>Type:</strong> {selectedType}</p>
                <p><strong>Description:</strong> {formData.description}</p>
                <p><strong>Files:</strong> {files.length}</p>
                <p><strong>Anonymous:</strong> {anonymous ? "Yes" : "No"}</p>
              </div>

              <div className="btn-group">
                <button className="back-btn" onClick={prevStep}>Back</button>
                <button className="next-btn" onClick={handleSubmit}>Submit</button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ================= BOTTOM NAVIGATION ================= */}
      <div className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          <Home size={25} />
          <span>Home</span>
        </NavLink>

        {/* FLOATING BUTTON */}
        <NavLink to="/report" className="floating-action">
          <div className="red-circle">
            <AlertCircle size={30} />
          </div>
          <span className="float-label">Report</span>
        </NavLink>

        <NavLink to="/resource" className={({ isActive }) => isActive ? "active" : ""}>
          <BookOpen size={24} />
          <span>Resource</span>
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
          <User size={24} />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Report;