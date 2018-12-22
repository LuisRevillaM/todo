import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";

class App extends Component {
  state = {
    cards: []
  };

  createCard = newCard => {
    this.setState(prevState => {
      let cardsNow = [...prevState.cards, newCard];
      return {
        cards: cardsNow
      };
    });
  };

  filterCards = (cards, boardNumber) => {
    return cards.filter(card => {
      if (card.board === boardNumber) {
        return true;
      }
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
          cards={this.filterCards(this.state.cards, 1)}
          boardName="First board"
          createCard={this.createCard}
          moveCard={this.moveCard}
          left
        />
        <Board
          boardNumber={2}
          cards={this.filterCards(this.state.cards, 2)}
          boardName="Second board"
          createCard={this.createCard}
          moveCard={this.moveCard}
        />
        <Board
          boardNumber={3}
          cards={this.filterCards(this.state.cards, 3)}
          boardName="Third"
          createCard={this.createCard}
          moveCard={this.moveCard}
        />
        <Board
          boardNumber={4}
          cards={this.filterCards(this.state.cards, 4)}
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
