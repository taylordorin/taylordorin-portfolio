import React, { Component } from 'react';
import { Link } from 'react-router';

class GalleryTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div className="block figure">
          <img className="image" src={assetHelper[`${this.props.imageUrl}`]}></img>
          <div className="figcaption">{this.props.title}</div>
        </div>
    )
  }
}

export default GalleryTile;


// <div className="img-wrap">
//   <img src="http://placekitten.com/g/600/600" alt="">
//     <a href="http://placekitten.com/" className="img-info">
//       <h4>Hello</h4>
//       <p>A description about the image</p>
//     </a>
// </div>
// </div>
//
// <div className="block">
//   <img className="image" src={assetHelper[`${this.props.imageUrl}`]}></img>
// </div>

// <figure>
// <div class="block">
//   <img class="image" src="http://nisley.mesa.k12.co.us/students/images/HighPlainsSpringB_0446.jpg" /><figcaption>thing</figcaption>
// </div>
// </figure>
// </div>
