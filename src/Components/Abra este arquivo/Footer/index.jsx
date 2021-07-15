import React from "react";

import pinIcon from "../../assets/place_white_24dp.svg";
import mailIcon from "../../assets/mail_white_24dp.svg";
import phoneIcon from "../../assets/call_white_24dp.svg";

import "./index.css"

function Footer() {
  return (
    <footer>
      <div className="iconsContainer">
        <span className="containerIconsDes">
          <div className="containerIcon" ><img className="iconsFooter" src={pinIcon} alt="Icone Localização" />{" "}</div>
          <p className="local">
            Res.Tiradentes - Av.Carmindo Inácio <br /> <b className="city">Marabá-PA</b>
          </p>{" "}
        </span>
        <span className="containerIconsDes">
          <div className="containerIcon"><img className="iconsFooter" src={phoneIcon} alt="Icone Telefone" /></div>
          <p className="phone"><b>+55 (94) 3322-8596</b></p>
        </span>
        <span className="containerIconsDes">
        <div className="containerIcon"> <img className="iconsFooter" src={mailIcon} alt="Icone Email" /></div>
          <a target="blank" href="http://playfilix.mail.com">
            suporte@playflix.com
          </a>{" "}
        </span>
      </div>

      <div className="fContainerInformation">
        <b className="about">Sobre a Empresa</b>
        <p className="textAbout">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Aspernatur praesentium quae, itaque non corrupti expedita tenetur
          quaerat <br />
          dolorum nesciunt impedit. Odit laudantium fugit quam ducimus sunt
          <br />
          rem consectetur fuga ullam.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
