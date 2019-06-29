import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import Header from './Header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
