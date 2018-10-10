import React, { Component } from "react";
import DeleteBtn from "../../DeleteBtn";
import Jumbotron from "../../Jumbotron";
import { Link } from "react-router-dom";
import API from "../../../../../utils/API";
import { Col, Row, Container } from "../../Grid";
import { List, ListItem } from "../../List";
import { Input, TextArea, FormBtn } from "../../Form";
// import cmdrun from "../../../../../foo";
//import foo from "../../../../Scripts/app/foo";

class Hotels extends Component {
  state = {
    hotels: [],
    marsha: "",
    IO: "",
    description: ""
  };

  componentDidMount() {
    this.loadHotels();
  }

  loadHotels = () => {
    console.log(API);
    API.getHotels()
      .then(res =>
        this.setState({ hotels: res.data, marsha: "", IO: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteHotel = id => {
    API.deleteHotel(id)
      .then(res => this.loadHotels())
      .catch(err => console.log(err));
  };

  runHotelIO = id => {
    API.runHotelIO()
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlelogininput = event => {
    const { eid, password } = event.target;
    this.setState({
      [eid]: password
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.marsha && this.state.IO) {
      API.saveHotel({
        marsha: this.state.marsha,
        IO: this.state.IO,
        description: this.state.description
      })
        .then(res => this.loadHotels())
        .catch(err => console.log(err));
    }
  };

  handleGoSubmit = function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (document.getElementById("automation1").checked) {
      // window.open("http://www.google.com");
      //Desktoplink
      // window.open("file:///C:/Users/davek/Desktop/Automation_Station_Files/AutomationStation/client/src/components/Scripts/app/Temp.txt");
      //Laptoplink
      // window.open("file:///C:/Users/davek/Documents/AutomationStation/client/src/components/Scripts/app/IOC.cmd");
    //foo();
    // cmdrun();
    } else if (document.getElementById("automation2").checked) {
      window.open("http://www.bing.com");
    } else if (document.getElementById("automation3").checked) {
      window.open("http://www.yahoo.com");
    }
    return false;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
            <div className="form-group"> </div>
            <Jumbotron>
              <h1>Add Hotel</h1>
            </Jumbotron>
            <form>
              <div className="form-group">
                <Input
                  type="text"
                  value={this.state.marsha}
                  onChange={this.handleInputChange}
                  name="marsha"
                  placeholder="Marsha (required)"
                />
                <div className="form-group"> 
                <p>IO (Yes or No) </p>   
                  <select
                    value={this.state.IO}
                    onChange={this.handleInputChange}
                    name="IO"
                    type="switch"
                  >
                    <option defaultValue=" "> </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <div className="form-group"> </div>
                  <TextArea
                    type="text"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Description (Optional)"
                  />
                </div>
                <FormBtn
                  disabled={!(this.state.IO && this.state.marsha)}
                  onClick={this.handleFormSubmit}
                  type="button" 
                >
                  Submit Hotel
                </FormBtn>
              </div>
            </form>
          </Col>
          <Col size="md-4">
            <div className="form-group"> </div>
            <Col size = "md-6">
            <Jumbotron>
              <h1>Hotels</h1>
            </Jumbotron>
            {this.state.hotels.length ? (
              <List class="list-group-item list-group-item-dark">
                {this.state.hotels.map(hotel => (
                  <ListItem key={hotel._id}>
                    <Link to={"/hotels/" + hotel._id}>
                      <strong >{hotel.marsha}</strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteHotel(hotel._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
                </Col>
          </Col>
          <Col size="md-3">
            <div className="form-group"> </div>
            <Jumbotron>
              <h1>Run Me</h1>
            </Jumbotron>
            
            <div class="well">

            <form action="" size = "col-3">
              <input
                type="radio"
                id="automation1"
                name="script"
                value="www.google.com"
                // notchecked = "true"
                />
              <label htmlFor="IOClicker">IO Clicker</label>
              <br />
              <input
                type="radio"
                id="automation2"
                name="script"
                value="www.bing.com"


                // notchecked = "true"
                />
              <label htmlFor="GPOClicker">GPO Clicker</label>
              <br />
              <input
                type="radio"
                id="automation3"
                name="script"
                value="www.yahoo.com"
                />
              <label htmlFor="invCheck">INV Check</label>
              <div className="form-group">
                <FormBtn 
                className="btn btn-success"
                onClick={this.handleGoSubmit}> Go
                
                </FormBtn>
              </div>
            </form>
            <row>
            <div className="form-group">
              
        <form size = "md-3">
<input
type="text"
value={this.state.username}
name="eid"
placeholder="EID"
/>
<div className="form-group"></div>
  <input 
  type="password" 
  id="password" 
  name="password" 
  // class="form-control"
  data-toggle="password"
  value={this.state.password}
  />
  </form>     
  </div>
  </row>
                </div>
          
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hotels;
