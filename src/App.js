import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
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
  );
}

export default App;
