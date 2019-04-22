import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar/Navbar"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class App extends Component {
  
  state = {
    score: 0,
    topscore: 0,
    clickedOn: [],
    order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    message: "Click a pic to play",
    show: true,
    loseShow: false,
    friends
  };

  

  handleClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.clickedOn.indexOf(event.target.id) < 0) {
      this.state.clickedOn.push(event.target.id);
      this.setState({
        score: this.state.score + 1,
        message: "You got it! Keep going."
      });
    } else {
      alert("You've lost!")
      if (this.state.score > this.state.topscore) {
        this.setState({ topscore: this.state.score })
      }
      this.setState({
        score: 0,
        clickedOn: [],
        message: "You lose!"
      });
    }
    let temporder = [];
    while (this.state.friends.length > temporder.length) {
      let number = Math.floor(Math.random() * this.state.friends.length);
      if (temporder.indexOf(number) < 0) {
        temporder.push(number);
      }
    }
    this.setState({ order: temporder })

  };

  

  handleClose() {
    this.setState({ show: false });
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.message}
        />
          <Modal show={this.state.show} onHide={this.state.hide}>
            <Modal.Header>
              <Modal.Title>Fun fun game!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Welcome to Molly's memory game! To win this game you must click on a different image till you've clicked all 12. You can watch your score in the top right corner. Good luck!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose = this.handleClose.bind(this)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

           <Modal loseShow={this.state.show} onHide={this.state.hide}>
            <Modal.Header>
              <Modal.Title>You've Lost!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You've lost!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose = this.handleClose.bind(this)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        
        <Wrapper>
          <Title>Hieroglyph Guess</Title>
          {this.state.order.map(sequence => (
            <FriendCard
              clickFunction={this.handleClick}
              id={this.state.friends[sequence].name}
              image={this.state.friends[sequence].image}
              key={this.state.friends[sequence].name}
            />
          ))} 
      </Wrapper>
      </div>
    );
  }
}

export default App;
