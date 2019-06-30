import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './landing';
import Signup from '../signup';
import Login from '../login';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default Home;
