
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cart } from './components/cart/Cart';
import CartContext from './components/cartContext/CartContext';
import Formulario from './components/formulario/Formulario';


function App() {
  return (
    <>
      <CartContext>

        <BrowserRouter>

          <NavBar />

          <Switch>

            <Route exact path='/'>
              <ItemListContainer gretting={"Bienvenidos a la Tienda"} />
            </Route>

            <Route path='/categoria/:categoryId'>
              <ItemListContainer gretting={"Bienvenidos a la Tienda"} />
            </Route>

            <Route path='/producto/:id'>
              <ItemDetailContainer />
            </Route>

            <Route exact path='/cart'>
              <Cart />
            </Route>

            <Route exact path='/formulario'>
              <Formulario />
            </Route>

          </Switch>

        </BrowserRouter>

      </CartContext>
      
    </>
  );
}

export default App;
