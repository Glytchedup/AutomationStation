import React, { Component } from "react";
import DeleteBtn from "../../DeleteBtn";
import Jumbotron from "../../Jumbotron";
import { Link } from "react-router-dom";
import API from "../../../../../utils/API";
import { Col, Row, Container } from "../../Grid";
import { List, ListItem } from "../../List";
import { Input, TextArea, FormBtn } from "../../Form";

class Hotels extends Component {
  state = {
    hotels: [],
    marsha: "",
    IO: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadHotels();
  }

  loadHotels = () => {
    console.log(API)
    API.getHotels()
      .then(res =>
        this.setState({ hotels: res.data, marsha: "", IO: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteHotel = id => {
    API.deleteHotel(id)
      .then(res => this.loadHotels())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.marsha && this.state.IO) {
      API.saveHotel({
        marsha: this.state.marsha,
        IO: this.state.IO,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadHotels())
        .catch(err => console.log(err));
    }
  };
  
  // automation 1 needs to be changed to open ../../../Scripts/app/OYV2 IO Clicker.cmd
  // automation 2 needs to be changed to open ../../../Scripts/app/OYV2 GPO Clicker.cmd
  // automation 3 needs to be changed to open ../../../Scripts/app/config.txt
  handleGoSubmit = function (e) {
      if (e.preventDefault) {
          e.preventDefault();
      }
      if (document.getElementById('automation1').checked) {
        window.open('http://www.google.com');
      } else if (document.getElementById('automation2').checked) {
        window.open('http://www.bing.com');
      } else if (document.getElementById('automation3').checked) {
        window.open('http://www.yahoo.com');
      }
        return false;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <Jumbotron>
              <h1>Add a Hotel</h1>
            </Jumbotron>
            <form>
            <div class="form-group">
              <Input 
                type="text"
                value={this.state.marsha}
                onChange={this.handleInputChange}
                name="marsha"
                placeholder="Marsha (required)"
                />
            <select value={this.state.IO} onChange={this.handleInputChange} name="IO" type="switch">
            <option value=""></option>
            <option selected value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
            <br></br>
              <TextArea
              type="text"
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Description (Optional)"
                />
              <FormBtn
                disabled={!(this.state.IO && this.state.marsha)}
                onClick={this.handleFormSubmit}
                >
                Submit Hotel
              </FormBtn>
                </div>  
            </form>
          </Col>
          <Col size="md-4">
            <Jumbotron>
              <h1>My List</h1>
            </Jumbotron>
            {this.state.hotels.length ? (
              <List>
                {this.state.hotels.map(hotel => (
                  <ListItem key={hotel._id}>
                    <Link to={"/hotels/" + hotel._id}>
                      <strong>
                        {hotel.marsha}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteHotel(hotel._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
              )}
          </Col>
          <Col size="md-4">
            <Jumbotron>
              <h1>Run Me</h1>
            </Jumbotron>
            <form action="">
<input type="radio" id="automation1" 
name="script" value="www.google.com" notchecked />
<label for="IOClicker">IO Clicker</label>
<br></br>
<input type="radio" id="automation2" 
name="script" value="www.bing.com" notchecked />
<label for="GPOClicker">GPO Clicker</label>
<br></br>
<input type="radio" id="automation3" 
name="script" value="www.yahoo.com" notchecked />
<label for="invCheck">INV Check</label>
<div class="form-group">


<FormBtn
onClick={this.handleGoSubmit}
> Go
</FormBtn>
</div>  
</form>
</Col>
</Row>
</Container>
    );
  }

}

export default Hotels;
