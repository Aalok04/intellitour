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



import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        
        localStorage.setItem("userEmail", email);

        navigate("/dashboard");
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
