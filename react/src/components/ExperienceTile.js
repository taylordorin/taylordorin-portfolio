import React, { Component } from 'react';
import { Link } from 'react-router';
import BulletPointTile from "./BulletPointTile";

class ExperienceTile extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let redBlue;
    if (this.props.id % 2 === 0) {
      redBlue = "red-title";
    } else {
      redBlue = "brown-title";
    }

    let bullet_points = this.props.description.map(
      (bullet_point, index) => {
      return(
        <BulletPointTile
          key={index}
          description={bullet_point}
        />
      )
    })
    return(
      <div className="timeline">
        <div className="entry">
          <div className="title">
            <h3 className={redBlue}>{this.props.company}</h3>
            <p>{this.props.start_date} - {this.props.end_date}</p>
          </div>
          <div className="body">
            <h3>{this.props.position}</h3>
            <ul>
              {bullet_points}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default ExperienceTile;

// <p>{this.props.description}</p>

// let hidden;
// if (this.props.id % 1 === 0) {
//   hidden = 'r-title';
// } else {
//   hidden = 'title';
// }
