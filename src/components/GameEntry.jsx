import React from "react";

function GameEntry({ handleStart, displayBtn }) {
  return (
    <div>
      <button
        className="play-game"
        style={{ display: `${displayBtn}` }}
        onClick={handleStart}
      >
        Play Game
      </button>
    </div>
  );
}

export default GameEntry;
