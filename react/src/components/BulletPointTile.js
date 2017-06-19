import React, { Component } from 'react';
import { Link } from 'react-router';

class BulletPointTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <li>{this.props.description}</li>
      </div>
    )
  }
}
export default BulletPointTile;
