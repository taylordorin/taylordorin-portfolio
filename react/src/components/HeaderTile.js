import React, { Component } from 'react';
import HeaderLinkTile from './HeaderLinkTile';
import HeaderButtonTile from './HeaderButtonTile';
import AboutMeTile from './AboutMeTile';
import ResumeTile from './ResumeTile';
import WhatIDoTile from './WhatIDoTile';
import PortfolioTile from './PortfolioTile';
import ScrollableAnchor from 'react-scrollable-anchor';

class HeaderTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <ScrollableAnchor id={'Home'}>
          <div className="background-image">
            <HeaderLinkTile />
            <div className="main">
              <img className="taylor-greeting-img" src={assetHelper["taylor-greeting.png"]}></img>
              <HeaderButtonTile />
            </div>
          </div>
        </ScrollableAnchor>
        <AboutMeTile />
        <ResumeTile />
        <WhatIDoTile />
        <PortfolioTile />
      </div>
    )
  }
}
export default HeaderTile;
