
import React from 'react';
import { Link } from 'react-router-dom';

class Publisher extends React.Component {
  render() {
    let pubImg;
    let pubName;
    let pubDeck;
    let pubUrl;
    if (this.props.publisherImg !== null){
      pubImg = <img src={this.props.publisherImg} alt={this.props.publisherName}/>;
    }
    if (this.props.publisherName !== null) {
      pubName = <h2>{this.props.publisherName}</h2>;
    }
    if (this.props.publisherDescription !== null){
      pubDeck = <p>{this.props.publisherDescription}</p>;
    }
    if (this.props.publisherUrl !== null){
      pubUrl = <a href={this.props.publisherUrl}>For more information on this Publisher</a>
    }
    console.log(this.props.publisherUrl);
    return (
      <Link to={`/${this.props.infoId}`}>
        <li key={this.props.publisherId}>
          {pubName}
          {pubImg}

        </li>
      </Link>
    )
  }

}

export default Publisher; 