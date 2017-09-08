import React, { Component } from 'react';
import { Link } from 'react-router';
import BulletPointTile from "./BulletPointTile";

class ExperienceTile extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let entry;
    let title;
    let body;
    if (this.props.id % 2 === 0) {
      entry = "entry-2";
      title = "title-2";
      body = "body-2";
    } else {
      entry = "entry";
      title = "title";
      body = "body";
    }

    return(
      <div className="timeline">
        <div className={entry}>
          <div className={title}>
            <p>{this.props.start_date} - {this.props.end_date}</p>
          </div>
          <div className={body}>
            <h3><span className="company">{this.props.company},</span> {this.props.position}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ExperienceTile;
