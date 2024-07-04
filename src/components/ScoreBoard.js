import CurrentUserScore from "./CurrentUserScore";
import Timer from "./Timer";
import Player from "./Player";

const ScoreBoard = ({timer, currentScore, player, submitPlayer }) => {

  return (
    <div className="score-board">
      <Player player={player} submitPlayer={submitPlayer} />
      <CurrentUserScore currentScore={currentScore} />
      <Timer timer={timer} />
    </div>
  );
  }

export default ScoreBoard;