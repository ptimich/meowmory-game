import { Game } from "./Game";
import { useEffect, useReducer } from "react";
import { GameStateReducer } from "./gameEngine/stateReducer.ts";
import { defaultState } from "./gameEngine/defaultState.ts";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { populateCatsCollection } from "./api/catsFetcher";

function App() {
  const [state, dispatch] = useReducer(GameStateReducer, defaultState);

  useEffect(() => {
    populateCatsCollection()
      .then(() => {
        dispatch({ type: "Loaded" });
      })
      .catch(() => {
        console.log("failed to fetch cats");
      });
  }, []);

  return <Game state={state} dispatch={dispatch} />;
}

export default App;
