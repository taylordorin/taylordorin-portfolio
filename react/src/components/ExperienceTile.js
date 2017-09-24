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

// <ul className="experience-timeline">
  // <li>
  //   <div className="direction-l-time">
  //     <span className="time-wrapper"><span className="time">2013 - present</span></span>
  //   </div>
  //   <div className="direction-r">
  //     <div className="history-wrapper">
  //       <span className="history"><span className="company">Leostream,</span> Contract Front-end Designer</span>
  //     </div>
  //     <div className="desc">Designed and modernized the look and feel of the client Connection Broker Web Interface; including login page, interactive navigation menus, and complex forms. Built and delivered completed HTML, CSS, and Javascript files that will be integrated into the client code base.</div>
  //   </div>
  // </li>
//
//   <li>
//   <div className="direction-r-time">
//   <span className="time-wrapper"><span className="time">2013 - present</span></span>
//   </div>
//   <div className="direction-l">
//   <div className="history-wrapper">
//   <span className="history"><span className="company">Launch Academy,</span> Apprentice React.js Developer</span>
//   </div>
//   <div className="desc">Completed 10-week immersive bootcamp to develop critical, applicable programming skills and become an active contributor of a software engineering team. Applied fundamental learnings in Agile methodologies, pair programming and collaborative development, TDD, OOP, continuous integration and Git workflow. A focus on front-end and UX/UI design, applying Javascript, React.js, HTML, CSS and Sass, wire-framing, and Ruby on Rails.</div>
//   </div>
//   </li>
// </ul>

// <div className="timeline">
//   <div className="icon-b"></div>
//   <div className={entry}>
//     <div className={title}>
//       <p>{this.props.start_date} - {this.props.end_date}</p>
//     </div>
//     <div className={body}>
//       <h3><span className="company">{this.props.company},</span> {this.props.position}</h3>
//       <p>{this.props.description}</p>
//     </div>
//   </div>
// </div>
