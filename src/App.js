import { useState, useEffect } from 'react';
import './App.css';
import { Gridbox, Header } from './components';
import GameContext from './context';
import Animation from './components/Animation/Animation';
import WelcomeOverlay from './WelcomeOverlay';
import Success from './Success';
import { GAME_SCORE_MAP } from './constants'

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
    if(gameConfig.difficulty.rows -1 === row) {
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
  }, [gameComplete, success, cachedScore])

  useEffect(() => {
    if(firstRun && gameConfig) {
      setSuperSecretNumbers(new Array(gameConfig.difficultyConfig.cells).fill('').map(() => Math.floor(Math.random() * (gameConfig.difficultyConfig.cells + 1)).toString()));
      setFirstRun(false);
    }
  }, [firstRun, gameConfig])

  return (
    <>
      {!gameConfig ? <WelcomeOverlay setGameConfig={setGameConfig} /> : <GameContext.Provider value={{ superSecretNumbers }}>
        <Header score={score} userName={gameConfig.userName} />
        {/* <Mode/> */}
        {(gameComplete || success) && score && <div className='replayPrompt'><div className='finalScoreDisplay'>Final Score: {score}</div><button onClick={() => window.location.reload()}>Play Again?</button></div>}
        <div className="App">
          <div className='gameData'>
            <div className='gameMetrics'>5:00</div><br/>
            <div className="safeAnimation">
              <Animation className="animation"/>
            </div>
            {success && <Success/> }
            <div className='secretNumbersDisplay'>{superSecretNumbers && gameComplete ? <span className='superSecretReveal'>{superSecretNumbers}</span> : new Array(gameConfig.difficultyConfig.cells).fill('*')}</div>
          </div>
          <Gridbox reportScore={reportScore} gameSettings={gameConfig.difficultyConfig} maybeHandleFail={maybeHandleFail} />
        </div>
      </GameContext.Provider>}
    </>
  );
}

export default App;
