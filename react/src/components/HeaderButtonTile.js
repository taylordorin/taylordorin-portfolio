import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderButtonTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <a href="mailto:taylordorin@gmail.com?Subject=Let's%20talk%20Taylor!" className="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
         LET'S TALK
        </a>
      </div>
    )
  }
}
export default HeaderButtonTile;
