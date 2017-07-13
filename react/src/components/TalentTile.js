import React, { Component } from 'react';
import { Link } from 'react-router';

class TalentTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
        <div className="subhead small-4 columns">
          <div className="main">
            <img className="what_i_icon" src={assetHelper[`${this.props.logo}`]}></img>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
    )
  }
}

export default TalentTile;
