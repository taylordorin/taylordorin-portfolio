import React, { Component } from 'react';
import { Link } from 'react-router';
import IconTile from './IconTile';
import ScrollableAnchor from 'react-scrollable-anchor';

class AboutMeTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <ScrollableAnchor id={'About-Me'}>
          <div className="about-me-div">
            <div className="main">
              <img className="headlines" src={assetHelper["about.png"]}></img>
            </div>
            <div className="row">
              <div className="small-4 columns text-right">
                <img className="self-image" src={assetHelper["self-photo.jpg"]}></img>
              </div>
              <div className="small-8 columns text-left">
                <p>For 20 years, I have worked in the creative space and in project management. My desire to learn and grow got the best of me and I made the leap into the technology sector as a full-stack web developer with a focus on the front-end. I leverage my design sensibility and understanding of managing successful campaigns in everything I create.</p>
                <p> When I’m not on the job, I love spending time with my dogs, cooking with my husband, visiting new places in this fair city, and perfecting my baking technique in order to make the perfect French macaroon.</p>
                  <span>
                    <IconTile />
                  </span>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
export default AboutMeTile;
