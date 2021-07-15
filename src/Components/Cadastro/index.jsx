import React from "react";

import mailIcon from "../../assets/mail_outline_white_24dp.svg";
import keyIcon from "../../assets/key_white_24dp.svg";
import personIcon from "../../assets/person_white_24dp.svg";

import "./index.css";
import "../../styles/globalFormCad.css"

function Cadastro(props) {
  return (
    <div className="containerCad">
      <h1 className="titleContainer">Não possui conta?</h1>

      <p className="information">Preencha as informaçãoes abaixo:</p>

      <div className="containernerForm">
        <form>
          <div className="dataInputContainer">
            <img src={personIcon} alt="Icone de Pessoa" />
            <input type="text" placeholder="*Nome" />
          </div>
          <div className="dataInputContainer">
            <img src={mailIcon} alt="Icone Email" />
            <input type="mail" placeholder="*Email" />
          </div>
          <div className="dataInputContainer">
            <img src={keyIcon} alt="Icone Senha" />
            <input type="password" placeholder="*Senha" />
          </div>
        </form>
        <button className="buttonText">Cadastrar</button>
      </div>
    </div>
  );
}

export default Cadastro;
