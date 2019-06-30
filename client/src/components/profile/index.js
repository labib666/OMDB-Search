import React from 'react';
import { connect } from 'react-redux';

import Details from './details';
import Movies from '../movies';

import actions from '../../actions';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => {
  return {
    getUserMovies: () => dispatch(actions.movies.getUserMovies()),
  }
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: 'profile',
    };
  }

  componentDidMount() {
    this.props.getUserMovies();
  }

  onTabChange(newTab) {
    this.setState({
      tab: newTab,
    });
  }

  getTabClasses(tabName) {
    return (this.state.tab === tabName) ? 'nav-link active' : 'nav-link';
  }

  renderTabs() {
    return (
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <a href="#profile"
            className={this.getTabClasses('profile')}
            onClick={(ev) => this.onTabChange('profile')}>
            Profile
          </a>
        </li>

        <li className="nav-item" id="movies">
          <a href="#movies"
            className={this.getTabClasses('movies')}
            onClick={(ev) => this.onTabChange('movies')}>
            Movies
          </a>
        </li>
      </ul>
    );
  }

  render() {
    const { user } = this.props;
    const { tab } = this.state;
    const image = `https://api.adorable.io/avatars/200/${user.id}`;

    const tabToDisplay = (tab === 'profile') ? <Details/> : <Movies/>;
    

    return (
      <div className="profile-page">

        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">

                <img src={image} className="user-img" alt={user.username} />
                <h4>{user.username}</h4>

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">

              <div className="articles-toggle">
                {this.renderTabs()}
              </div>

              {tabToDisplay}

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
