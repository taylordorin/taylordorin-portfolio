import React, { Component } from 'react';

class PortfolioTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div id="Portfolio" className="experience">
        <div className="main">
          <img className="headlines" src={assetHelper["portfolio.png"]}></img>
        </div>
      </div>
    )
  }
}
export default PortfolioTile;
