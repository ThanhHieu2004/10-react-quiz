import React from "react";
import RestartButton from "./RestartButton";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🌟";
  else if (percentage >= 80) emoji = "😍";
  else if (percentage >= 50) emoji = "😚";
  else if (percentage >= 20) emoji = "🙄";
  else if (percentage === 0) emoji = "💀";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High score: {highscore} points)</p>
      <RestartButton dispatch={dispatch} />
    </>
  );
}
