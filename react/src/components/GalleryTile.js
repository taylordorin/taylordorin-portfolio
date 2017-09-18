import React, { Component } from 'react';
import { Link } from 'react-router';

class GalleryTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div className="subhead small-4 columns">
          <div className="main">
            <img className="what_i_icon" src={assetHelper[`${this.props.imageUrl}`]}></img>
          </div>
        </div>
    )
  }
}

export default GalleryTile;
