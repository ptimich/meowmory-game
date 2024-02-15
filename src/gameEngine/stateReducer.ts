import { GameState } from "./types.ts";
import { Actions } from "./actions.ts";
import { defaultState } from "./defaultState.ts";

const GameStateReducer = (state: GameState, action: Actions): GameState => {
  if (!action) return state;
  switch (action.type) {
    case "ResetGame": {
      return {
        ...defaultState,
        cards: action.cards,
        gameState: "ready",
      } as GameState;
    }
    case "Loaded":
      return { ...state, gameState: "ready" } as GameState;
    case "Flip": {
      const [firstPick] = state.flippedCardsIndexes;
      if (firstPick === undefined) {
        const isGameStart = state.gameState !== "inProgress";
        return {
          ...state,
          flippedCardsIndexes: [action.index, undefined],
          ...(isGameStart
            ? {
                gameState: "inProgress",
                startedAt: Date.now(),
              }
            : {}),
        };
      } else {
        const {
          cards,
          score: { tries, matches, misses, timePlayed },
        } = state;
        const secondPick = action.index;
        const roundWin = cards[firstPick] === cards[secondPick];
        return {
          ...state,
          flippedCardsIndexes: [firstPick, secondPick],
          roundResult: roundWin ? "match" : "miss",
          score: {
            tries: tries + 1,
            matches: matches + (roundWin ? 1 : 0),
            misses: misses + (roundWin ? 0 : 1),
            timePlayed,
          },
        };
      }
    }
    case "NextTurn": {
      const {
        cards,
        guessedCardsValues,
        roundResult,
        flippedCardsIndexes,
        settings,
      } = state;
      const isGameEnd =
        roundResult === "match" &&
        guessedCardsValues.length === settings.imagesCount - 1;
      return {
        ...state,
        flippedCardsIndexes: [undefined, undefined],
        roundResult: undefined,
        guessedCardsValues:
          roundResult === "match"
            ? [...guessedCardsValues, cards[flippedCardsIndexes[0] as number]]
            : guessedCardsValues,
        gameState: isGameEnd ? "ended" : state.gameState,
        score: {
          ...state.score,
          timePlayed: Date.now() - state.startedAt,
        },
      };
    }
    case "Shuffle": // TODO
    default:
      return state;
  }
};

export { GameStateReducer };
