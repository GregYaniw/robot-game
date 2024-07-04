import { GAME_TIME } from "../constants";

export default function countdown(callBack, setGameOver) {
  let countDownTime = GAME_TIME;
  const interval = setInterval(function() {
      countDownTime--;
      callBack(countDownTime, interval);
      if (countDownTime <= 0) {
          setGameOver(true);
      }
  }, 1000);
}
