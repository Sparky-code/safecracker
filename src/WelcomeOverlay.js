import { useState } from 'react';
import { Unlock } from './assets';
import './WelcomeOverlay.css';

function WelcomeOverlay({ setGameConfig }) {        
    const [difficulty, setDifficulty] = useState('Easy');
    const [userName, setUsername] = useState('');
    const [hasError, setHasError] = useState(false);
    const gameModes = ['Easy', 'Hard', 'God Mode'];
    const GAME_MODE_MAP = {
        Easy:{
            rows: 10,
            cells: 4,
        },
        Hard:{
            rows: 8,
            cells: 6,
        },
        'God Mode':{
            rows: 6,
            cells: 8,
        },
    };
    let timer;

    function handleGameModeChange(gameMode) {
        setDifficulty(gameMode);
    }

    function handleNameChange({ target: { value }}) {
        if(timer) clearTimeout(timer);
        if(value.length === 10) return;
        setUsername(value);
    }

    function startGame() {
        if(userName === '') {
            setHasError(true);
            timer = setTimeout(() => setHasError(false), 3000);
            return;
        }
        setGameConfig({userName, difficulty, difficultyConfig: GAME_MODE_MAP[difficulty]});
    }

    return <div className="WelcomeOverlay">
        <div className="Title">Safe <img src={Unlock} alt='Open lock' className='unlockIcon' /> Cracker</div>
        <div className='userInputContainer'>
            <label className='userInputLabel' htmlFor='user'>Enter Name: <input className='userInput' name='user' value={userName} onChange={handleNameChange} /></label>
            {hasError && <span className='errorText'>Username must be between 1-10 characters</span>}
        </div>
        <div className='gameModeButtonGroup'>
            {gameModes.map((gameMode) => <button className={`gameModeButtons${difficulty === gameMode ? ' active': ''}`} key={`${gameMode}-key`} onClick={() => handleGameModeChange(gameMode)}>{gameMode}</button>)}
        </div>
        <button className='startButton' onClick={startGame}>START</button>
    </div>
}

export default WelcomeOverlay;