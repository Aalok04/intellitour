import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Dashboard.css";
import "../pages/Explore";


const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="dashboard-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
            alt="logo"
          />
          <h2>Intellitour</h2>
        </div>

        <ul className="dashboard-nav-links">
          <li className="active">Dashboard</li>
          <li><Link to="/explore">Explore</Link></li>
          <li>Guide</li>
          <li>Homestay</li>
          <li>About</li>
        </ul>

        <button className="dashboard-sign-in">Sign In</button>
      </nav>

      
      <section className="dashboard-hero">
        <div className="dashboard-hero-content">
          <p className="dashboard-subtitle">Welcome Back, Explorer!</p>
          <h1>
            Discover trending destinations, plan adventures, and manage your
            personalized AI-powered itineraries — all in one place.
          </h1>
          <div className="dashboard-hero-buttons">
            <button className="dashboard-explore-btn">
              Explore Destinations →
            </button>
          </div>
        </div>
      </section>

      
      <section className="dashboard-trending">
        <h3>🔥 Trending Now</h3>
        <div className="dashboard-trending-list">
          <div className="dashboard-trend-item">
            Iceland Northern Lights <span>+45%</span>
          </div>
          <div className="dashboard-trend-item">
            Morocco Desert Tours <span>+38%</span>
          </div>
          <div className="dashboard-trend-item">
            Norway Fjords <span>+32%</span>
          </div>
          <div className="dashboard-trend-item">
            New Zealand Adventure <span>+28%</span>
          </div>
        </div>
      </section>

      
      <section className="dashboard-popular">
        <div className="dashboard-popular-header">
          <h2>Popular Destinations</h2>
          <button className="dashboard-view-all">View All →</button>
        </div>
        <p className="dashboard-desc">
          Handpicked places loved by travelers worldwide
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
