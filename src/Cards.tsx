import { MouseEventHandler, PropsWithChildren } from "react";
import Card from "./Card";
import * as imagesCollection from "./imagesCollection";

interface CardsProps {
  cardClickHandler: MouseEventHandler<HTMLElement>;
  cards: number[];
  activePicks: [number?, number?];
  guessedCards: number[];
}
export const Cards = ({
  cardClickHandler,
  cards,
  activePicks,
  guessedCards,
}: PropsWithChildren<CardsProps>) => {
  const imageUrls = imagesCollection.get();
  const isNumMode = imagesCollection.isEmpty();

  return (
    <div className="cards" onClick={cardClickHandler}>
      {cards.map((cardValue, cardIndex) => (
        <Card
          key={cardIndex}
          cardValue={cardValue}
          cardIndex={cardIndex}
          imageUrl={isNumMode ? "" : imageUrls[cardValue]}
          isGuessed={guessedCards.includes(cardValue)}
          isPicked={activePicks.includes(cardIndex)}
        />
      ))}
    </div>
  );
};
