import React, { Component } from "react";
import "./App.css";
import Board from "./Board";

class App extends Component {
  state = {
    cards: []
  };

  createCard = newCard => {
    console.log(newCard);
    console.log(this.state.cards);
    this.setState(prevState => {
      let cardsNow = [...prevState.cards, newCard];
      return {
        cards: cardsNow
      };
    });
  };

  moveCard = (id, dir) => {
    this.setState(prevState => {
      let index;
      prevState.cards.forEach((e, i) => {
        if (e.id === id) {
          index = i;
        }
      });

      let currentBoard = prevState.cards[index].board;

      prevState.cards[index].board = currentBoard + dir;

      return prevState;
    });
  };

  render() {
    return (
      <div className="board-container">
        <Board
          boardNumber={1}
          cards={this.state.cards}
          boardName="First board"
          createCard={this.createCard}
          moveCard={this.moveCard}
          left
        />
        <Board
          boardNumber={2}
          cards={this.state.cards}
          boardName="Second board"
          createCard={this.createCard}
          moveCard={this.moveCard}
        />
        <Board
          boardNumber={3}
          cards={this.state.cards}
          boardName="Third"
          createCard={this.createCard}
          moveCard={this.moveCard}
        />
        <Board
          boardNumber={4}
          cards={this.state.cards}
          boardName="Fourth"
          createCard={this.createCard}
          moveCard={this.moveCard}
          right
        />
      </div>
    );
  }
}

export default App;
