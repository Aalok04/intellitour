// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Explore from "./pages/Explore";
// import Vendor from "./pages/Vendor";
// import Guide from "./pages/Guide";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/explore" element={<Explore />} />
//             <Route path="/vendor" element={<Vendor />} />
//             <Route path="/guide" element={<Guide />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Signup from "./pages/Signup";
// import Explore from "./pages/Explore";
// import ChatAssistant from "../src/pages/ChatAssistant";
// import ChatIcon from "./components/chatIcon";


// function App() {
//   return (
//     <Router>
//       <ChatIcon/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/explore" element={<Explore />} />
//         <Route path="/assistant" element={<ChatAssistant />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



 // claude code updated version 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import ChatAssistant from "./components/ChatAssistant"; // ✅ move to components folder
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GuidePage from "./pages/Guide";
import HomestayPage from "./pages/Homestay";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/homestay" element={<HomestayPage />} />
        {/* ❌ Remove this → <Route path="/assistant" element={<ChatAssistant />} /> */}
      </Routes>

      {/* ✅ Outside Routes — floats over every page */}
      <Footer />
    </Router>
  );
}

export default App;


//finalupdated App.jsx with ChatAssistant moved outside of Routes so it appears on every page, and cleaned up imports.

// App.jsx


// ye wala code tab ka hai jab history user ke logout hote hi htt rahe the  


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Signup from "./pages/Signup";
// import Explore from "./pages/Explore";
// import ChatAssistant from "./components/ChatAssistant";

// function App() {
//   const [userId, setUserId] = useState(null); // ✅ track logged in user

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login setUserId={setUserId} />} />
//         <Route path="/dashboard" element={<Dashboard setUserId={setUserId} />} />
//         <Route path="/signup" element={<Signup setUserId={setUserId} />} />
//         <Route path="/explore" element={<Explore />} />
//       </Routes>

//       {/* ✅ key prop forces full reset when user changes */}
//       <ChatAssistant key={userId} userId={userId} />
//     </Router>
//   );
// }

// export default App;