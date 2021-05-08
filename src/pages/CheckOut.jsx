import { Fragment } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import successImg from "../assets/success.svg";

import "../styles/pages/check-out.css";

function CheckOut() {
  return (
    <Fragment>
      <NavBar />

      <section id="checkout" className="mt-5">
        <div className="container checkout-card">
          <div className="container checkout-card_content">
            <div className="checkout-card_header pt-5 pb-5">
              <h4>Compra efetuada com sucecsso!</h4>
            </div>
            <div className="text-center pb-5">
              <img src={successImg} alt="Icone de sucesso" />
            </div>
            <div className="text-center">
              <Link to="/pizza-list">
                <button className="btn-back">
                  Voltar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CheckOut;