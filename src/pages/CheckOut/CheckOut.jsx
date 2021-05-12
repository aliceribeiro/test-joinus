import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./CheckOut.css";
import NavBar from "../../components/NavBar/NavBar";
import successImg from "../../assets/success.svg";

function CheckOut() {
  return (
    <Fragment>
      <NavBar />
      <section id="checkout" className="mt-5">
        <div className="container checkout-card">
          <div className="container checkout-card_content">
            <div className="container-fluid pt-5 pb-5 checkout-card_header">
              <h4>Compra efetuada com sucesso!</h4>
            </div>
            <div className="text-center pb-5">
              <img src={successImg} alt="Icone de sucesso" />
            </div>
            <div className="text-center">
              <Link to="/pizza-list">
                <button className="mb-5 checkout-card_btn-back">Voltar</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default CheckOut;
