import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderLinkTile extends Component {
  constructor(props){
    super(props);
    }

    render(){
      return(
        <div className="clearfix">
          <div className="small-12 columns">
            <div className="top-bar">
              <div className="top-bar-title">
                <span className="menu-hamburger" data-responsive-toggle="responsive-menu" data-hide-for="medium">
                    <span className="menu-text" data-toggle>Menu</span>
                    <span className="menu-icon" data-toggle></span>
                </span>
              </div>
              <div id="responsive-menu">
                <div className="right-section">
                  <ul className="menu" data-responsive-menu="drilldown medium-dropdown"  data-parent-link="true"
                      data-back-button="<li class='js-drilldown-back'><a tabindex='0'>Back</a></li>">
                    <li><a href="#Home" data-text="Home">Home</a></li>
                    <li><a href="#About-Me" data-text="About Me">About Me</a></li>
                    <li><a href="#Experience" data-text="Experience">Experience</a></li>
                    <li><a href="#WhatIDo" data-text="What I Do">What I Do</a></li>
                    <li><a href="#Portfolio" data-text="Portfolio">Portfolio</a></li>
                    <li><a href="#" data-text="Contact Me">Contact Me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  export default HeaderLinkTile;
