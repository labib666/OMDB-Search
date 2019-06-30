import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import actions from '../../actions';

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, email, password) => dispatch(actions.auth.signup(username, email, password)),
});

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  onStateChange(propName, value) {
    this.setState({
      ...this.state,
      [propName]: value,
    });
  }

  render() {
    const { onSubmit, token } = this.props;
    const { username, email, password } = this.state;

    if (token && token.length > 0) {
      this.props.history.push('/');
    }

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Signup</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>

              <form onSubmit={
                (ev) => {
                  ev.preventDefault();
                  onSubmit(username, email, password);
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
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={ev => this.onStateChange('email', ev.target.value)}/>
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
                    Signup
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));

