// import React, { useState } from "react";
// import "../style/Signup.css";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 🔒 Simple validation
//     if (password !== confirmPassword) {
//       alert("Passwords do not match ❌");
//       return;
//     }

//     // 🧠 Store user info (for demo purpose only)
//     const newUser = { name, email, password };
//     localStorage.setItem("userData", JSON.stringify(newUser));

//     alert("Account created successfully 🎉");
//     navigate("/login"); // Redirect to login page after signup
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">
//         <h1 className="signup-title">Create Account ✨</h1>
//         <p className="signup-subtitle">
//           Join Intellitour and start planning your dream trips today!
//         </p>

//         <form onSubmit={handleSubmit} className="signup-form">
//           <label>Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

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
//             placeholder="Create a password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <label>Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="signup-btn">Sign Up</button>
//         </form>

//         <p className="login-text">
//           Already have an account?{" "}
//           <span
//             className="login-link"
//             onClick={() => navigate("/login")}
//             style={{ color: "#007bff", cursor: "pointer" }}
//           >
//             Log in
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;





// This is the updated Signup component that integrates with the backend API for user registration. It includes form validation, error handling, and navigation to the login page upon successful signup.

// import React, { useState } from "react";
// import "../style/Signup.css";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();




//     if (password !== confirmPassword) {
//       alert("Passwords do not match ❌");
//       return;
//     }

    
//     try {
//       const response = await fetch(`http://localhost:5000/api/auth/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("Account created successfully 🎉");
//         navigate("/login"); 
//       } else {
//         alert(data.message || "Signup failed 😢");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong ❌");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">
//         <h1 className="signup-title">Create Account ✨</h1>
//         <p className="signup-subtitle">
//           Join Intellitour and start planning your dream trips today!
//         </p>

//         <form onSubmit={handleSubmit} className="signup-form">
//           <label>Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

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
//             placeholder="Create a password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <label>Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="signup-btn">Sign Up</button>
//         </form>

//         <p className="login-text">
//           Already have an account?{" "}
//           <span
//             className="login-link"
//             onClick={() => navigate("/login")}
//             style={{ color: "#007bff", cursor: "pointer" }}
//           >
//             Log in
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



//updated Signup component with backend integration and form validation


import React, { useState } from "react";
import "../style/Signup.css";
import { useNavigate } from "react-router-dom";

const ROLES = ["user", "Partner", "admin"];

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match ");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters ");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (data.success) {
        navigate("/login");
      } else {
        setError(data.message || "Signup failed ");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create Account </h1>
        <p className="signup-subtitle">
          Join Intellitour and start planning your dream trips today!
        </p>

        {error && (
          <p style={{ color: "#e74c3c", fontSize: "14px", marginBottom: "12px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="signup-form">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <label>Role</label>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            {ROLES.map((r) => (
              <button
                type="button"
                key={r}
                onClick={() => setRole(r)}
                style={{
                  flex: 1,
                  padding: "9px 4px",
                  borderRadius: "8px",
                  border: role === r ? "2px solid #007bff" : "1px solid #ccc",
                  background: role === r ? "#e8f0fe" : "transparent",
                  color: role === r ? "#007bff" : "#666",
                  fontWeight: role === r ? "600" : "400",
                  fontSize: "13px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.2s",
                }}
              >
                {r}
              </button>
            ))}
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <span
            className="login-link"
            onClick={() => navigate("/login")}
            style={{ color: "#007bff", cursor: "pointer" }}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;