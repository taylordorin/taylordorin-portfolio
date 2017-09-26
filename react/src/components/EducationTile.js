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


// <ul className="education-timeline">
//   <li>
//     <div className="direction-l-time">
//       <span className="history"><span className="company">Longwood University</span></span>
//       <div className="desc">September 1994 - May 1999</div>
//     </div>
//
//     <div className="direction-r">
//       <div className="history-wrapper">
//         <span className="history"><span className="company">Bachelor of Fine Arts</span></span>
//       </div>
//         <div className="desc">Graphic Design, Photography, Printmaking</div>
//     </div>
//   </li>
// </ul>

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
//   <div className="entry">
//     <div className="title2">
//       <h3>Longwood University</h3>
//       <p>September 1994 - May 1999</p>
//     </div>
//     <div className="body">
//       <div className="move-in">
//         <h3>Bachelor of Fine Arts</h3>
//         <p>Graphic Design, Photography, Printmaking</p>
//       </div>
//     </div>
//   </div>
// </div>
