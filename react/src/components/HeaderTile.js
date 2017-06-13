import React, { Component } from 'react';
import HeaderLinkTile from './HeaderLinkTile';
import HeaderButtonTile from './HeaderButtonTile';
import AboutMeTile from './AboutMeTile';

class HeaderTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="background-image">
          <HeaderLinkTile />
          <div className="main">
            <img className="taylor-greeting-img" src={assetHelper["taylor-greeting.png"]}></img>
            <HeaderButtonTile />
          </div>
        </div>
        <AboutMeTile />
      </div>
    )
  }
}
export default HeaderTile;

            // <h1>Hi, I'm Taylor Dorin</h1>
