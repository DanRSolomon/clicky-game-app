import React, { Component } from "react";
import DogCard from "./components/DogCard";
import dogs from "./dogs.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    dogs,
    clickedDogs: [],
    score: 0,
    highscore: 0
  };

  imageClick = event => {
    const currentDog = event.target.alt;
    const DogAlreadyClicked =
      this.state.clickedDogs.indexOf(currentDog) > -1;

    if (DogAlreadyClicked) {
      this.setState({
        dogs: this.state.dogs.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedDogs: [],
        score: 0
      });
      alert("You Lose. Play Again?");
    } else {
      this.setState(
        {
          dogs: this.state.dogs.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedDogs: this.state.clickedDogs.concat(
            currentDog
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score }, function () {
              console.log(this.state.highscore);
            });
          }
          console.log("score: " + this.state.score);
          if (this.state.score === 12) {
            alert("You clicked all 12 images only once! You Win!");
            this.setState({
              dogs: this.state.dogs.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedDogs: [],
              score: 0
            });
          }
        }
      );
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highscore={this.state.highscore}>Clicky Game</Navbar>
        <Jumbotron />
        {this.state.dogs.map(dog => (
          <DogCard
            imageClick={this.imageClick}
            key={dog.id}
            id={dog.id}
            image={dog.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;