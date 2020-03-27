import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Containers/Home";
import { SignUp } from './Components/SignUp';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path='/signup' component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
