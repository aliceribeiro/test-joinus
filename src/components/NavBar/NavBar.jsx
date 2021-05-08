import { Link } from "react-router-dom";

import "../../styles/components/navbar.css";

import logo from "../../assets/logoxds.svg";

function NavBar() {
  return (
    <nav id="navbar" className="navbar">
      <Link to="/pizza-list">
        <img src={logo} className="navbar-logo" alt="Logo da Pizzaria" />
      </Link>
    </nav>
  )
}

export default NavBar;