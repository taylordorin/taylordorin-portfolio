import React, { Component } from 'react';
import { Link } from 'react-router';

class IconTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <div className="tooltiper">
        <a href="https://github.com/taylordorin"><img className="icons" src={assetHelper["github-logo.png"]}></img></a>
        <span className="tooltiptexter">Github</span>
        </div>
        <div className="tooltiper">
        <a href="https://www.linkedin.com/in/taylor-ross-dorin/"><img className="icons" src={assetHelper["linked-in-logo.png"]}></img></a>
        <span className="tooltiptexter">LinkedIn</span>
        </div>
        <div className="tooltiper">
        <a href="http://www.coroflot.com/taylordorin"><img className="icons" src={assetHelper["coroflot-logo-2.png"]}></img></a>
        <span className="tooltiptexter">Coroflot</span>
        </div>
      </div>
    )
  }
}
export default IconTile;
