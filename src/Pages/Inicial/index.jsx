import React, { Component } from "react";

import Cadastro from "../../Components/Cadastro";
import Login from "../../Components/Login";
import Footer from "../../Components/Footer";

import "./index.css";

class Inicial extends Component {
  render() {
    return (
      <>
        <div className="initialContainer">
          <div className="loginContainerInitial">
            <Login />
          </div>
          <div className="cadContainerInitial">
            <Cadastro />
          </div>
        </div>
      </>
    );
  }
}

export default Inicial;
