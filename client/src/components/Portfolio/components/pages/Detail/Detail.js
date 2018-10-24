import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Grid";
import Jumbotron from "../../Jumbotron";
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
    const keys = ["synopsis","IO","title","address","city","state","zip","phone","date"];
    return (
       <Container fluid>
      <div className="card2">
      <div className="card__content" >
                  
      <div className="card__front" src = {this.state.hotel.photo} alt = "hotel" >
      {/* <img src = {this.state.hotel.photo} alt = "hotel"/> */}
      <h3 className="card__title">
      <h1>{this.state.hotel.marsha}</h1>
      </h3>
      <p className="card__subtitle">
      <h1>{this.state.hotel.city}</h1>
      </p>
      </div>       
      <div className="card__back card__body card text-dark bg-dark info">
      {/* <p className="card__body card text-grey bg-dark info"> */}
            {keys.map(key => (
                <article key = {key}>
                  {/* <h1>{key}</h1> */}
                  <p>{this.state.hotel[key]}</p>
                </article>
            ))}
            {/* </p> */}

      </div>
      </div>
      </div>     
     
    {/* //     <Row> */}
    {/* //       <Col size="md-12"> */}
    {/* //         <Jumbotron> */}
    {/* //         </Jumbotron> */}
    {/* //       </Col> */}
    {/* //     </Row> */}
   

    {/* // <div className="card text-gray bg-dark info"> */}
    {/* //     <Row> */}
    {/* //         {keys.map(key => ( */}
    {/* //             <Col size="md-5 md-offset-1" key = {key}> */}
    {/* //             <article> */}
    {/* //               <h1>{key}</h1> */}
    {/* //               <p>{this.state.hotel[key]}</p> */}
    {/* //             </article> */}
    {/* //           </Col> */}
    {/* //         ))} */}
    {/* //     </Row> */}
    {/* //     </div> */}
   
   
        {/* // <Row>
        // <div className="card text-gray bg-light md-5">
    //       <Col size="md-5 md-offset-1">
          // <img src = {this.state.hotel.photo} alt = "hotel"/>
    //       </Col>
    //     </div>
    //     </Row>
    //     <Row>
    //       <Col size="md-2">
            <Link to="/">← Back to Main Page</Link>
    //       </Col>
    //     </Row> */}
      </Container>
    );
  }
}

export default Detail;
