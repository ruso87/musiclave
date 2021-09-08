import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/cartContext';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
