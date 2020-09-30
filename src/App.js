import React from "react";
import "./App.css";
import Films from "./pages/Films";
import Home from "./pages/index";
import Planets from "./pages/Planets";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/movies" component={Films} />
          <Route exact path="/planets" component={Planets} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
