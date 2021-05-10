import { Fragment, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import "../../styles/components/signin.css";

import logo from "../../assets/logoxds.svg";
import apiService from "../../services/apiService";
import { useHistory } from "react-router-dom";

// TODO 3 Tratar erro em caso de erro 404 ou outro da API
// 404 - Usuário ou senha inválidos
// diferente de 404 - Sistema indisponível, favor testar novamente em instantes
// TODO 2 Validar se está colocando no localStorage o TOKEN
/**
 * @typedef {Object} AuthenticateInput
 * @property {String} email
 * @property {String} password
 *
 * @param {AuthenticateInput} params 
 * @returns 
 */
async function authenticate({ email, password }) {
  try {
    const apiResult = await apiService.signIn(email, password);
    const { accessToken } = apiResult.data;
    window.localStorage.setItem("token", accessToken);
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("AXIOS ERROR: ", error.toJSON());
      return;
    }
    console.log(error);
  }
}

// TODO 1 colocar para formulário de LOGIN chmar função authenticate passando email e password
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleClick() {
    const authenticateResult = await authenticate({ email, password });

    if (authenticateResult === true) {
      console.log(authenticateResult);
      history.push("/pizza-list");
    } else {
      alert("Email ou senha inválidos");
    }
  }

  useEffect(() => {
    console.log("Alguém mexeu nos values", email, password);
    // authenticate({ email, password });
  }, [email, password]);

  return (
    <Fragment>
      <section id="signin">
        <div className="card mb-3 signin-content">
          <div className="bg-transparent signin-content_logo">
            <img src={logo} className="logo" alt="Logo da Pizzaria" />
          </div>
          <div className="card-body">
            <h4>Entrar</h4>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                console.log(email, password);
              }}
            >
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                name="email"
                className="bg-transparent input-login"
                placeholder="usuário"
              />
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                name="password"
                className="bg-transparent input-login"
                placeholder="senha"
              />
              <input type="submit" value="Entrar" onClick={handleClick} />
            </form>
          </div>
          {/* <button className="btn-signin" onClick={handleClick} >Entrar</button> */}
          {/* <Link to="/pizza-list" className="btn-signin">
            Entrar
          </Link> */}
        </div>
      </section>
    </Fragment>
  );
}

export default Signin;
