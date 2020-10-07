import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shoppage/shoppage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
