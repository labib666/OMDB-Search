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
    onSearch: (search) => dispatch(actions.movies.getSearchedMovies(search)),
  };
}

class LoggedInView extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  onSearchChange(newVal) {
    this.setState({
      ...this.state,
      search: newVal,
    });
  }
  render() {
    const { user } = this.props;
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <input
            className="form-control form-control-md"
            placeholder="Search a movie"
            value={this.state.search}
            onChange={ev => this.onSearchChange(ev.target.value)}
            type="text"/>
        </li>
        
        <li className="nav-item">
          <button
            className="btn btn-md btn-primary pull-xs-left"
            onClick={ev => this.props.onSearch(this.state.search)}>
            Search
          </button>
        </li>

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
