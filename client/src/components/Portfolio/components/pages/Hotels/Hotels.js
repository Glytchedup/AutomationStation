import React, { Component } from "react";
import DeleteBtn from "../../DeleteBtn";
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
  runIO = event => {
      event.preventDefault();
    API.trivago()
      .then(res =>
        console.log('success')
      )
      .catch(err => console.log(err));
  };
  runGPO = event => {
      event.preventDefault();
    API.gpo()
      .then(res =>
        console.log('success')
      )
      .catch(err => console.log(err));
  };

  handleGoSubmit = function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (document.getElementById("automation1").checked) {
        API.trivago()
      // window.open("http://www.google.com");
    
    } else if (document.getElementById("automation2").checked) {
    API.gpo()
    
    } else if (document.getElementById("automation3").checked) {
      window.open("http://www.yahoo.com");
    
    }
    return false;
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4">
            <div className="form-group"> </div>
            <div className="card text-white bg-dark">
              <h1>Add Hotel</h1>
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
                  className="btn-success"
                  >
                  Add Hotel
                </FormBtn>
              </div>
            </form>
                  </div>
          </Col>
          <Col size="md-4">
            <div className="form-group"> </div>
          <div className="card text-white bg-dark">
            <Col size = "md-12">
              <h1>Hotels</h1>

            {this.state.hotels.length ? (
              <List class="list-group-item list-group-item-dark list-group-flush">
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
            </div>
          </Col>
          <Col size="md-4">
                        <div className="form-group"> </div>
          <div className="card text-white bg-dark">
              <h1>Run Tests</h1>
            
            <div className="well">

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
            </div>
            <row>
            <div className="form-group">
              
        <form size = "md-3" >
<input
type="text"
value={this.state.username}
name="eid"
placeholder="EID"
/>
<div className="form-group login"></div>
  <input 
  type="password" 
  id="password" 
  name="password" 
  // class="form-control"
  data-toggle="password"
  value={this.state.password}
  />
  </form> 
  <FormBtn className="btn btn-success">
  Update config Test
  </FormBtn>
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
