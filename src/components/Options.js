import React from "react";

export default function Options({ questionObj, answer, dispatch }) {
  const { question, options, correctOption } = questionObj;
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          key={index}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
