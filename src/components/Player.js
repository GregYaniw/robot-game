import PlayerInput from "./PlayerInput";

const Player = ({ player, submitPlayer }) => {
    return (
      <div className="player">
        <span>Player: {!player ? <PlayerInput submitPlayer={submitPlayer} /> : player}</span>
      </div>
      
    );
  }

export default Player;