import "./App.css";
import { Game } from "./Game";
import { useEffect, useReducer } from "react";
import { GameStateReducer } from "./gameEngine/stateReducer.ts";
import * as imagesCollection from "./imagesCollection";
import cats10 from "./api/mockedCats.ts";
import { defaultState } from "./gameEngine/defaultState.ts";

const catsUrls: string[] = cats10
  .slice(0, defaultState.settings.imagesCount)
  .map((c) => c.url);

function App() {
  const [state, dispatch] = useReducer(GameStateReducer, defaultState);

  useEffect(() => {
    imagesCollection.populate(catsUrls);
    dispatch({ type: "Loaded" });
  }, []);

  return <Game state={state} dispatch={dispatch} />;
}

export default App;
