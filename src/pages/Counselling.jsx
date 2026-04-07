import React from "react";
import "./Counselling.css";

const counselors = [
  {
    name: "Dr. Ada Mensah",
    phone: "+233 24 123 4567",
    background: `Dr. Ada Mensah is a mental health specialist with over 10 years of experience supporting individuals dealing with stress, anxiety, and depression. 
    She earned her Doctorate in Clinical Psychology and has worked in hospitals,
     schools, and private practice. Dr. Mensah uses evidence-based methods such as cognitive-behavioral therapy and mindfulness to help 
     clients manage emotions, develop resilience, and improve overall well-being. 
     Her sessions focus on providing a safe and empathetic environment, enabling clients to explore their 
      and feelings openly. She also conducts workshops to raise awareness about mental health, emphasizing practical coping 
      strategies and early intervention. Dr. Mensah believes that every individual can achieve personal growth and emotional balance with the 
      right guidance and support.`
  },
  {
    name: "Mr. Kofi Boateng",
    phone: "+233 24 234 5678",
    background: `Mr. Kofi Boateng is a career guidance counselor with eight years of experience helping clients
     identify strengths, explore career paths, and achieve professional goals. He holds a Master’s degree in Counseling
      and uses assessments, coaching, and practical strategies to guide clients.
       Mr. Boateng assists with resume building, interview preparation, and career planning,
        ensuring that clients are well-equipped for professional success. He also conducts
         workshops on career readiness and skill development. His approach is client-centered
         , encouraging self-reflection, clarity, and confidence in decision-making.
          Mr. Boateng is dedicated to helping individuals find fulfillment and purpose
           in their professional journeys.`
  },
  {
    name: "Ms. Ama Osei",
    phone: "+233 24 345 6789",
    background: `Ms. Ama Osei is a stress management coach with five years of experience assisting individuals in coping with
     daily stress and life transitions. She integrates mindfulness, relaxation techniques, 
     and cognitive strategies into her counseling sessions. Ms. Osei helps clients develop personalized
      stress-reduction plans and practical techniques to maintain emotional balance and mental clarity. 
      She conducts workshops on stress management, promoting awareness and resilience. Her approach is empathetic
       and client-focused, ensuring that each individual learns effective ways to manage stress and improve overall 
       well-being.`
  },
];

const Counselling = () => {
  return (
    <div className="counselling-container">
      <h1 className="page-title">Our Professional Counselors</h1>

      <div className="counsellor-list">
        {counselors.map((counselor) => (
          <div key={counselor.name} className="counsellor-card">
            <div className="counsellor-photo"></div>
            <h2 className="counsellor-name">{counselor.name}</h2>
            <p className="counsellor-phone">📞 {counselor.phone}</p>
            <p className="counsellor-background">{counselor.background}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counselling;