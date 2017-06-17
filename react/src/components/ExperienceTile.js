import React, { Component } from 'react';
import { Link } from 'react-router';
import BulletPointTile from "./BulletPointTile";

class ExperienceTile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let bullet_points = this.props.description.map(
      function(bullet_point, index){
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
            <h3>{this.props.company}</h3>
            <p>{this.props.start_date} - {this.props.end_date}</p>
          </div>
          <div className="body">
            <div className="move-in">
              <h3>{this.props.position}</h3>
              <ul>
                {bullet_points}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ExperienceTile;

// <p>{this.props.description}</p>
