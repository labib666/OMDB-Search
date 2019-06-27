import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { request } from '../../reducers/common';

import {
  LOGIN,
  ERROR,
} from '../../constants';

function mapStateToProps(state) {
  return {
    token: state.token,
  }
}

function onSubmit(username, password) {
  return (dispatch, getState) => {
    request.post('/public/login', {
      username,
      password,
    }).then(data => {
      console.log('data:', data);
      // dispatch({
      //   data,
      //   type: LOGIN,
      // });
    }).catch(error => {
      console.error('error: ', error);
      dispatch ({
        error,
        type: ERROR,
      });
    });
  }
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => dispatch(onSubmit(username, password)),
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  onPropChange(propName, value) {
    this.setState({
      ...this.state,
      [propName]: value,
    });
  }

  // componentDidMount() {
  //   console.log('did-mount', this.props, this.state);
  // }

  // shouldComponentUpdate() {
  //   console.log('did-mount', this.props, this.state);
  //   return true;
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('snap-before', this.props, this.state);
  //   return null;
  // }

  // componentDidUpdate() {
  //   console.log('did-update', this.props, this.state);
  // }

  // componentDidCatch() {
  //   console.log('did-catch', this.props, this.state);
  // }

  // componentWillUnmount() {
  //   console.log('will-unmount', this.props, this.state);
  // }


  render() {
    const { onSubmit } = this.props;
    const { username, password } = this.state;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Login</h1>
              <p className="text-xs-center">
                <Link to="/signup">
                  Need an account?
                </Link>
              </p>

              <form onSubmit={
                (ev) => {
                  console.log(
                    '[state]:', JSON.stringify(this.state, null, 2),
                  );
                  onSubmit(username, password);
                }
              }>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={
                        ev => this.onPropChange('username', ev.target.value)
                      }/>
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={
                        ev => this.onPropChange('password', ev.target.value)
                      }/>
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit">
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
