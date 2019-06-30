import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LoggedInView from './loggedInView';
import LoggedOutView from './loggedOutView';

function mapStateToProps(state) {
  return {
    token: state.auth.token,
  }
}

class Header extends React.Component {

  render() {
    const { token } = this.props;
    const headerView = (token && token.length > 0)
      ? <LoggedInView/>
      : <LoggedOutView/>

    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            OMDB Search
          </Link>

          { headerView }
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Header);
