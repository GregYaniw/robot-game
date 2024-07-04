import { GAME_OVER } from "../constants";

const Timer = ({timer}) => {
    return (
      <div className="timer">
        <span>Time Remaining: {timer ? timer : GAME_OVER}</span>
      </div>
    );
  }

export default Timer;