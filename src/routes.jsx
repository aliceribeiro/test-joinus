
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import PizzaDetail from './pages/PizzaDetail';
import PizzaList from './pages/PizzaList';
import CheckOut from './pages/CheckOut';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/pizza-list" component={PizzaList} />
        <Route path="/pizza-detail" component={PizzaDetail} />
        <Route path="/check-out" component={CheckOut} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;