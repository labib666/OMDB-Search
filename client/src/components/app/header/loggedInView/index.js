import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../../../actions';

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    user: state.auth.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: (token) => dispatch(actions.auth.logout(token)),
  };
}

class LoggedInView extends React.Component {
  render() {
    const { token, user } = this.props;
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to='/profile'
            className="nav-link">
            { user.username }
          </Link>
        </li>

        <li className="nav-item">
          <Link
            onClick={ev => this.props.logout(token)}
            className="nav-link">
            Logout
          </Link>
        </li>

      </ul>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInView);
