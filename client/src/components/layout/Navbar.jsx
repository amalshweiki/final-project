import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../style/navbar.css";
const Navbar = () => {
  return (
    <nav className="Nabvar">
      <ul>
        {/* <Link to="/parents">
          <li>parents</li>
        </Link> */}
        <Link to="/schools">
          <li>Schools</li>
        </Link>
        <Link to="/buses">
          <li>Buses</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>contact</li>
        </Link>
        <Link to="/login">
          <li>Log In</li>
        </Link>
        <li>
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
