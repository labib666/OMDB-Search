import React from 'react';

class Movies extends React.Component {
  render() {
    const { id, name, image } = this.props.movie;
    return (
      <ul>
        <li><img src={image} alt={id}/></li>
        <li>{name}</li>
        <li>{id}</li>
      </ul>
    );
  }
}

export default Movies;
