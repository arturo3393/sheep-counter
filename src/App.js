import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
//import freeCodeCampLogo from './images/freecodecamp-logo.png';
import sheepCounter from './images/counting-sheep-cant-sleep.gif';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const addNumber = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
    console.log('reset error');
  };

  return (
    <div className='App'>

      <div className='title-container'>
        <h1>Use the buttons to count the sheep</h1>
      </div>

      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button
          text='Sheep'
          isClickBtn={true}
          handleClick={addNumber} />
        <Button
          text='Reset'
          isClickBtn={false}
          handleClick={resetCounter} />
      </div>

      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={sheepCounter}
          alt='Logo'
        />
      </div>
    </div>
  );
}

export default App;
