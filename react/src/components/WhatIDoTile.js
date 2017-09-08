import React, { Component } from 'react';
import { Link } from 'react-router';
import TalentTile from './TalentTile';
import ScrollableAnchor from 'react-scrollable-anchor';

class WhatIDoTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      what_i_do_docs: []
    };
  }

  componentDidMount() {
  fetch("/resume/what_i_do.json")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({what_i_do_docs: responseData});
    });
  }

  render(){
    let what_i_do = this.state.what_i_do_docs.map(what_i => {
      return(
        <TalentTile
          key={what_i.id}
          id={what_i.id}
          title={what_i.title}
          logo={what_i.logo}
          description={what_i.description}
        />
      )
    })
    return(
      <div>
        <ScrollableAnchor id={'WhatIDo'}><span></span></ScrollableAnchor>
        <div className="what-i-do-div">
          <div className="main">
            <img className="headlines" src={assetHelper["what-i-do.png"]}></img>
            <p className="synopsys">JavaScript • Ruby • HTML • CSS <br/>
              React.js • Sass • Foundation • Rails • RSpec • Capybara • Git • GitHub • Adobe Creative Suite CC 2017 <br/>
              SQL • PostgreSQL</p>
          </div>
          <div className="row medium-uncollapse large-collapse">
            {what_i_do}
          </div>
        </div>
      </div>
    )
  }
}
export default WhatIDoTile;
