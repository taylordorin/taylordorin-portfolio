import React, { Component } from 'react';
import ExperienceTile from './ExperienceTile';
import EducationTile from './EducationTile';

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
      <div id="Experience" className="experience">
        <div className="main">
          <img className="headlines" src={assetHelper["experience.png"]}></img>
          {work_experiences}
          <EducationTile />
        </div>
      </div>
    )
  }
}
export default ResumeTile;
