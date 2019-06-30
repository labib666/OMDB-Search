import React from 'react';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      favorite: true,
    }
  }
  handleClick() {
    
    if (this.state.favorite) {
      this.props.addToFavorite(this.state.id);
    } else {
      this.props.removeFromFavorite(this.state.id);
    }
  }
  render() {
    const { id, name, image } = this.props.movie;
    const favoriteButtonClass = this.state.favorite
      ? FAVORITED_CLASS
      : NOT_FAVORITED_CLASS;
    return (
      <div className="article-preview">
        <div className="article-meta">
          <img src={image} alt={name} />

          <div className="pull-md-right">
            <button className={favoriteButtonClass} onClick={ev => this.handleClick()}>
              <i className="ion-heart"></i>
            </button>
          </div>
        </div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Movies;
