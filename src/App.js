import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './App.css';
import CreateIndAcc from './components/CreateAccount';
import CreateOption from './components/CreateOption';
import UserLogin from './components/UserLogin';
import Forget from './components/Forget';
import CreateOrg from './components/Organization';
import Activate from './components/activate';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={CreateOption} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/individual" component={CreateIndAcc} />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/organization" component={CreateOrg} />
          <Route exact path="/token" component={Activate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
