import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Filmes from "./Pages/Filmes";
import Series from "./Pages/Series";
import Inicial from "./Pages/Inicial"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/filmes" exact="true" component={Filmes}/>
          <Route path="/series" component={Series}/>
          <Route path="/inicial" component={Inicial}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
