import './App.css';
import NavBar from './components/NavBar';
import ItemsList from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <section>
        <ItemsList greeting="Este será mi carrito."/>
      </section>
    </>
  );
}

export default App;
