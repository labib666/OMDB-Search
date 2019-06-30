import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './landing';
import Profile from '../profile';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/movies" component={movies}></Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

function movies () {
  return (<h1>Hello Movies</h1>);
}

export default Dashboard;
