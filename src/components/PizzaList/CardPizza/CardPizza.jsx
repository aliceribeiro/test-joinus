import { Link } from "react-router-dom";

import "./CardPizza.css";

function CardPizza({ pizza, rota }) {
  return (
    <div className="col-md-3">
      <Link to={`/pizza-detail/${pizza.id}`} className="text-decoration-none">
        <div className="card mb-5 card-pizza">
          <img
            src={pizza.imageUrl}
            className="img-fluid card-pizza_image"
            alt={pizza.name}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{pizza.name}</h5>
            <span>&#11088; &#11088; &#11088; &#11088; &#11088;</span>
            <div className="d-flex justify-content-between mt-3">
              <p>a partir de:</p>
              <p className="card-text">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(pizza.priceP)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardPizza;
