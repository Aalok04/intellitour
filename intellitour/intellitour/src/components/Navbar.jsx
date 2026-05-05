import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../style/Dashboard.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("auth"));

  const handleLogout = () => {
    if (user?.name) {
      localStorage.removeItem(`chatHistory_${user.name}`);
    } else {
      localStorage.removeItem("chatHistory_Traveler");
    }
    localStorage.removeItem("auth");
    navigate("/login");
  };

  // Dont show navbar on landing page (/) or auth pages
  if (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup") {
    return null; 
  }

  return (
    <nav className="dashboard-navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <div className="dashboard-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
          alt="logo"
        />
        <Link to="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
          <h2>Intellitour</h2>
        </Link>
      </div>

      <ul className="dashboard-nav-links">
        <Link to="/dashboard" style={{ textDecoration: "none", color: "inherit" }}>
          <li className={location.pathname === "/dashboard" ? "active" : ""}>Dashboard</li>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none", color: "inherit" }}>
          <li className={location.pathname === "/explore" ? "active" : ""}>Explore</li>
        </Link>
        <Link to="/guide" style={{ textDecoration: "none", color: "inherit" }}>
          <li className={location.pathname === "/guide" ? "active" : ""}>Guide</li>
        </Link>
        <Link to="/homestay" style={{ textDecoration: "none", color: "inherit" }}>
          <li className={location.pathname === "/homestay" ? "active" : ""}>Homestay</li>
        </Link>
        <li>About</li>
      </ul>

      <div className="profile-container">
        {user ? (
          <>
            <div className="profile-icon" onClick={() => setOpen(!open)}>
              {user?.email?.charAt(0).toUpperCase()}
            </div>

            {open && (
              <div className="profile-dropdown" style={{ display: "block" }}>
                <p className="profile-email">{user?.email}</p>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="logout-btn" style={{ background: "#3b5bdb" }}>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
