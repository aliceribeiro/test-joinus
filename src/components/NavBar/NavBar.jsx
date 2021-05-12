import { Link } from "react-router-dom";

import "./NavBar.css";
import logo from "../../assets/logoxds.svg";

function NavBar() {
  return (
    <nav id="navbar">
      <Link to="/pizza-list">
        <img src={logo} className="navbar_logo" alt="Logo da Pizzaria" />
      </Link>
    </nav>
  );
}

export default NavBar;
