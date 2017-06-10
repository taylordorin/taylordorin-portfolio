import React, { Component } from 'react';
import { Link } from 'react-router';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="background-image">
          <nav className="clearfix">
            <div className="right-section">
              <ul>
                <li><a href="#" data-text="About Me">About Me</a></li>
                <li><a href="#" data-text="Experience">Experience</a></li>
                <li><a href="#" data-text="Portfolio">Portfolio</a></li>
                <li><a href="#" data-text="Contact Me">Contact Me</a></li>
              </ul>
            </div>
          </nav>
          <div className="main">
            <img className="taylor-greeting-img" src={assetHelper["taylor-greeting.png"]}></img>
          </div>
        </div>
      </div>
    )
  }

}

export default MainContainer
