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





function App() {
  return (
    <div>
      {/* <Explore/>
       */}



    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/explore" element={<Explore />} />

        {/* <Route path="/explore" element={<Explore />} /> */}
        


        {/* You can add more pages later like this: */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
    {/* <Explore/> */}
    </div>

  );
}

export default App;

