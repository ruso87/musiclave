import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContext } from "./context/cartContext";
import Cart from './components/Cart';


function App() {

  const [myCart, setMyCart] = useState([]);

  return (
    <CartContext.Provider value={{ myCart, setMyCart }}>
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
    </CartContext.Provider>
  );
}

export default App;
