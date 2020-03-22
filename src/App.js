import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Containers/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
