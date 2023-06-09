import React from "react";
import "./Rodape.css";
import instagramlogo from "../imagens/instagramlogo.png";
import facebooklogo from "../imagens/facebooklogo.png";
import whatsapplogo from "../imagens/whatsapplogo.png";


function Footer() {
  return (

    <div class="footer_rodape">
      <div class="container_rodape">
        <div class="row">
          <div class="footer-col-2">
            <p>
              {" "}
              ReVestir é um repositório de roupa dedicado à moda sustentável, onde você
              encontrará dicas de estilo consciente, marcas ecológicas e
              iniciativas inovadoras. Junte-se a nós nessa jornada rumo a um
              futuro fashion mais responsável e ético. Seja uma referência de
              segurança e consciência ambiental!
            </p>
          </div>
            <h3>Follow us</h3>
            <br />
            <ul className="">
              <img src={instagramlogo} alt="camisola" height="40" className="img" />

              <img src={facebooklogo} alt="camisola" height="40" className="img" />

              <img src={whatsapplogo} alt="camisola" height="40" className="img" />
            </ul>
          </div>
        </div>
        <hr />
        <p class="copyright">Copyright 2023 - ReVestir</p>
      </div>
    
  )
}

export default Footer;
