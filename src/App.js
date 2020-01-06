import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>

      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/:numberOfWeetjes" exact component={Home} />
        <Route path="/" component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
