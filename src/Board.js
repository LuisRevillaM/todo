import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
  handleClick = () => {
    const task = window.prompt("Introduce new card", "Ex: something to do");
    const newCard = {
      id: this.props.cards.length + 1,
      task: task,
      board: this.props.boardNumber
    };

    this.props.createCard(newCard);
  };

  render() {
    console.log("nojoda");
    return (
      <div className="board">
        <div className="board-name">{this.props.boardName}</div>
        <div>
          {this.props.cards
            .filter(e => {
              if (e.board === this.props.boardNumber) {
                return true;
              } else {
                return false;
              }
            })
            .map(card => {
              return (
                <div key={card.id} className="card">
                  {this.props.left ? null : (
                    <button
                      onClick={() => {
                        this.props.moveCard(card.id, -1);
                      }}
                    >
                      left
                    </button>
                  )}
                  <div>{card.task}</div>
                  {this.props.right ? null : (
                    <button
                      onClick={() => {
                        this.props.moveCard(card.id, 1);
                      }}
                    >
                      right
                    </button>
                  )}
                </div>
              );
            })}
        </div>
        <button onClick={this.handleClick}>+Add card</button>
      </div>
    );
  }
}

export default Board;
/*

*/
