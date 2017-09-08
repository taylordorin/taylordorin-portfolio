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
        <div className="entry ">
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
<section id="" class="">
  <div class="">

    <div class="container">
      <div class="expirience">
        <div class="expirience-item">
          <div class="icon-b"></div>
          <div class="expirience-item-inner">
            <div class="date">March 2017 - May 2017</div>
            <h3>Apprentice React.js Developer</h3>
            <p>Lorem ipsum Cillum irure in dolor laboris culpa incididunt sint adipisicing nisi ullamco dolor enim aute do officia adipisicing enim laborum nostrud minim ut fugiat eiusmod commodo non culpa nisi incididunt minim esse aliqua laboris Excepteur est eu quis nisi deserunt id.</p>
          </div>
        </div>
        <div class="expirience-item">
          <div class="icon-b"></div>
          <div class="expirience-item-inner">
            <div class="date">February 2013 - January 2017</div>
            <h3>Project Manager</h3>
            <p>Lorem ipsum Anim veniam irure dolor irure dolor incididunt aute ut ea anim dolor cupidatat amet eu consequat velit ea occaecat sed mollit in do labore incididunt Duis nostrud est id labore veniam veniam non cupidatat ullamco et culpa voluptate consequat nulla.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

// return(
  // <div className="timeline">
  //   <div className="entry">
  //     <div className="title">
  //       <h3 className={redBlue}>{this.props.company}</h3>
  //       <p>{this.props.start_date} - {this.props.end_date}</p>
  //     </div>
  //     <div className="body">
  //       <h3>{this.props.position}</h3>
  //       <ul>
  //         {bullet_points}
  //       </ul>
  //     </div>
  //   </div>
  // </div>
// )
// }
// }
