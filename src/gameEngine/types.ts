interface GameState {
  settings: {
    cardsCount: number;
    imagesCount: number;
  };
  cards: number[];
  flippedCardsIndexes: [number?, number?];
  roundResult: "match" | "miss" | undefined;
  guessedCardsValues: number[];
  gameState: "inProgress" | "paused" | "ended" | "ready" | "loading";
  score: {
    tries: number;
    misses: number;
    matches: number;
    timePlayed: number;
  };
  startedAt: number;
}

export type { GameState };
