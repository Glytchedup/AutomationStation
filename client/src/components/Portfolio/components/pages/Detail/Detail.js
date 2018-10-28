import React, { Component } from "react";
import { Container } from "../../Grid";
import API from "../../../../../utils/API";
import './detail.css';


class Detail extends Component {
  state = {
    hotel: {}
  };
  componentDidMount() {
    API.getHotel(this.props.match.params.marsha)
    .then(res => this.setState({ hotel: res.data}))
    .catch(err => console.log(err));
  }
  
  render() {
    const keys = ["synopsis","title","address","city","state","zip","phone",];
    return (
       <Container fluid>
      <div className="card2">
      <div className="card__content" >
      <div className="card__front" style = {{backgroundImage: 'url(' + this.state.hotel.photo + ')'}} alt = "hotel" >
      <h3 className="card__title">
      <h1>{this.state.hotel.marsha}</h1>
      </h3>
      <p className="card__subtitle">
      <h1>{this.state.hotel.city}</h1>
      </p>
      </div>       
      <div className="card__back card__body card text-dark bg-dark info">
            {keys.map(key => (
                <article key = {key}>
                  <p>{this.state.hotel[key]}</p>
                </article>
            ))}
      </div>
      </div>
      </div>     
</Container>
    );
  }
}

export default Detail;
