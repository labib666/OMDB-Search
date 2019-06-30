import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from '../../../../actions';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(actions.auth.logout()),
  };
}

class LoggedInView extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
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

        <li className="nav-item" id="logout">
          <a href="#logout"
            onClick={ev => this.props.logout()}
            className="nav-link">
            Logout
          </a>
        </li>

      </ul>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInView);
