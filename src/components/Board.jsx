
import Square from './Square'

const board = ( {squares, handleSquareClick}) => {

   
    

    const renderSquare = position => {
        return (

            <Square
                value={squares[position]}
                onClick={() => handleSquareClick(position)}
                />
        );
    };


    return (
    <div className="board">
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </div>
    );
};


//     return (
//     <div className="board">
//         <div className="board-row">
//             <Square value={0}/>
//             <Square value={1}/>
//             <Square value={2}/>
//         </div>
//         <div className="board-row">
//             <Square value={3}/>
//             <Square value={4}/>
//             <Square value={5}/>
//         </div>
//         <div className="board-row">
//             <Square value={6}/>
//             <Square value={7}/>
//             <Square value={8}/>
//         </div>
//     </div>
//     );

// };



export default board;