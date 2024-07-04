import ScoreBoard from './ScoreBoard';
import BoardRow from './BoardRow';
import Controls from './Controls';
import Leaderboard from './Leaderboard';

const Board = ({
  rotateLeft,
  rotateRight,
  rowColCount,
  bugColumnPos,
  bugRowPos,
  leafColumnPos,
  leafRowPos,
  timer,
  currentScore,
  submitPlayer,
  player,
  moveBug,
  highScores
}) => {
    const BoardRows = [];
    for (let i = 1; i <= rowColCount; i++) {
      BoardRows.push((
        <BoardRow 
          row={i}
          rowColCount={rowColCount} 
          bugColumnPos={bugColumnPos}
          bugRowPos={bugRowPos}
          leafColumnPos={leafColumnPos}
          leafRowPos={leafRowPos}
        />
      ))
    }

    return (
      <div className="board-container">
        <h1>Recruitment Challenge - Robot Game</h1>
        <div>
          <div>
            <Leaderboard highScores={highScores} />
          </div>
          <div>
            <ScoreBoard timer={timer} currentScore={currentScore} player={player} submitPlayer={submitPlayer} />
            <div>
              {BoardRows.map((BoardRow) => {
                return BoardRow;
              })}
            </div>
            <Controls rotateLeft={rotateLeft} rotateRight={rotateRight} moveBug={moveBug} timer={timer} player={player} />
            <span>Game Rules: </span>
            <ul>
              <li>Enter your name into the input field at the top and press submit</li>
              <li>The timer will being the countdown and the controls above will activate</li>
              <li>Use the controls to navigate the bug and eat as many leaves before time runs out</li>
              <li>Each leaf is worth 1 point</li>
              <li>If the bug accidentally travels off the board, the game ends</li>
              <li>When the game is over you may refresh your browser to play again</li>
              <li>Have fun!</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Board;
