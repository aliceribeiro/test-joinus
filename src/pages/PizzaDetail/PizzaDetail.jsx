import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import Detail from "../../components/PizzaDetail/Detail/Detail";
import apiService from "../../services/apiService";

const initialValue = {
  name: "Carregando sabor...",
  imageUrl: "Carregando imagem",
  rating: "",
  priceP: 0,
  priceM: 0,
  priceG: 0,
};

function PizzaDetail() {
  const [values, setValues] = useState(initialValue);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      apiService.listPizzas().then((response) => {
        const pizza = response.find((p) => p.id === id);
        setValues(pizza);
      });
    }
  }, [id, values]);

  return (
    <Fragment>
      <NavBar />
      <Detail values={values} />
    </Fragment>
  );
}

export default PizzaDetail;
