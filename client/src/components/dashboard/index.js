import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './landing';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/profile" component={profile}></Route>
          <Route path="/movies" component={movies}></Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

function profile () {
  return (<h1>Hello Profile</h1>);
}

function movies () {
  return (<h1>Hello Movies</h1>);
}

export default Dashboard;
