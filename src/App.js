
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar/NavBar';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Categoria } from './components/categoria/Categoria';
import { Cart } from './components/cart/Cart';
import CartContext from './components/cartContext/CartContext';


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
              {/* <Categoria /> */}
            </Route>

            <Route path='/producto/:id'>
              <ItemDetailContainer />
            </Route>

            <Route exact path='/cart'>
              <Cart />
            </Route>

          </Switch>

        </BrowserRouter>

      </CartContext>
      
    </>
  );
}

export default App;
