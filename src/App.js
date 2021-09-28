import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CheckoutOk from './components/CheckoutOk';
import { CartProvider } from './context/cartContext';


function App() {

  return (
    <CartProvider>
      <Router basename="/">
        <header>
          <NavBar/>
        </header>
        <Switch>
          <Route exact path="/">
            <section>
              <ItemListContainer />
            </section>
          </Route>
          <Route exact path="/category/:category">
            <section>
              <ItemListContainer />
            </section>
          </Route>
          <Route exact path="/item/:id">
            <section>
              <ItemDetailContainer />
            </section>
          </Route>
          <Route exact path="/cart">
            <section>
              <Cart />
            </section>
          </Route>
          <Route exact path="/checkout">
            <section>
              <Checkout />
            </section>
          </Route>
          <Route exact path="/checkout-ok">
            <section>
              <CheckoutOk />
            </section>
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
