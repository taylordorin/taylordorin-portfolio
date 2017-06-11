import React, { Component } from 'react';
import { Link } from 'react-router';
import HeaderTile from '../components/HeaderTile';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <HeaderTile />
      </div>
    )
  }

}

export default MainContainer
