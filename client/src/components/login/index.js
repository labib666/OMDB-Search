import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';

import actions from '../../actions'

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => dispatch(actions.auth.login(username, password)),
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  onStateChange(propName, value) {
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
    const { onSubmit, token } = this.props;
    const { username, password } = this.state;

    if (token && token.length > 0) {
      this.props.history.push('/');
    }

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
                  ev.preventDefault();
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
                      onChange={ev => this.onStateChange('username', ev.target.value)}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={ev => this.onStateChange('password', ev.target.value)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
