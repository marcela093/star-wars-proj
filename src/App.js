import React from "react";
import "./App.css";
import Films from "./pages/Films";
import Home from "./pages/index";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/movies" component={Films} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
