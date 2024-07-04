import MoveBugButton from './MoveBugButton';
import RotateLeft from './RotateLeft';
import RotateRight from './RotateRight';

const Controls = ({ rotateLeft, rotateRight, moveBug, timer, player }) => {
  return (
    <div className='controls'>
      <RotateLeft rotateLeft={rotateLeft} timer={timer} player={player} />
      <MoveBugButton moveBug={moveBug} timer={timer} player={player} />
      <RotateRight rotateRight={rotateRight} timer={timer} player={player} />
    </div> 
  );
}

export default Controls;