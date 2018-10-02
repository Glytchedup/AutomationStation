import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Grid";
import Jumbotron from "../../Jumbotron";
import API from "../../../../../utils/API";

class Detail extends Component {
  state = {
    hotel: {}
  };
  // When this component mounts, grab the hotel with the _id of this.props.match.params.id
  // e.g. localhost:3000/hotels/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getHotel(this.props.match.params.marsha)
      .then(res => this.setState({ hotel: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    const keys = ["synopsis","IO","title","address","city","state","zip","phone","date"];
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.hotel.marsha}</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
            {keys.map(key => (
                <Col size="md-5 md-offset-1" key = {key}>
                <article>
                  <h1>{key}</h1>
                  <p>{this.state.hotel[key]}</p>
                </article>
              </Col>
            ))}
        </Row>
        <Row>
          <Col size="md-5 md-offset-1">
          <img src = {this.state.hotel.photo}/>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Main Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
