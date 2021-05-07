import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './signin.css';
import logo from '../../assets/logoxds.svg';

function Signin() {
  return (
    <Fragment>
      <main id="signin">
        <div className="card mb-3 signin-content">
          <div className="bg-transparent signin-content_logo">
            <img src={logo} className="logo" alt="Logo da Pizzaria" />
          </div>
          <div className="card-body">
            <h4>Entrar</h4>
            <input type="email" className="bg-transparent input-login" placeholder="usuário" />
            <input type="password" className="bg-transparent input-login" placeholder="senha" />
          </div>
          <Link to="/pizza-list" className=" btn-signin">Entrar</Link>
        </div>
      </main>
    </Fragment>
  )
}

export default Signin;