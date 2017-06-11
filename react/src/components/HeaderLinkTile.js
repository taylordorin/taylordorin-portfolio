import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderLinkTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <nav className="clearfix">
          <div className="right-section">
            <ul>
              <li><a className="link" href="#" data-text="About Me">About Me</a></li>
              <li><a className="link" href="#" data-text="Experience">Experience</a></li>
              <li><a className="link" href="#" data-text="Portfolio">Portfolio</a></li>
              <li><a className="link" href="#" data-text="Contact Me">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default HeaderLinkTile;
