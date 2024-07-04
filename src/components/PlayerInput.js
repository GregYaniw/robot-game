const PlayerInput = ({ submitPlayer }) => {

  return (
    <div className="player-input">
      <input className="player-input-field" type="text" />
      <button onClick={() => submitPlayer()}>Submit</button>
    </div>

  );
  }

export default PlayerInput;