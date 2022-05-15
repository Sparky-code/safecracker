import { useState, useEffect } from 'react';
import './App.css';
import { Gridbox, Header } from './components';
import GameContext from './context';
import Animation from './components/Animation/Animation';
import WinAnimation from './components/Animation/WinAnimation';
import WelcomeOverlay from './WelcomeOverlay';
import Success from './Success';
import { GAME_SCORE_MAP } from './constants'
import Circle from './components/Gridbox/Circle';

function App() {
  const [firstRun, setFirstRun] = useState(true);
  const [superSecretNumbers, setSuperSecretNumbers] = useState();
  const [gameConfig, setGameConfig] = useState();
  const [gameComplete, setGameComplete] = useState(false);
  const [success, setSuccess] = useState(false);
  const [score, setScore] = useState();
  let cachedScore = 0;

  function maybeHandleFail(row, success) {
    if(success) {
      setSuccess(true);
    }
    if(gameConfig.difficultyConfig.rows -1 === row) {
      setGameComplete(true);
    }
  }

  function reportScore(scoreStatuses, row) {
    scoreStatuses.forEach(scoreStatus => {
      switch(scoreStatus){
        case 'correct':
          cachedScore += GAME_SCORE_MAP.scoringTable[row] * GAME_SCORE_MAP[gameConfig.difficulty].correctBaseScore;
          return;
        case 'exists':
          cachedScore += GAME_SCORE_MAP.scoringTable[row] * GAME_SCORE_MAP[gameConfig.difficulty].existsBaseScore;
          return;
        default:
          return;
      }
    });
  }

  useEffect(() => {
    const leaders = JSON.parse(localStorage.getItem('leaders')) ?? [];
    setScore(cachedScore);
    if(success) localStorage.setItem('leaders', JSON.stringify([...leaders, {userName: gameConfig.userName, score: cachedScore}]));   
  }, [gameComplete, success, gameConfig, cachedScore])

  useEffect(() => {
    if(firstRun && gameConfig && gameConfig.userName === 'Admin'){
      setSuperSecretNumbers(new Array(gameConfig.difficultyConfig.cells).fill('').map((num, i) => i.toString()));
      setFirstRun(false);
      return;
    }
    if(firstRun && gameConfig) {
      setSuperSecretNumbers(new Array(gameConfig.difficultyConfig.cells).fill('').map(() => Math.floor(Math.random() * (gameConfig.difficultyConfig.cells + 1)).toString()));
      setFirstRun(false);
    }
  }, [firstRun, gameConfig])

  return (
    <>
      {!gameConfig ? <WelcomeOverlay setGameConfig={setGameConfig} /> : <GameContext.Provider value={{ superSecretNumbers }}>
        <Header score={score} userName={gameConfig.userName} />
        {success && score && 
          <div className='replayPrompt'>
            <div className='finalScoreDisplay'>Final Score: {score}</div>
            <span className='superSecretReveal'>{superSecretNumbers}</span>
            <WinAnimation className={'animation'} />
            <button className='replayButton' onClick={() => window.location.reload()}>Play Again?</button>
          </div>
        }
        <div className="App">
          <div className='gameData'>
            <div className='legend'>Correct: <Circle type='correct'/> |  Exists: <Circle type='exists'/> |  Miss: <Circle type='miss'/></div><br/>
            <div className='secretNumbersDisplay'>
              {superSecretNumbers && gameComplete ? <span className='superSecretReveal'>{superSecretNumbers}</span> : new Array(gameConfig.difficultyConfig.cells).fill('*')}</div>
            <div className="safeAnimation">
              <Animation className="animation"/>
            </div>
            <div className='secretNumbersDisplay'>
              {gameComplete && <button className='replayButton' onClick={() => window.location.reload()}>Play Again?</button>}
            </div>
            {success && <Success/> }
          </div>
          <Gridbox reportScore={reportScore} gameSettings={gameConfig.difficultyConfig} maybeHandleFail={maybeHandleFail} />
        </div>
      </GameContext.Provider>}
    </>
  );
}

export default App;
