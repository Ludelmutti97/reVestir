import React from "react";
import "./App.css";
import HomePage from "./componentes/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Closet from "./componentes/Closet/Closet";
import SingleProduct from "./componentes/SingleProduto/SingleProduto";
import About from "./componentes/AboutUs/About";
import { Luana } from "./componentes/luana/luana";
//import Example from "./componentes/carrosel/Roupa/Carrousel/CarroselHome"

//import Example from "./componentes/Carrousel/CarroselHome"
import Produtos from "./componentes/AllProdutos/AllProdutos";
//import KeepMountedModal from "./componentes/PopUp/ProdutoHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
       
        <Route path="/Closet" element={<Closet />} />
        <Route path="/luana" element={<Luana />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<SingleProduct />} />
        {/* <Route path="/produtohomepage" element={<KeepMountedModal />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
