import React, { Component } from 'react';
import { Link } from 'react-router';

class ExperienceTile extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="experience-tile">
        <p>Company: {this.props.company}</p>
        <p>Position: {this.props.position}</p>
        <p>Description: {this.props.description}</p>
        <p>Time period: {this.props.start_date} - {this.props.end_date}</p>
      </div>
    )
  }
}
export default ExperienceTile;


// import React from 'react';
//
// const ExperienceTile = ({ id, company, position, description, start_date, end_date }) => {
//     return(
//       <div className="work-tile">
//         <h1>Company: {company}</h1>
//         <h3>Position: {position}</h3>
//         <h3>Description: {description}</h3>
//         <h3>Time period: {start_date} - {end_date}</h3>
//       </div>
//     )
//   }
//
// export default ExperienceTile;
