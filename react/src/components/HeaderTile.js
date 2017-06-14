import React, { Component } from 'react';
import HeaderLinkTile from './HeaderLinkTile';
import HeaderButtonTile from './HeaderButtonTile';
import AboutMeTile from './AboutMeTile';
import ExperienceTile from '../components/ExperienceTile';

class HeaderTile extends Component {
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
        <div className="background-image">
          <HeaderLinkTile />
          <div className="main">
            <img className="taylor-greeting-img" src={assetHelper["taylor-greeting.png"]}></img>
            <HeaderButtonTile />
          </div>
        </div>
        <AboutMeTile />
        <div>
        {work_experiences}
        </div>
      </div>
    )
  }
}
export default HeaderTile;
