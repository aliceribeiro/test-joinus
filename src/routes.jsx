import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import PizzaDetail from "./pages/PizzaDetail/PizzaDetail";
import PizzaList from "./pages/PizzaList/PizzaList";
import CheckOut from "./pages/CheckOut/CheckOut";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/pizza-list" component={PizzaList} />
        <Route path="/pizza-detail/:id" component={PizzaDetail} />
        <Route path="/check-out" component={CheckOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
