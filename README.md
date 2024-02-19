# Meow-mory Game

A game which helps improving your memory while looking at cats.
Preview available at https://meowmory-app.pages.dev/

## Build

Project uses [pnpm](https://pnpm.io/installation) package manager. The app is bundled
with [Vite](https://vitejs.dev/guide/)

```shell
pnpm install
pnpm build
pnpm preview
```

Open browser at url: `http://localhost:4173/`

## Overview

The app is build using React + Typescript + Material UI.

Currently, the game can be played on devices with different viewport sizes. The Card sizes will self-adjust. 
But it will be extremely uncomfortable to play it on small viewports, like mobile devices.


### Tools
[React](https://react.dev/learn) is one of the most popular UI libraries. I use it just as an independent library here,
instead of it being part ofa bigger meta-framework like Next.js or Remix, because for now I haven't seen the need for
the additional technical and mental complexity introduced by them.

[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) brings the benefit of static
analysis during development and build time. Although it slows down development in the initial phase, I think it's worth
it.

[Material UI](https://mui.com/material-ui/getting-started/) is the styling solution I've used in last projects. It's quite
nice and popular "runtime CSS-in-JS" solution. However, I'd consider replacing it with a zero-runtime styling solution,
such as [Vanilla Extract](https://vanilla-extract.style/) or [Panda CSS](https://panda-css.com/). 
Also, I've experienced a noticeable slowdown in my IDE after including it in the project.

### Game engine
The cards are laid out in a 6x4 grid, totalling in 24 cards (`cardsCount`). Thus, 12 distinct images are required (`imagesCount`).
The image URLs are stored as an array in `imagesCollection` module. 

Before starting the Game, the app prepares the array of randomized card images and passes it to the state engine.
The gist is as follows:
```
imageUrls = [url0 .. url11]
cards = [c0 .. c23], where c(i) has values [0 .. 11], and the value represents the index in imageUrls.
```

This means that in the `cards` array has every value repeated twice, as there are 2 cards per image url.
Of course the `cards` array is shuffled (with the `utils/array.shuffle()` algorithm) so that the images are laid in an
unpredictable order

If the user decides to reset the game, it's sufficient to create a new shuffled `cards` array and pass it to the state
engine.

The State itself is implemented with the `useReducer` hook. It's being initialized in the top App component
```shell
const [state, dispatch] = useReducer(GameStateReducer, defaultState);
```
- `state` - object representing current state
- `dispatch` - the function which accepts action objects and triggers state changes

Modeling the state in this way, allows for greater flexibility of feature implementation. Some actions and behaviours 
are left for later. 

Later, I will probably expose `state` and `dispatch` in the React context. It wasn't critical for now.

## Game play
The game is boring for now. It implements the minimum requirements. 

- The user can see a grid of 6x4 cards.
- The game starts when user clicks the first card. 
- It ends when there are no Cards left on the table, which means all pairs have been guessed.
- When the game ends, the score is automatically displayed to the user. For now, 2 metrics are counted for the User's score: _the time played_ and _number of tries_. 
- While seeing the score, the user can click anywhere on the screen to launch a new game.
- While the game is in progress, the user can discard it and launch a new one, by clicking on "RESET" button

But lots of improvements can be added later 
without major pain. I think some of them can be marketed as bonus-features

## TODOs
### Capabilities

- Handle responsiveness: Cards grid should self-adjust(card size and count) depending on the size of the device.
- Keyboard a11y: should be able to play the game using only the keyboard
- visually impaired users: browser speech engine should announce the Card's value (numeric representation of the image) 

## Settings
- light/dark mode
- Difficulty: Cards Count
- Difficulty: Limited time allowed to pick a card 
- Difficulty: Limited time to see and memorize the image
- Difficulty: Limited number of attempts before game over

## Features
- show hint
- score: show number of tries
- score: show elapsed time
- clue: 50% fewer options
- gameplay: replace gradually old images with new ones between games
