import React, { Component } from 'react';
import { Link } from 'react-router';
import TalentTile from './TalentTile';

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
      <div id="WhatIDo" className="what-i-do-div">
        <div className="main">
          <img className="headlines" src={assetHelper["what-i-do.png"]}></img>
          <p className="synopsys">Lorem ipsum dolor sit amet, pretium cupidatat neque at id mus sit, in fusce rhoncus. Morbi viverra nonummy orci massa neque, sodales in ipsum consequat, laoreet leo elementum eu suspendisse, senectus velit donec primis, vivamus pellentesque non donec ipsum nulla. </p>
        </div>
        <div className="row medium-uncollapse large-collapse">
          {what_i_do}
        </div>
      </div>
    )
  }
}
export default WhatIDoTile;
