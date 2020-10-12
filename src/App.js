import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Films from "./pages/Films";
import Home from "./pages/index";
import Planets from "./pages/Planets";
import Characters from "./pages/Characters";
import Footer from "./components/Footer";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/character-detail" component={CharacterDetail} />
          <Route exact path="/movies" component={Films} />
          <Route exact path="/planets" component={Planets} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
