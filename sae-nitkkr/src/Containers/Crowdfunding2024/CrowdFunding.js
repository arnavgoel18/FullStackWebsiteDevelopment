import React, { useEffect, useState } from 'react';
import "./CrowdFunding-styles.css";
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import heroimage from "../../Assets/Crowdfunding2024/hero-image.webp"
import nitrox from "../../Assets/Crowdfunding2024/nitrox.webp";
import accelerons from "../../Assets/Crowdfunding2024/accelerons.webp";
const CrowdfundingPage = () => {
  const progress = {
    raised: 250000,
    target: 1000000,
    contributors: 125,
    daysLeft: 45,
  };

  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const targetWidth = calculateProgress();
    setTimeout(() => {
      setAnimatedWidth(targetWidth);
    }, 100); // Delay to trigger the animation after the component mounts
  }, []); // Run only once when the component mounts

  const calculateProgress = () => {
    return (progress.raised / progress.target) * 100;
  };
  const quickStats = [
    { icon: "👥", text: "400+ Students Reached", subtext: "through Autokriti" },
    { icon: "🏆", text: "2 Competitive Teams", subtext: "NITROX & Accelerons" },
    { icon: "🏅", text: "Multiple Awards", subtext: "National & International" },
    { icon: "🏭", text: "Global Presence", subtext: "International Competitions" },
  ];

  const impacts = [
    {
      icon: "💡",
      title: "Innovation Impact",
      description: "Fueling cutting-edge engineering projects and pushing technological boundaries.",
    },
    {
      icon: "🎓",
      title: "Educational Impact",
      description: "Nurturing talent and creating opportunities for hands-on learning.",
    },
    {
      icon: "🏭",
      title: "Industry Impact",
      description: "Building strong connections between academia and industry.",
    },
  ];

  const teams = [
    {
      name: "Team NITROX",
      image: nitrox,
      highlights: [
        "E-BAJA TI Clearance",
        "ATVC Virtuals AIR-1",
        "BAJA USA Representation",
      ],
    },
    {
      name: "Team Accelerons",
      image: accelerons,
      highlights: [
        "SUPRA Innovation Award",
        "AIR 3 in Cost Event",
        "AIR 4 in Design Event",
      ],
    },
  ];

  const handleClick=()=>{
    window.location = "/crowdfunding/form";
  }

  return (
    <>
      <NavBar/>
      <div className="page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-overlay">
            <img
              src={heroimage}
              alt="Team vehicles"
              className="hero-image"
            />
          </div>
          <div className="hero-content">
            <h1>Support SAE Unity Drive</h1>
            <p>
            Your contribution empowers innovation, fuels dreams, and drives success.
            </p>
            <div className="progress-bar-container">
              <div className="progress-bar-stats">
                <span>₹{progress.raised.toLocaleString()}</span>
                <span>₹{progress.target.toLocaleString()}</span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${animatedWidth}%` ,transition:"width 2s ease"}}
                ></div>
              </div>
              <div className="progress-bar-info">
                <span>{progress.contributors} Contributors</span>
                <span>{progress.daysLeft} Days Left</span>
              </div>
            </div>
            <button className="contribute-button" onClick={handleClick}>Contribute Now</button>
          </div>
        </div>

        <div className="unity-drive-section">
          <div className="container">
            <h2>What is SAE Unity Drive?</h2>
            <p>
              SAE UNITY DRIVE is a yearly fundraising initiative where we invite you—our seniors and mentors—to contribute for the continued growth and success of these clubs.
            </p>
            <p>
              We propose a flexible yearly contribution plan where alumni can donate based on their capacity—be it ₹5,000, ₹10,000, or more. Every bit counts and will go a long way in shaping the future of Nitrox and Accelerons.
            </p>
          </div>
        </div>

        {/* Add other sections here */}
        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="container">
            <div className="stats-grid">
              {quickStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <h3>{stat.text}</h3>
                  <p>{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="teams-section">
          <div className="container">
            <h2>Our Teams</h2>
            <div className="teams-grid">
              {teams.map((team, index) => (
                <div key={index} className="team-card">
                  <img src={team.image} alt={team.name} className="team-image" />
                  <div className="team-content">
                    <h3>{team.name}</h3>
                    <ul>
                      {team.highlights.map((highlight, i) => (
                        <li key={i}>➤ {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Impact Section */}
        <div className="impact-section">
          <div className="container">
            <h2>Our Impact</h2>
            <div className="impact-grid">
              {impacts.map((impact, index) => (
                <div key={index} className="impact-card">
                  <div className="impact-icon">{impact.icon}</div>
                  <h3>{impact.title}</h3>
                  <p>{impact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="container">
            <h2>Support Our Journey</h2>
            <p>
              Help us reach our goal of ₹23,00,000! <br/>Every contribution counts
            </p>
            <button className="cta-button" onClick={handleClick}>Contribute Now</button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <div className="container">
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <div>
                <strong>Bhavya Gevariya</strong>
                <p>President</p>
                <p>+91 9974837732</p>
                <p>Bhavyagevariya@gmail.com</p>
              </div>
              <div>
                <strong>Umesh Kumar</strong>
                <p>Vice President</p>
                <p>+91 7717545694</p>
                <p>12116024@nitkkr.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CrowdfundingPage;
