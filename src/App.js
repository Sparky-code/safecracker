import { useState, useEffect } from 'react';
import './App.css';
import { Gridbox, Header } from './components';
import GameContext from './context';
import Animation from './components/Animation/Animation';
import WelcomeOverlay from './WelcomeOverlay';
import Success from './Success';

function App() {
  const [firstRun, setFirstRun] = useState(true);
  const [superSecretNumbers, setSuperSecretNumbers] = useState();
  const [gameConfig, setGameConfig] = useState();
  const [gameComplete, setGameComplete] = useState(false);
  const [success, setSuccess] = useState(false);

  function maybeHandleFail(row, success) {
    if(success) {
      setSuccess(true);
      return;
    }
    if(gameConfig.difficulty.rows -1 === row) {
      setGameComplete(true);
    }
  }

  useEffect(() => {
    if(firstRun && gameConfig) {
      setSuperSecretNumbers(new Array(gameConfig.difficulty.cells).fill('').map(() => Math.floor(Math.random() * (gameConfig.difficulty.cells + 1)).toString()));
      setFirstRun(false);
    }
  }, [firstRun, gameConfig])

  return (
    <>
      {!gameConfig ? <WelcomeOverlay setGameConfig={setGameConfig} /> : <GameContext.Provider value={{ superSecretNumbers }}>
        <Header/>
        {success && <Success/>}
        <div className="App">
          <div className='gameData'>
            <div className='gameMetrics'>Timer</div><br/>
            <div className="safeAnimation">
              <Animation className="animation"/>
            </div>
            <div className='secretNumbersDisplay'>{superSecretNumbers && gameComplete ? <span className='superSecretReveal'>{superSecretNumbers}</span> : new Array(gameConfig.difficulty.cells).fill('*')}</div>
          </div>
          <Gridbox gameSettings={gameConfig.difficulty} maybeHandleFail={maybeHandleFail} />
        </div>
      </GameContext.Provider>}
    </>
  );
}

export default App;
