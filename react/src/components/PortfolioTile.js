import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class PortfolioTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <ScrollableAnchor id={'Portfolio'}>
          <div className="experience">
            <div className="main">
              <img className="headlines" src={assetHelper["portfolio.png"]}></img>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
export default PortfolioTile;
