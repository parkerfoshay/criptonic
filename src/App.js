import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Containers/Home";
import { ProfileCreator } from './Components/ProfileCreator';
import Login from "./Containers/Login";

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Login} />
      
      </div>
    </Router>
  );
};

export default App;
