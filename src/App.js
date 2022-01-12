
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';



function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer gretting={"Bienvenidos a la Tienda"}/>

    </>
  );
}

export default App;
