import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './header';
import Home from '../home';
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
    const token = this.props.token || localStorage.getItem('token');
    const HomeView = !!token ? Dashboard : Home;
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={HomeView}></Route>
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
