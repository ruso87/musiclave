import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <section>
        <ItemListContainer />
      </section>
    </>
  );
}

export default App;
