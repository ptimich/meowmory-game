import { GameState } from "./types.ts";

const defaultCardsCount = 24;
const defaultState: GameState = {
  settings: {
    cardsCount: defaultCardsCount,
    imagesCount: defaultCardsCount / 2,
  },
  cards: [],
  flippedCardsIndexes: [undefined, undefined],
  guessedCardsValues: [],
  roundResult: undefined,
  gameState: "loading",
  score: {
    matches: 0,
    misses: 0,
    timePlayed: 0,
    tries: 0,
  },
  startedAt: 0,
};
export { defaultState };
