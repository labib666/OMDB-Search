import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './landing';
import Profile from '../profile';
import Movies from '../movies';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
