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
        <ItemsList/>
      </section>
    </>
  );
}

export default App;
