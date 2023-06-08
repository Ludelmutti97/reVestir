import React, { useEffect, useState } from "react";
import "./AllProdutos.css";

import Footer from '../rodape/rodape';
import Header from "../header/header";


function AllProducts() {
  //Criar state
  const [state, setState] = useState([])
  useEffect(() => {
    const options = { method: "GET", headers: { 'Accepts': 'application/json' } };

    async function fetchData() {
      console.log("Fetching...");
      const res = await fetch("/api/products", options)
      if (res.status === 200) {
        console.log("Product")
        const body = await res.json();
        console.log(body)
        setState(body)
        //Guardar body no state
        console.log(state)
      }
    }

    fetchData()
  }, );

  return (
    <>

      <Header/>

      <div className="small-container">
        <div className="row row-2">
          <select>
            <option>Side bar</option>
          </select>
          <h2  className="all">All Products</h2>
        </div>
        <div className="row">
          {
            state.map(p => (
              <div className="col-4">
                <a href={`/${p._id}`}>
                  <img
                    src={p.imagem}
                    alt=""
                  />
                </a>
                <h4>{p.nome}</h4>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            ))
          }

          
        </div>
      </div>

      <div className="page-btn">
        <span>1</span>
        <span>2</span>
        <span>3</span>

        <span>&#8594;</span>
      </div>

     
       <Footer/>
      

    </>
  );
}

export default AllProducts;
