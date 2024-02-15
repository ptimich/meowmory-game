import { MouseEventHandler, PropsWithChildren } from "react";
import Card from "./Card";
import * as imagesCollection from "./imagesCollection";
import { Container } from "@mui/material";

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
    <Container
      fixed
      maxWidth="md"
      onClick={cardClickHandler}
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
        justifyItems: "center",
        maxWidth: {
          sm: "100vh",
        },
      }}
    >
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
    </Container>
  );
};
