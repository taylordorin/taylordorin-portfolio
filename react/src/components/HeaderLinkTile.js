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
              <li><a className="link" href="#" data-text="Home">Home</a></li>
              <li><a className="link" href="#About-Me" data-text="About Me">About Me</a></li>
              <li><a className="link" href="#Experience" data-text="Experience">Experience</a></li>
              <li><a className="link" href="#WhatIDo" data-text="What I Do">What I Do</a></li>
              <li><a className="link" href="#Portfolio" data-text="Portfolio">Portfolio</a></li>
              <li><a className="link" href="#" data-text="Contact Me">Contact Me</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default HeaderLinkTile;
