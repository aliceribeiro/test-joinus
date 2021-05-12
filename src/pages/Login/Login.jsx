import { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./Login.css";
import logo from "../../assets/logoxds.svg";
import apiService from "../../services/apiService";

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

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleClick() {
    const authenticateResult = await authenticate({ email, password });

    if (authenticateResult === true) {
      history.push("/pizza-list");
    } else {
      alert("Email ou senha inválidos");
    }
  }

  useEffect(() => {}, [email, password]);

  return (
    <Fragment>
      <section id="signin">
        <div className="card mb-3 signin-content">
          <div className="bg-transparent signin-content_logo">
            <img src={logo} className="signin_logo" alt="Logo da Pizzaria" />
          </div>
          <div className="card-body">
            <h4>Entrar</h4>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                name="email"
                className="bg-transparent signin_input-login"
                placeholder="usuário"
              />
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                name="password"
                className="bg-transparent signin_input-login"
                placeholder="senha"
              />
            </form>
          </div>
          <button className="signin_btn" onClick={handleClick}>
            Entrar
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default Signin;
