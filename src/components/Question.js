import React from "react";
import Options from "./Options";

export default function Question({ questionObj, dispatch, answer }) {
  const { question } = questionObj;
  return (
    <div>
      <h4>{question}</h4>
      <Options questionObj={questionObj} answer={answer} dispatch={dispatch} />
    </div>
  );
}
