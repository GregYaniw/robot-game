import { useState, useEffect } from 'react';

import './App.css';
import Board from './components/index';
import { NORTH, SOUTH, EAST, WEST } from './constants';
import countdown from './utilities/countdown';
import { GAME_TIME } from './constants';

function App() {
  const [degrees, setDegrees] = useState(0);
  const [rowColCount] = useState(5);
  const [bugColumnPos, setBugColumnPos] = useState(3);
  const [bugRowPos, setBugRowPos] = useState(3);
  const [leafColumnPos, setLeafColumnPos] = useState(0);
  const [leafRowPos, setLeafRowPos] = useState(0);
  const [direction, setDirection] = useState(NORTH);
  const [timer, setTimer] = useState(GAME_TIME);
  const [interval, setInterval] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [player, setPlayer] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [highScores, setHighScores] = useState(null);

  useEffect(() => {
    setHighScores(JSON.parse(localStorage.getItem('highScores')));
  }, []);

  useEffect(() => {
    setLeafColumnPos(leafPosition(1, rowColCount));
    setLeafRowPos(leafPosition(1, rowColCount));
  }, [currentScore]);

  useEffect(() => {
    if (bugColumnPos === leafColumnPos && leafRowPos === bugRowPos) {
      setCurrentScore(currentScore + 1);
    }

    if (bugColumnPos < 1 || bugColumnPos > rowColCount || bugRowPos < 1 || bugRowPos > rowColCount) {
      setGameOver(true);
    } else {
      const bugElement = document.querySelector(".bug");
      bugElement.style.transform = `rotate(${degrees}deg)`;
    }
  }, [bugColumnPos, bugRowPos]);

  useEffect(() => {
    if (gameOver) {
      clearTimeout(interval);
      setTimer(0);
      updateLeaderboard();
    }
  }, [gameOver]);

  const updateLeaderboard = () => {
    const playerScore = { 'name': player, 'score': currentScore };

    if (!highScores) {
      localStorage.setItem('highScores', JSON.stringify([playerScore]));
    } else {
      const highScoresArray = JSON.parse(localStorage.getItem('highScores'));
      highScoresArray.push(playerScore);
      localStorage.setItem('highScores', JSON.stringify(highScoresArray));
    }
    setHighScores(JSON.parse(localStorage.getItem('highScores')));
  }

  const leafPosition = (min, max) => {
    const position = Math.floor(Math.random() * (max - min + 1)) + min;
    return (position === bugColumnPos || position === bugRowPos) ? leafPosition(1, rowColCount) : position;
  };

  const rotateLeft = () => {
    const bugElement = document.querySelector(".bug");
    bugElement.style.transform = `rotate(${degrees - 90}deg)`;
    setDegrees(degrees - 90);
    switch(direction) {
      case NORTH:
        setDirection(WEST);
        break;
      case EAST:
        setDirection(NORTH);
        break;
      case SOUTH:
        setDirection(EAST);
        break;
      default:
        setDirection(SOUTH);
    }
  }

  const rotateRight = () => {
    const bugElement = document.querySelector(".bug");
    bugElement.style.transform = `rotate(${degrees + 90}deg)`;
    setDegrees(degrees + 90);
    switch(direction) {
      case NORTH:
        setDirection(EAST);
        break;
      case EAST:
        setDirection(SOUTH);
        break;
      case SOUTH:
        setDirection(WEST);
        break;
      default:
        setDirection(NORTH);
    }
  }

  const moveBug = () => {
    switch(direction) {
      case NORTH:
        setBugRowPos(bugRowPos-1);
        break;
      case EAST:
        setBugColumnPos(bugColumnPos+1);
        break;
      case SOUTH:
        setBugRowPos(bugRowPos+1);
        break;
      default:
        setBugColumnPos(bugColumnPos-1);
    }
  }

  const submitPlayer = () => {
    const playerInput = document.querySelector('.player-input-field').value;
    setPlayer(playerInput);
    countdown((countDownTime, interval) => {
      setTimer(countDownTime);
      setInterval(interval);
    },
    setGameOver
    );
  }

  return (
    <div className="app">
      <Board 
        rotateLeft={rotateLeft} 
        rotateRight={rotateRight} 
        rowColCount={rowColCount} 
        bugColumnPos={bugColumnPos} 
        bugRowPos={bugRowPos}
        leafColumnPos={leafColumnPos}
        leafRowPos={leafRowPos}
        timer={timer}
        currentScore={currentScore}
        submitPlayer={submitPlayer}
        player={player}
        moveBug={moveBug} 
        highScores={highScores}
      />
    </div>
  );
}

export default App;
