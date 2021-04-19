import React from "react";
import Home from "./Home";
import Appdata from "./Appdata"
import "./css/style.css";
import { HashRouter as Router, Route,Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Appdata/:id/:Appname/:publisherName" component={Appdata} />
      </Switch>
    </Router>
  );
};

export default App;
