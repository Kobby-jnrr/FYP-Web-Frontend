import React from "react";
import "./Policies.css";

function Policies() {
  return (
    <div style={{ padding: "20px", lineHeight: "1.6" }}>
      <h1>Policies & Safety Information</h1>
        <div className="image-hero">
              <img src="african.jpg" alt="" />
            </div>

      <p>
        If you are in a situation where you think your device is being monitored
        or controlled by someone else, you can find safety tips here:
      </p>

      <a
        href="https://www.sexualviolence.ie/safety-message"
        target="_blank"
        rel="noreferrer"
      >
        Safety Tips Link
      </a>

<hr />

      <h2>Our Commitment</h2>
      <p>
        At UCC, we aim to ensure a safe and supportive environment for all
        students and staff. Sexual violence and harassment have no place in our
        institutions.
      </p>

      <p>
        We value student experience, wellbeing, and academic success equally,
        and expect respectful behaviour from everyone.
      </p>

     <hr />

      <h2>Definitions & Guidance</h2>
      <p>
        To learn about consent, sexual violence, sexual misconduct, and sexual
        harassment, visit:
      </p>

      <a
        href="https://www.ucc.ie/en/edi/speakout/terminology/"
        target="_blank"
        rel="noreferrer"
      >
        Definitions & Terminology
      </a>

     <hr />

      <h2>Framework</h2>
      <p>
        Ireland’s higher education institutions follow the Consent Framework for
        ending sexual violence and harassment.
      </p>

      <ul>
        <li>Training and education</li>
        <li>Ongoing messaging</li>
        <li>School/unit initiatives</li>
        <li>Student services</li>
        <li>Care and support</li>
        <li>Complaints processes</li>
        <li>Monitoring and evaluation</li>
      </ul>

    <hr />

      {/* 🔥 FLIP CARDS SECTION (UPDATED WITH IMAGES) */}
      <h2>Mission, Vision & Core Values</h2>

      <div className="flip-container">

        {/* Mission */}
        <div className="flip-card">
          <div className="flip-inner">

            <div className="flip-front mission">
              <img src="naassomz1-people-6027028.jpg" alt="Mission" />
              <h3>Mission</h3>
              <p>Hover to view</p>
            </div>

            <div className="flip-back">
              <p>
                The mission of CEGRAD is to engage in theory and practice to position
                the University as a leader in gender equality and women’s rights
                within the academy and beyond.
              </p>
            </div>

          </div>
        </div>

        {/* Vision */}
        <div className="flip-card">
          <div className="flip-inner">

            <div className="flip-front vision">
              <img src="friends.jpg" alt="Vision" />
              <h3>Vision</h3>
              <p>Hover to view</p>
            </div>

            <div className="flip-back">
              <p>
                CEGRAD was set up with the vision to create a safe, creative and
                inclusive space where gender and women’s rights are fully protected.
              </p>
            </div>

          </div>
        </div>

        {/* Core Values */}
        <div className="flip-card">
          <div className="flip-inner">

            <div className="flip-front values">
              <img src="femalejogger.jpg" alt="Core Values" />
              <h3>Core Values</h3>
              <p>Hover to view</p>
            </div>

            <div className="flip-back">
              <ul>
                <li>Gender equal and inclusive environment</li>
                <li>Equal opportunities for all</li>
                <li>Respect and fairness</li>
              </ul>
            </div>

          </div>
        </div>

      </div>

      <h2>Reporting & Support</h2>
      <p>
        Students can contact Campus Watch and staff can contact HR for support.
      </p>

      <p>Additional policies include:</p>

      <ul>
        <li>Student Rules</li>
        <li>Dignity at Work Policy</li>
        <li>Grievance Procedure</li>
        <li>Fitness to Practice Policy</li>
        <li>Fitness to Continue in Study Policy</li>
      </ul>

      <hr />

      <p>
        For more information about prevention programs and initiatives, please
        refer to official university resources.
      </p>
    </div>
  );
}

export default Policies;