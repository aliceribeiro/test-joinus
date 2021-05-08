import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../styles/components/search-navbar.css";

import logo from "../../assets/logoxds.svg";
import searchIcon from "../../assets/search.svg";

function SearchNavBar() {
  return (
    <Fragment>
      <nav id="search-navbar" className="navbar">
        <Link to="/">
          <img src={logo} className="navbar-logo" alt="Logo da Pizzaria" />
        </Link>
        <div className="search-bar">
          <button className="search-bar_icon">
            <img src={searchIcon} className="search-icon" alt="Icone de busca" />
          </button>
          <input type="search" className="form-control mr-sm-2 search-bar_input" placeholder="Search" />
        </div>
      </nav>
    </Fragment>
  )
}

export default SearchNavBar;