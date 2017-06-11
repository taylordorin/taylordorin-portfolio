import React, { Component } from 'react';
import HeaderLinkTile from './HeaderLinkTile';
import HeaderButtonTile from './HeaderButtonTile';

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
      </div>
    )
  }
}
export default HeaderTile;
