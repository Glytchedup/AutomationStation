import React, { Component } from "react";
import DeleteBtn from "../../../DeleteBtn";
import Jumbotron from "../../../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../../Grid";
import { List, ListItem } from "../../../List";
import { Input, FormBtn } from "../../../Form";

class hotels extends Component {
  state = {
    hotels: [],
    marsha: "",
  };

  componentDidMount() {
    this.loadHotels();
  }

  loadHotels = () => {
    API.getHotels()
      .then(res =>
        this.setState({ hotels: res.data, marsha: ""})
      )
      .catch(err => console.log(err));
  };

  deleteHotel = id => {
    API.deleteHotels(id)
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
    if (this.state.marsha) {
      API.saveHotel({
        marsha: this.state.marsha,
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
              <h1>What Hotels am I using today?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.marsha}
                onChange={this.handleInputChange}
                name="marsha"
                placeholder="marsha (required)"
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.marsha)}
                onClick={this.handleFormSubmit}
              >
                Add Hotel
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Hotels on my List</h1>
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
                    <DeleteBtn onClick={() => this.deletehotel(hotel._id)} />
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

export default hotels;
