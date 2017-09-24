import React, { Component } from 'react';
import ExperienceTile from './ExperienceTile';
import EducationTile from './EducationTile';
import ScrollableAnchor from 'react-scrollable-anchor';

class ResumeTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      work_experiences: []
    };
  }

  componentDidMount() {
  fetch("/resume/work_experiences.json")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({work_experiences: responseData});
    });
  }

  render() {
    let work_experiences = this.state.work_experiences.map(work_experience => {
      return(
        <ExperienceTile
          key={work_experience.id}
          id={work_experience.id}
          company={work_experience.company}
          position={work_experience.position}
          description={work_experience.description}
          start_date={work_experience.start_date}
          end_date={work_experience.end_date}
        />
      )
    })
    return(
      <div>
      <ul className="experience-timeline">

<li>
  <div className="direction-l-time">
    <span className="time-wrapper"><span className="time">2013 - present</span></span>
  </div>
  <div className="direction-r">
    <div className="history-wrapper">
      <span className="history"><span className="company">Leostream,</span> Contract Front-end Designer</span>
    </div>
    <div className="desc">Designed and modernized the look and feel of the client Connection Broker Web Interface; including login page, interactive navigation menus, and complex forms. Built and delivered completed HTML, CSS, and Javascript files that will be integrated into the client code base.</div>
  </div>
</li>

<li>
  <div className="direction-r-time">
    <span className="time-wrapper"><span className="time">2013 - present</span></span>
  </div>
  <div className="direction-l">
    <div className="history-wrapper">
      <span className="history"><span className="company">Launch Academy,</span> Apprentice React.js Developer</span>
    </div>
    <div className="desc">Completed 10-week immersive bootcamp to develop critical, applicable programming skills and become an active contributor of a software engineering team. Applied fundamental learnings in Agile methodologies, pair programming and collaborative development, TDD, OOP, continuous integration and Git workflow. A focus on front-end and UX/UI design, applying Javascript, React.js, HTML, CSS and Sass, wire-framing, and Ruby on Rails.</div>
  </div>
</li>

</ul>
        <ScrollableAnchor id={'Experience'}>
          <div className="experience">
            <div className="main">
              <img className="headlines" src={assetHelper["experience.png"]}></img>
            </div>
            {work_experiences}
            <EducationTile />
          </div>
        </ScrollableAnchor>
      </div>
    )
  }
}
export default ResumeTile;
