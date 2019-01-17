import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import cats from "./data.json";
import "./App.css";

class App extends Component {
  state = {
    cats,
    clickedCats: [],
    score: 0
  };

  clickCat = event => {

    const chosenCat = event.target.alt;
    const catClicked = this.state.clickedCats.indexOf(chosenCat) > -1;

    if (catClicked) {
      this.setState({
        cats: this.state.cats.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCats: [],
        score: 0
      });

        alert("You lose. Play again?");
        
    } else {
      this.setState(
        {
          cats: this.state.cats.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCats: this.state.clickedCats.concat(
            chosenCat
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              cats: this.state.cats.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCats: [],
              score: 0
            });
          }
          }
        );
    }
  }

  removeCat = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cats = this.state.cats.filter(cat => cat.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cats });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        {this.state.cats.map(cat => (
          <CatCard
            clickCat={this.clickCat}
            id={cat.id}
            key={cat.id}
            image={cat.image}
          />
        ))}
      </Wrapper>
    );
  }

}
export default App;