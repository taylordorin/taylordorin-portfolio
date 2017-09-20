import React, { Component } from 'react';
import { Link } from 'react-router';

class GalleryTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="block">
        <img className="image" src={assetHelper[`${this.props.imageUrl}`]}></img>
      </div>
    )
  }
}

export default GalleryTile;
