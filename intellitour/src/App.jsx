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
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import ChatAssistant from "../src/pages/ChatAssistant";
import ChatIcon from "./components/chatIcon";


function App() {
  return (
    <Router>
      <ChatIcon/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/assistant" element={<ChatAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;

