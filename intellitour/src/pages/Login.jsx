


//claude users role updated code



import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Save user + role in localStorage
        localStorage.setItem(
          "auth",
          JSON.stringify({ email, role: data.role, token: data.token })
        );

        // Redirect based on role
        if (data.role === "admin") {
          navigate("/admin/dashboard", { replace: true });
        } else if (data.role === "moderator") {
          navigate("/moderator/dashboard", { replace: true });
        } else {
          navigate("/dashboard", { replace: true });
        }
      } else {
        setError(data.message || "Invalid email or password ❌");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <div className="login-card">
        <h1 className="login-title">Welcome Back </h1>
        <p className="login-subtitle">
          Log in to continue planning your next dream trip
        </p>

        {error && (
          <p style={{ color: "#e74c3c", fontSize: "14px", marginBottom: "12px", textAlign: "center" }}>
            {error}
          </p>
        )}

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

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="signup-text">
          Don't have an account?{" "}
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



//upadted login.jsx  ye  jab user id chat assistant me bhejna hai to setUserId ko call karna hai taki user id global state me save ho jaye aur chat assistant me use kar sake


// import React, { useState } from "react";
// import "../style/Login.css";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setUserId }) => {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {

//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await response.json();

//       if (data.success) {

//         alert("Login successful 🎉");

//         // Save user in localStorage
//         localStorage.setItem("auth", JSON.stringify(data.user));

//         // ✅ Set userId for global state
//         setUserId(data.user.id);

//         // redirect
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