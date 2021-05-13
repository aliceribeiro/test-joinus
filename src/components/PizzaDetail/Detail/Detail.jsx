import { Link } from "react-router-dom";

import "./Detail.css";
import backImg from "../../../assets/arrow-back.svg";
import UIContainer from "../../UI/Container/Container";
import { useState } from "react";

function Detail({ values }) {
  const [price, setPrice] = useState(0);

  return (
    <UIContainer>
      <div id="detail" className="container mt-5">
        <div className="card mb-3 bg-transparent border-0">
          <div className="row no-gutters">
            <div className="col-md-6">
              <Link to="/pizza-list">
                <img src={backImg} className="mt-3" alt="Botão de voltar" />
              </Link>
              <img
                src={values.imageUrl}
                className="img-fluid pt-5 rounded"
                alt="Pizza"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body pt-0 pr-0 mr-3">
                <div className="mt-3 mb-3 text-center">
                  <h4 className="detail_text">{values.name}</h4>
                  <span className="text-muted">
                    &#11088; &#11088; &#11088; &#11088; &#11088;
                  </span>
                </div>
                <div className="pb-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur deserunt dolor sunt eligendi repellendus
                    repudiandae.
                  </p>
                </div>

                <div className="pizza-size">
                  <p className="card-text">
                    <small>Escolha o tamanho</small>
                  </p>

                  <div
                    className="btn-group d-flex justify-content-between mb-5"
                    role="group"
                  >
                    <button
                      onClick={() => setPrice(values.priceP)}
                      type="button"
                      className="btn-secondary mr-3 detail_btn-size"
                    >
                      P
                    </button>
                    <button
                      onClick={() => setPrice(values.priceM)}
                      type="button"
                      className="btn-secondary mr-3 detail_btn-size"
                    >
                      M
                    </button>
                    <button
                      onClick={() => setPrice(values.priceG)}
                      type="button"
                      className="btn-secondary detail_btn-size"
                    >
                      G
                    </button>
                  </div>
                  <h4 className="mb-3 detail_text">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(price)}
                  </h4>
                </div>

                <Link to="/check-out">
                  <button className="detail_btn-buy">Comprar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UIContainer>
  );
}

export default Detail;
