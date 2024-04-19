import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<ItemListContainer greeting={'WELCOME TO GROUND | Reconnect with Mother Earth'}/>}/>
          <Route exact path="/category/:categoryId" element = {<ItemListContainer/>}/>
          <Route exact path="/product/:productId" element = {<ItemDetailContainer/>}/>
          <Route exact path='/cart' element = {<Cart/>}/>
          <Route exact path='/checkout' element = {<Checkout/>}/>

          </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
