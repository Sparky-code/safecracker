
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<div align='center'>
  <h1>Safe Cracker</h1>
A version of the classic guessing game, mastermind. The player has 10 chances to guess the sequence of numbers within a chosen time limit
 
//
//
//
//
// Game Cover Screen Image //
//
//
//
</div>

## Installation Requirements

### Setup

After Downloading npm you should be able to access the game by running the following:

### Clone Repository

`$ cd [workspace directory]
$ git clone `

# Run Program

`$ cd safecracker
$ npm install
$ npm start`

Open http://localhost:3000 to view project in the browser if the browser does not open automatically.

## How to Play

- Player enters a username and selects a difficulty level.
- Player is given 10 chances to guess the secret pattern of numbers.
- Game is over when player succeeds in guessing the pattern or has no more attempts.

Note: Numbers can be repeated in the secret pattern.

## Difficulty Levels

- Easy: 10 Rounds, 4 numbers, 5 minutes
- Hard: 8 Rounds, 6 numbers, 4 minutes
- God Mode: 6 Rounds, 8 numbers, 3 minutes

## Goals

- Display a game board similar to the classical mastermind game board.
- Generate random integers using the Random.org API.
- Allow for the user to input their guesses with mouse and keyboard.
- Provide a way for the player to get feedback on their guess after each round.
- Prohibit the ability to change an answer once feedback is given.
- Provide a visual indicator of how many rounds remain.
- Announce Win / Loss.
- Provide the option to play again.
- Track score with point assignments to types of guesses.
- Post game scores to a leaderboard.

## Wireframe

<img/>

- Clean minimal design.
- Focus on visual feedback.
- Reveal secret pattern when game is over.
- Include animation to celebrate a win.

## Game Rules

- You must enter your username and selects a difficulty level.
- You are given 10 chances to guess the secret pattern of numbers.
- You can choose greater complexity in the pattern depending on difficulty.
- You will recieve feedback in the form of green, yellow, and transparent colored dots, indicating a correct number and placement, an existing number, or an incorrect guess respectively. 
- You can compete against others or your own best score posted to the leaderboard by 
solving the puzzle faster or choosing a higher difficulty.

## Extensions Implemented

- Difficulty Levels
- Instructions
- Leaderboard (Username and Score)
- Animations

## Extensions to add/improve

- Timer
- Random number generation
- Responsiveness
- Improve UI

## Built With

React.js - JavaScript Framework
Axios - Promise based HTTP client for browser and node.js
Random.org - Random number generation API

## Author

- Devin Krizwold Github 

Thank you for playing!



    // async function getRandomNumbers() {
    //   const number = 4;
    //   const maxNumber = 7;
    //   const query = `?num=4&min=0&max=${maxNumber}&col=1&base=10&format=plain&rnd=new`;
    //   const url = `https://www.random.org/integers/${query}`;
      
    //   try {
    //     let res = await fetch(url, {method:'GET', mode:'cors', credentials:'same-origin', headers:{'Content-Type':'application/json'}, referrerPolicy:'origin-when-cross-origin'});
    //     // res = await res.json();
    //     console.log(res)
    //     setSuperSecretNumbers(res);
    //   } catch (error) {
    //     console.log(error)
    //     setSuperSecretNumbers(Math.floor(Math.random() * (number + 1)));
    //   }
    // }
    // cors issue with external API > fallback to random number generator