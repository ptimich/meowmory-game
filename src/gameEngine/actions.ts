type ActionTypes = "NextTurn" | "Shuffle" | "Start" | "Loaded";

interface Action {
  type: ActionTypes;
}

interface ActionFlip {
  type: "Flip";
  index: number;
}

interface ActionResetGame {
  type: "ResetGame";
  cards: number[];
}

type Actions = Action | ActionFlip | ActionResetGame;
export type { Actions };
