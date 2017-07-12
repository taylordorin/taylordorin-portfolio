import React, { Component } from 'react';
import { Link } from 'react-router';
import IconTile from './IconTile';

class WhatIDoTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="WhatIDo" className="what-i-do-div">
        <div className="main">
          <img className="headlines" src={assetHelper["what-i-do.png"]}></img>
        </div>
        
      </div>
    )
  }
}
export default WhatIDoTile;
