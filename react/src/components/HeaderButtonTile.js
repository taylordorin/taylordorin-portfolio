import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderButtonTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="buttonrow">
          <button><a className="btn-main" href='#'>LETS TALK</a>
          </button>
        </div>
      </div>
    )
  }
}
export default HeaderButtonTile;
