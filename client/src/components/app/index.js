import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './header';
import Home from '../home';
import Login from '../login';
import Signup from '../signup';
import Dashboard from '../dashboard';

import actions from '../../actions';

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: (token) => dispatch(actions.auth.getUser(token)),
  }
}

class App extends React.Component {
  checkAuth() {
    const token = this.props.token;
    if (!token) {
      const storage = localStorage.getItem('token');
      if (storage) {
        this.props.getUser(storage);
      }
    }
  }

  componentDidMount() {
    this.checkAuth();
  }

  render() {
    const token = this.props.token;
    const HomeView = !!token ? Dashboard : Home;
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomeView}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
