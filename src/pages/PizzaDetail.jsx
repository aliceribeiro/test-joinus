import { Fragment } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import "../styles/pages/pizza-detail.css";
import backImg from "../assets/arrow-back.svg";

function PizzaDetail() {
  return (
    <Fragment>
      <NavBar />

      <section id="pizza-detail">
        <div className="container detail">
          <div className="navbar">
            <div>
              <Link to="/pizza-list">
                <img src={backImg} alt="Botão de voltar" />
              </Link>
            </div>
            <div className="pizza-name mt-3">
              <h4>Sabor da pizza</h4>
              <p className="card-text"><small className="text-muted">Estrelinhas...</small></p>
            </div>
          </div>

          <div className="card mb-3 bg-transparent border-0">
            <div className="row no-gutters">
              <div className="col-md-6">
                {/* <img src={imgTest} alt="..."> */}
              </div>
              <div className="col-md-6 ">
                <div className="card-body">
                  <div className="pizza-description pb-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt dolor sunt eligendi repellendus repudiandae!</p>
                  </div>

                  <div className="pizza-size">
                    <p className="card-text"><small>Escolha o tamanho</small></p>

                    <div className="btn-group d-flex justify-content-between mb-5" role="group">
                      <button type="button" className="btn-secondary btn-size mr-3">P</button>
                      <button type="button" className="btn-secondary btn-size mr-3">M</button>
                      <button type="button" className="btn-secondary btn-size">G</button>
                    </div>
                    <h4 className="mb-3">R$ 29,99</h4>
                  </div>

                  <Link to="/check-out">
                    <button className="btn-buy">
                      Comprar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default PizzaDetail;