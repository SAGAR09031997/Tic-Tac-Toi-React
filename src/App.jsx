// import Square from './components/Square'
import { useState } from 'react';
import './style.scss'
import Board from './components/Board'
import {calculateWinner} from './winner'

function App() {
  const[squares, setSquare] = useState(Array(9).fill(null));
  const[isXnext, setXnext] = useState(false);
  


  const winner = calculateWinner(squares);
  const nextPlayer = isXnext ? 'x' : 'o'
  const statusMessage = winner ? `winner is ${winner}` : `Next player is ${nextPlayer}`;

  console.log(winner);
  console.log(winner);

  const handleSquareClick = clickPosition => {
    if(squares[clickPosition] || winner) {
        return;
    }

   setSquare((currentSquare) => {

       return currentSquare.map((squareValue, position) => {
         if(clickPosition == position) {
            return isXnext ? 'x' : 'o';
         }

         return squareValue;
       });
          });

          setXnext(currentisXnext => !currentisXnext);

};

  

  return ( 
    <div className='app'>
          <h1> {statusMessage} </h1>
          <Board squares = {squares} handleSquareClick = {handleSquareClick}/>
      </div>
    
    
  )
}

export default App
 