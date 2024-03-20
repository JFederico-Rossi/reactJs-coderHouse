import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element = {<ItemListContainer greeting={'WELCOME TO GROUND | Reconnect with Mother Earth'}/>}/>
          <Route exact path="/category/:categoryId" element = {<ItemListContainer/>}/>
          <Route exact path="/product/:productId" element = {<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
