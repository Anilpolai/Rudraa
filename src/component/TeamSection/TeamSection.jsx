import React from "react";
import { useSelector } from "react-redux";
import { selectTeamMembers } from "../../Redux/Slice/roote";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./TeamSection.css";

export default function TeamSection() {
  const teamMembers = useSelector(selectTeamMembers);

  return (
    <section className="team-section">
      <div className="team-container">
        <h5 className="team-subtitle">OUR EXPERT TEAM</h5>
        <h2 className="team-title">Meet Our Ketchup Makers</h2>

        <div className="team-wrapper">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="img-box">
                  <img src={member.image} alt={member.name} />

                  {/* Hover icons */}
                  <div className="social-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                  </div>
                </div>

                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
