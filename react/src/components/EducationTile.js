import React, { Component } from 'react';
import { Link } from 'react-router';

class EducationTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul className="education-timeline">
        <li>
          <div className="direction-l-time">
            <div className="history-wrapper">
              <span className="history">Longwood University</span>
            </div>
            <div className="tale">September 1994 - May 1999</div>
          </div>

          <div className="direction-r">
            <div className="history-wrapper">
              <span className="history">Bachelor of Fine Arts</span>
            </div>
            <div className="tale">Graphic Design, Photography, Printmaking</div>
          </div>
        </li>
      </ul>
    )
  }
}
export default EducationTile;
