import React, { Component } from 'react';
import GalleryTile from './GalleryTile';
import ScrollableAnchor from 'react-scrollable-anchor'

class PortfolioTile extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolio_docs: []
    };
  }

  componentDidMount() {
  fetch("/resume/portfolio.json")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({portfolio_docs: responseData});
    });
  }

  render(){
    let portfolio_gallery = this.state.portfolio_docs.map(gallery => {
      return(
        <GalleryTile
          key={gallery.id}
          id={gallery.id}
          title={gallery.title}
          category={gallery.category}
          imageUrl={gallery.imageUrl}
        />
      )
    })
    return(
      <div>
        <ScrollableAnchor id={'Portfolio'}><span></span></ScrollableAnchor>
          <div className="experience">
            <div className="main">
              <a href="http://www.coroflot.com/taylordorin"><img className="headlines" src={assetHelper["portfolio.png"]}></img></a>
            </div>
            <div className="nat-image-grid">
            {portfolio_gallery}
            </div>
          </div>
      </div>
    )
  }
}
export default PortfolioTile;

// {portfolio_gallery}
