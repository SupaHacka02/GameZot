"use client"

import React, { useState } from 'react';

const TicTacToe = () => {

  const [turn, setTurn] = useState<string>("blue");

  const [winnerStatus, setWinnerStatus] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>(turn);

  const [squares, setSquares] = useState([
    { x: 0, y: 0, fill: "white"},
    { x: 1, y: 0, fill: "white"},
    { x: 2, y: 0, fill: "white"},

    { x: 0, y: 1, fill: "white"},
    { x: 1, y: 1, fill: "white"},
    { x: 2, y: 1, fill: "white"},

    { x: 0, y: 2, fill: "white"},
    { x: 1, y: 2, fill: "white"},
    { x: 2, y: 2, fill: "white"}
  ]);
  
  const onSquareClick = (index: number) => {
    if(!winnerStatus && squares[index].fill == "white") {
      const newSquares = [...squares];
      newSquares[index].fill = turn;
      setSquares(newSquares);
      if(checkWinner()) {
        setWinnerStatus(true);
        setWinner(turn);
      } else {
        switchTurn();
      }
    }
  }

  const switchTurn = () => {
    setTurn(prevTurn => prevTurn === "blue" ? "red" : "blue");
  }

  const checkWinner = () => {
    const winningPossibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let possibility of winningPossibilities) {
      const [a, b, c] = possibility;
      if(squares[a].fill !== "white" && squares[a].fill === squares[b].fill && squares[b].fill === squares[c].fill) {
        return true;
      }
    }
    return false;
  }

  function reloadPage() { 
    window.location.reload(); 
  }

  function resetGame() {
    const newSquares = [...squares];
    for(let i = 0; i < squares.length; i++) {
      newSquares[i].fill = "white";
    }
    setSquares(newSquares);
    setTurn("blue");
    setWinnerStatus(false);
    setWinner(turn);
  }

  return (
    <>
        <div>
          <h1
            style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '28px',
              color: 'white',
            }}>
            Welcome to Competitive Tic-Tac-Toe!
          </h1>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gridTemplateRows: 'repeat(3, 100px)',
            gap: '10px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          {squares.map((square, index) => (
            <div 
              key={index}
              className='square'
              style={{
                backgroundColor: square.fill,
                border: '2px solid black',
                cursor: 'pointer',
              }}
              onClick={() => onSquareClick(index)}
            />
          ))}
          </div>
        <div>
          {
            winnerStatus &&
            <h1
              style={{
                position: 'absolute',
                bottom: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '16px',
                color: 'white',
              }}>
              Winner: {turn}!
            </h1>
          }
        </div>
        <div>
          <button
            onClick={resetGame}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#b642f5',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
            Reset
          </button>  
        </div>
    </>
  );
}

export default TicTacToe;
