import imageform from "../images/formlogin.png";
import "../style/login.css";

const LogIn = () => {
  const handleUsernameChange = (event) => {
    // Add logic to handle username change
  };

  const handlePasswordChange = (event) => {
    // Add logic to handle password change
  };

  const handleUserTypeChange = (event) => {
    // Add logic to handle user type change
  };

  return (
    <div className="all-page-login">
      <div className="image-form">
        <div>
          <img src={imageform} alt="Login Form" />
        </div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="name"
              placeholder="User Name"
              value=""
              className="input-form"
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value=""
              className="input-form"
              onChange={handlePasswordChange}
            />
          </div>

          <button className="button-88 btn-log" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
