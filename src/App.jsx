// import Square from './components/Square'
import { useState } from 'react';
import './style.scss'
import Board from './components/Board'

function App() {
  
  const [counter, stateCounter] = useState(1);

  console.log('Pluse 1');
  

  const onBtnClick = () => {
    
    stateCounter(currentCounter => {
      return currentCounter + 1
    });
  }

  return ( 
    <div className='app'>
    
          <div>
            <button onClick={onBtnClick}>Click for know</button>
          </div>
          <div>{counter}</div>
      </div>
    
    
  )
}

export default App
 