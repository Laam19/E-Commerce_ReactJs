import "./App.css";
import { Layout } from "./core/Layout";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Cart } from "./Pages/CartPage/Cart";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Product} />
          <Route path="/productlist" component={ProductList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
