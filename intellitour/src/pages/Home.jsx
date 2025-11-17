
// import React from "react";
// import "../style/Home.css";


// const Home = () => {
//   return (
//     <div className="hero">
//       {/* Navbar */}
//       <nav className="navbar">
//         <h1 className="logo">Intellitour</h1>
//         <button className="login-btn">Login</button>
//       </nav>

//       {/* Hero Content */}
//       <div className="hero-content">
//         <h1 className="hero-title">Plan Your Perfect Trip with AI</h1>
//         <p className="hero-subtitle">
//           Discover personalized itineraries crafted just for you. Tell us your
//           preferences, and we'll create the perfect travel experience tailored
//           to your dreams.
//         </p>

//         <div className="features">
//           <button className="feature-btn">🏝️ Perfect Destinations</button>
//           <button className="feature-btn">📅 Custom Itineraries</button>
//           <button className="feature-btn">🤖 AI-Powered Planning</button>
//         </div>

//         <button className="main-btn">Start Planning Your Trip</button>
//         <p className="footer-text">
//           Join thousands of travelers who've discovered their perfect journey
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom"; // 🧭 Import navigation hook
import "../style/Home.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to /login page when button clicked
  };

  return (
    <div className="hero">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Intellitour</h1>
        <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">Plan a Perfect Trip with Intellitour </h1>
        <p className="hero-subtitle">
          Discover personalized itineraries crafted just for you. Tell us your
          preferences, and we'll create the perfect travel experience tailored
          to your dreams.
        </p>

        <div className="features">
          <button className="feature-btn" onClick={handleLoginClick}>🏝️ Perfect Destinations</button>
          <button className="feature-btn" onClick={handleLoginClick}>📅 Custom Itineraries</button>
          <button className="feature-btn" onClick={handleLoginClick}>🤖 AI-Powered Planning</button>
        </div>

        <button className="main-btn" onClick={handleLoginClick}>Start Planning Your Trip</button>
        <p className="footer-text">
          Join thousands of travelers who've discovered their perfect journey
        </p>
      </div>
    </div>
  );
};

export default Home;

