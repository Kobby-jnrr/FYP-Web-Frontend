import React from "react";
import "./SafetyTips.css";
import image from "../assets/focusgirl.jpg";


const SafetyTips = () => {
  return (
    <div className="safety-guide-container">
      {/* Header */}
     <div className="safety-hero">
        <img src={image} alt="Campus Safety" />
        </div>
      <div className="guide-header">
        <h1>Campus Safety & Awareness Guide</h1>
        <p>
           This guide provides practical advice and preventive measures to help students protect themselves from online abuse, sexual assault,
           and other safety risks on campus. Read carefully and implement the suggestions to stay safe.
           This article will cover a wide range of campus safety best practices, including emergency planning,
           technology, training, and mental health support. 
           A comprehensive safety plan, including an emergency operations plan and regular risk assessments, is key to campus security.
        </p>
      </div>

      {/* Guide Content */}
      <div className="guide-content">

        {/* Section 1 */}
        <div className="guide-section">
          <h2>Online Safety</h2>
          <p>
            Protect your personal information online. Avoid sharing sensitive data like your address,
             phone number, or passwords. Be cautious when connecting with new people on social media platforms,
             and report any suspicious or abusive behavior immediately.
             Use strong, unique passwords and enable two-factor authentication wherever possible.
             Always think twice before clicking on unknown links or downloading files from untrusted sources.
              </p>
        </div>

        {/* Section 2 */}
        <div className="guide-section">
          <h2>Sexual Assault Prevention</h2>
          <p>
            Stay aware of your surroundings, especially when walking alone at night.
            Trust your instincts — if something feels unsafe, leave the area immediately.
            Participate in campus safety programs and workshops to learn more about self-defense strategies.
            Avoid accepting drinks from strangers, and never leave your drink unattended. Know the campus reporting
            procedures and support resources available in case of an incident.
             </p>
        </div>

        {/* Section 3 */}
        <div className="guide-section">
          <h2>Safe Social Habits</h2>
          <p>
            Walk in groups whenever possible, and share your location with friends or family. Avoid risky areas on campus at night and
             familiarize yourself with emergency contact points like security offices or call boxes.
            Maintain a balance between social interaction and personal safety. Be proactive in setting boundaries 
            and communicating them clearly to peers.
            </p>
        </div>

        {/* Section 4 */}
        <div className="guide-section">
          <h2>Emergency Preparedness</h2>
          <p>
            Know the campus emergency numbers and keep them easily accessible.
            Learn the locations of safe zones, first aid stations, and exit points in campus buildings.
            Carry a small emergency kit if possible, including a flashlight and personal alarm.
             Regularly review campus alerts and safety notices.
             Being prepared reduces panic and increases your ability to respond effectively in critical situations.
             </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyTips;