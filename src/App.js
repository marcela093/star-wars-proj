import React from "react";
import "./App.css";
import Films from "./pages/Films";
import Home from "./pages/index";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/films" component={Films} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
