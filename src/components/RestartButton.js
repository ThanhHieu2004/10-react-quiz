import React from "react";

export default function RestartButton({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "restart" })}
    >
      Restart Quiz
    </button>
  );
}
