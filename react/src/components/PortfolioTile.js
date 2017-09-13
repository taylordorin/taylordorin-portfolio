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
              <a href="http://www.coroflot.com/taylordorin"><img className="headlines" src={assetHelper["portfolio.png"]}></img></a>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
export default PortfolioTile;
