// import imageform from "../images/formlogin.png";
// import { useState } from "react";
//import "../style/login.css";

// const LogIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//         credentials: "include", // Needed to include the cookie
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Login failed");
//         return;
//       }

//       // Assuming the token is in the response body
//       // You might want to store it in the local storage or handle it differently
//       localStorage.setItem("token", data.token);

//       // Redirect or perform additional actions on successful login
//     } catch (err) {
//       setError("Login failed");
//     }
//   };

//   return (
//     // <div className="all-page-login">
//     //   <div className="image-form">
//     //     <div>
//     //       <img src={imageform} alt="Login Form" />
//     //     </div>
//     //     <form className="login-form" onSubmit={handleSubmit}>
//     //       <div className="form-group">
//     //         <h2>Login</h2>
//     //         <label htmlFor="username">User Name</label>
//     //         <input
//     //           type="email"
//     //           value={email}
//     //           onChange={(e) => setEmail(e.target.value)}
//     //           placeholder="Email"
//     //           required
//     //         />
//     //       </div>
//     //       <div className="form-group">
//     //         <label htmlFor="password">Password</label>
//     //         <input
//     //           type="password"
//     //           value={password}
//     //           onChange={(e) => setPassword(e.target.value)}
//     //           placeholder="Password"
//     //           required
//     //         />
//     //       </div>

//     //       <button className="button-88 btn-log" type="submit">
//     //         Log In
//     //       </button>
//     //     </form>
//     //     {error && <p>{error}</p>}
//     //   </div>
//     // </div>
//   );
// };

// export default LogIn;
import { useState } from "react";
import { useNavigate } from "react-router";

// import { useHistory } from "react-router-dom";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const history = useHistory(); // Create a history object
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Needed to include the cookie
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");

        return;
      }

      // Assuming the token is in the response body
      // You might want to store it in the local storage or handle it differently
      localStorage.setItem("token", data.token);
      navigate("/");
      // history.push("/"); // Change the path to your homepage route
      // Redirect or perform additional actions on successful login
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LogIn;
