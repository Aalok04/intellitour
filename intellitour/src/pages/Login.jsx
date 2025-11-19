// src/pages/Login.jsx
// import React, { useState } from "react";
// import "../style/Login.css";
// import { Navigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
//   };

  

  

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h1 className="login-title">Welcome Back 👋</h1>
//         <p className="login-subtitle">Log in to continue planning your next dream trip</p>

//         <form onSubmit={handleSubmit} className="login-form">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="login-btn">Login</button>
//         </form>

//         <p className="signup-text">
//           Don’t have an account? <a href="#">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from "react";
// import "../style/Login.css";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (email === "user@example.com" && password === "123456") {
//       alert("Login successful 🎉");
//       localStorage.setItem("userEmail", email);
//       navigate("/dashboard");
//     } else {
//       alert("Invalid email or password ❌");
//     }
//   };

//   return (
//     <div className="login-container">
//       {/* 🠔 Back button */}
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <div className="login-card">
//         <h1 className="login-title">Welcome Back 👋</h1>
//         <p className="login-subtitle">
//           Log in to continue planning your next dream trip
//         </p>

//         <form onSubmit={handleSubmit} className="login-form">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>

//         <p className="signup-text">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             style={{ color: "#007bff", cursor: "pointer" }}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;








// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // 👈 Import the hook
// import "../style/Login.css";

// const Login = () => {
//   const navigate = useNavigate(); // 👈 initialize navigate
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 🧠 Example login logic — you can replace this with real API calls
  //   if (email === "user@example.com" && password === "123456") {
  //     alert("Login successful 🎉");
  //     navigate("/dashboard"); // 👈 redirect to new page
  //   } else {
  //     alert("Invalid email or password ❌");
  //   }
  // };

//   return (
//     <div className="login-page">
//       <h2>Welcome Back 👋</h2>
//       <form className="login-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="login-submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import "../style/Login.css";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const response = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("Login successful 🎉");

        
//         localStorage.setItem("userEmail", email);

//         navigate("/dashboard");
//       } else {
//         alert(data.message || "Invalid email or password ❌");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong ❌");
//     }
//   };

//   return (
//     <div className="login-container">
     
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <div className="login-card">
//         <h1 className="login-title">Welcome Back 👋</h1>
//         <p className="login-subtitle">
//           Log in to continue planning your next dream trip
//         </p>

//         <form onSubmit={handleSubmit} className="login-form">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>

//         <p className="signup-text">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             style={{ color: "#007bff", cursor: "pointer" }}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//       localStorage.setItem("auth", JSON.stringify({ email }));

//     </div>
//   );
// };

// export default Login;


// import React, { useState, useEffect } from "react";
// import "../style/Login.css";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // If user already logged in → go to dashboard
//   useEffect(() => {
//     const auth = localStorage.getItem("auth");
//     if (auth) {
//       navigate("/dashboard", { replace: true });
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("Login successful 🎉");

//         // Store user login data
//         localStorage.setItem("auth", JSON.stringify({ email }));

//         // Go to dashboard
//         navigate("/dashboard", { replace: true });
//       } else {
//         alert(data.message || "Invalid email or password ❌");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong ❌");
//     }
//   };

//   return (
//     <div className="login-container">
//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ← Back
//       </button>

//       <div className="login-card">
//         <h1 className="login-title">Welcome Back 👋</h1>
//         <p className="login-subtitle">
//           Log in to continue planning your next dream trip
//         </p>

//         <form onSubmit={handleSubmit} className="login-form">
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>

//         <p className="signup-text">
//           Don’t have an account?{" "}
//           <span
//             onClick={() => navigate("/signup")}
//             style={{ color: "#007bff", cursor: "pointer" }}
//           >
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Home";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import Signup from "./Signup";
// import Explore from "./pages/Explore";

// import ProtectedRoute from "./ProtectedRoute";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
          
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* Protected Routes */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/explore"
//             element={
//               <ProtectedRoute>
//                 <Explore />
//               </ProtectedRoute>
//             }
//           />

//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Signup from "./pages/Signup";
// import Explore from "./pages/Explore";

// import ProtectedRoute from "./ProtectedRoute";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>

//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />

//           {/* Protected Routes */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/explore"
//             element={
//               <ProtectedRoute>
//                 <Explore />
//               </ProtectedRoute>
//             }
//           />

//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect already logged in user
  // useEffect(() => {
  //   const user = localStorage.getItem("auth");
  //   if (user) {
  //     navigate("/dashboard", { replace: true });
  //   }
  // }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login successful 🎉");

        // Save user in localStorage
        localStorage.setItem("auth", JSON.stringify({ email }));

        // Redirect to dashboard
        navigate("/dashboard", { replace: true });
      } else {
        alert(data.message || "Invalid email or password ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="login-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="login-card">
        <h1 className="login-title">Welcome Back 👋</h1>
        <p className="login-subtitle">
          Log in to continue planning your next dream trip
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
