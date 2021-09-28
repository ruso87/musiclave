import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CheckoutOk from './components/CheckoutOk';
import NoMatch from './components/NoMatch';
import Footer from './components/Footer';
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
            <section className="mainContent">
              <ItemListContainer />
            </section>
          </Route>
          <Route exact path="/category/:category">
            <section className="mainContent">
              <ItemListContainer />
            </section>
          </Route>
          <Route exact path="/item/:id">
            <section className="mainContent">
              <ItemDetailContainer />
            </section>
          </Route>
          <Route exact path="/cart">
            <section className="mainContent">
              <Cart />
            </section>
          </Route>
          <Route exact path="/checkout">
            <section className="mainContent">
              <Checkout />
            </section>
          </Route>
          <Route exact path="/checkout-ok">
            <section className="mainContent">
              <CheckoutOk />
            </section>
          </Route>
          <Route path="*">
            <section className="mainContent">
              <NoMatch />
            </section>
          </Route>
        </Switch>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </CartProvider>
  );
}

export default App;
