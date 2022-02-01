
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Categoria } from './components/categoria/Categoria';
import { Cart } from './components/cart/Cart';


function App() {
  return (
    <>

      <BrowserRouter>

        <NavBar />

        <Switch>

          <Route  exact path='/'>
            <ItemListContainer gretting={"Bienvenidos a la Tienda"} />
          </Route>

          <Route  path='/categoria/:category'>
            {/* <ItemListContainer gretting={"Bienvenidos a la Tienda"} /> */}
            <Categoria />
          </Route>

          <Route path='/producto/:id'>
            <ItemDetailContainer />
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>

        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
