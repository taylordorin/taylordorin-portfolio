import React, { Component } from 'react';
import { Link } from 'react-router';

class EducationTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="timeline">
        <div className="entry">
          <div className="title2">
            <h3>Longwood University</h3>
            <p>September 1994 - May 1999</p>
          </div>
          <div className="body">
            <div className="move-in">
              <h3>Bachelor of Fine Arts</h3>
              <p>Graphic Design, Photography, Printmaking</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default EducationTile;
