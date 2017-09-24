import React, { Component } from 'react';
import { Link } from 'react-router';
import BulletPointTile from "./BulletPointTile";

class ExperienceTile extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let date;
    let entry;
    if (this.props.id % 2 === 0) {
      date = "direction-r-time";
      entry = "direction-l";

    } else {
      date = "direction-l-time";
      entry = "direction-r";
    }

    return(
      <li>
        <div className={date}>
          <span className="time-wrapper"><span className="time">{this.props.start_date} - {this.props.end_date}</span></span>
        </div>
        <div className={entry}>
          <div className="history-wrapper">
            <span className="history"><span className="company">{this.props.company},</span> {this.props.position}</span>
          </div>
          <div className="desc">{this.props.description}</div>
        </div>
      </li>
    )
  }
}
export default ExperienceTile;
