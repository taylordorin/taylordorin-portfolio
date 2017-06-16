import React, { Component } from 'react';
import { Link } from 'react-router';

class ExperienceTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="timeline">
        <div className="entry">
          <div className="title">
            <h3>{this.props.company}</h3>
            <p>{this.props.start_date} - {this.props.end_date}</p>
          </div>
          <div className="body">
            <h3>{this.props.position}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ExperienceTile;
