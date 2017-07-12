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
          <p className="synopsys">Lorem ipsum dolor sit amet, pretium cupidatat neque at id mus sit, in fusce rhoncus. Morbi viverra nonummy orci massa neque, sodales in ipsum consequat, laoreet leo elementum eu suspendisse, senectus velit donec primis, vivamus pellentesque non donec ipsum nulla. </p>
        </div>
        <div className="row medium-uncollapse large-collapse">
          <div className="subhead small-4 columns">
            <div className="main">
              <img className="what_i_icon" src={assetHelper["webpage.png"]}></img>
              <h3>web design</h3>
              <p>Lorem ipsum dolor sit amet, pretium cupidatat neque at id mus sit, in fusce rhoncus. Morbi viverra nonummy orci massa neque, sodales in ipsum.</p>
            </div>
          </div>

          <div className="subhead small-4 columns">
            <div className="main">
              <img className="what_i_icon" src={assetHelper["design.png"]}></img>
              <h3>graphic design</h3>
              <p>Lorem ipsum dolor sit amet, pretium cupidatat neque at id mus sit, in fusce rhoncus. Morbi viverra nonummy orci massa neque, sodales in ipsum.</p>
            </div>
          </div>

          <div className="subhead small-4 columns">
            <div className="main">
              <img className="what_i_icon" src={assetHelper["thumb_tak.png"]}></img>
              <h3>project management</h3>
              <p>Lorem ipsum dolor sit amet, pretium cupidatat neque at id mus sit, in fusce rhoncus. Morbi viverra nonummy orci massa neque, sodales in ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default WhatIDoTile;
