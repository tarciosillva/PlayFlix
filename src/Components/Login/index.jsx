import React from "react";
import {Link} from "react-router-dom";

import mailIcon from "../../assets/mail_outline_white_24dp.svg";
import keyIcon from "../../assets/key_white_24dp.svg";

import "./index.css";
import "../../styles/globalFormCad.css";

function Login() {
  return (
    <div className="conatinerLogin">
      <h1 className="titleContainer">Login</h1>

      <p className="information">Preencha os dados de acesso:</p>

      <div className="containernerForm">
        <form>
          <div className="dataInputContainer">
            <img src={mailIcon} alt="Icone Email" />
            <input type="mail" placeholder="Email" />
          </div>
          <div className="dataInputContainer">
            <img src={keyIcon} alt="Icone Senha" />
            <input type="password" placeholder="Senha" />
          </div>
        </form>
        <Link to="/filmes">
          <button className="buttonText">&nbsp; Entrar &nbsp;</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
