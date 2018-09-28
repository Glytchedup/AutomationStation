import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Hotels Should I Use?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.marsha}
                onChange={this.handleInputChange}
                name="marsha"
                placeholder="Marsha (required)"
              />
              <Input
                value={this.state.IO}
                onChange={this.handleInputChange}
                name="IO"
                placeholder="IO (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.IO && this.state.marsha)}
                onClick={this.handleFormSubmit}
              >
                Submit Hotel
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Hotels On My List</h1>
            </Jumbotron>
            {this.state.hotels.length ? (
              <List>
                {this.state.hotels.map(hotel => (
                  <ListItem key={hotel._id}>
                    <Link to={"/hotels/" + hotel._id}>
                      <strong>
                        {hotel.marsha} IO:{hotel.IO}
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
        </Row>
      </Container>
    );
  }
}

export default Hotels;
