import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'activate', 'finish'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived": {
      console.log(action.payload);
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <p></p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
