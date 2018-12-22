import React, { Component } from "react";

const Card = function(props) {
  const moveLeft = card => {
    card.board = card.board - 1;

    props.moveCard(card);
  };

  return (
    <div className="card">
      <button onClick={props.moveCard}>left</button>
      <div>{props.task}</div>
      <button>right</button>
    </div>
  );
};

export default Card;
