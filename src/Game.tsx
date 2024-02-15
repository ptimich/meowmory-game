import { MouseEventHandler, PropsWithChildren, useEffect } from "react";
import type { Dispatch } from "react";
import { Cards } from "./Cards.tsx";
import { createRandomizedMap } from "./utils/array";
import { Actions } from "./gameEngine/actions.ts";
import { GameState } from "./gameEngine/types.ts";
import { Box } from "@mui/material";
import bgTexture from "./assets/zenbg.png";
import { Controls } from "./Controls";
import { Header } from "./Header";

interface GameProps {
  dispatch: Dispatch<Actions>;
  state: GameState;
}

const Game = ({ dispatch, state }: PropsWithChildren<GameProps>) => {
  const {
    cards,
    gameState,
    roundResult,
    flippedCardsIndexes,
    guessedCardsValues,
    settings: { imagesCount },
  } = state;

  if (roundResult !== undefined) {
    setTimeout(() => {
      dispatch({ type: "NextTurn" });
    }, 500);
  }

  const startFn = () =>
    dispatch({ type: "ResetGame", cards: createRandomizedMap(imagesCount) });

  useEffect(() => {
    startFn();
  }, []);

  const clickHandler: MouseEventHandler<HTMLElement> = (ev) => {
    if (!(ev.target instanceof HTMLElement)) {
      return;
    }
    const index = ev.target.dataset["index"];
    if (!index) {
      return;
    }
    dispatch({ type: "Flip", index: parseInt(index) });
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${bgTexture})`,
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Header />
      <Controls startGame={startFn} />
      {gameState === "ended" ? (
        <h1>You won!</h1>
      ) : (
        <Cards
          cardClickHandler={clickHandler}
          cards={cards}
          activePicks={flippedCardsIndexes}
          guessedCards={guessedCardsValues}
        />
      )}
    </Box>
  );
};

export { Game };
