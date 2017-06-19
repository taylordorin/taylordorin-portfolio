import React, { Component } from 'react';
import { Link } from 'react-router';
import IconTile from './IconTile';

class AboutMeTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="About-Me" className="about-me-div">
        <div className="main">
          <img className="headlines" src={assetHelper["about.png"]}></img>
        </div>
        <div className="row">
          <div className="small-4 columns text-right">
            <img className="self-image" src={assetHelper["self-photo.jpg"]}></img>
          </div>
          <div className="small-8 columns text-left">
            <p>Lorem ipsum dolor sit amet, pretium cupidatat neque at id mus sit, in fusce rhoncus. Morbi viverra nonummy orci massa neque, sodales in ipsum consequat, laoreet leo elementum eu suspendisse, senectus velit donec primis, vivamus pellentesque non donec ipsum nulla. Parturient tellus sollicitudin et eros erat. Fermentum vitae lorem dolor lacinia wisi metus, in sed massa pellentesque urna et, eiusmod vitae a.</p>
              <span>
                <IconTile />
              </span>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutMeTile;
