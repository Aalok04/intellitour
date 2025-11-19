import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Dashboard.css";
import "../pages/Explore";

const Dashboard = () => {
  const navigate = useNavigate();

  // Read logged-in user data
  const user = JSON.parse(localStorage.getItem("auth"));

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // Block back button 
  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      window.history.go(1);
    };
  }, []);

  // Redirect if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

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
          <Link to="/explore"><li>Explore</li></Link>
          <li>Guide</li>
          <li>Homestay</li>
          <li>About</li>
        </ul>

        {/* User Profile Dropdown */}
        <div className="profile-container">
          <div className="profile-icon">
            {user?.email?.charAt(0).toUpperCase()}
          </div>

          <div className="profile-dropdown">
            <p className="profile-email">{user?.email}</p>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
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
