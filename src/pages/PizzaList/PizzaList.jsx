import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import apiService from "../../services/apiService";
import List from "../../components/PizzaList/List/List";
import UIContainer from "../../components/UI/Container/Container";
import NavBar from "../../components/NavBar/NavBar";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  const history = useHistory();

  useEffect(() => {
    apiService
      .listPizzas()
      .then((response) => {
        setPizzas(response);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          console.log("AXIOS ERROR: ", err.toJSON());
        }
        history.push("/");
      });
  }, [history]);

  return (
    <Fragment>
      <NavBar />
      <UIContainer>
        <List pizzas={pizzas} loading={!pizzas.length} />
      </UIContainer>
    </Fragment>
  );
}

export default PizzaList;
