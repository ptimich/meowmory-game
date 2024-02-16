import { MouseEventHandler, PropsWithChildren } from "react";
import MuiCard from "@mui/material/Card";
import { Box, CardMedia, Fade } from "@mui/material";
import CardVerso from "./assets/card-verso.svg";

interface CardProps {
  cardValue: number;
  cardIndex: number;
  imageUrl?: string;
  isGuessed: boolean;
  isPicked: boolean;
}

const Card = ({
  cardValue,
  cardIndex,
  imageUrl,
  isGuessed,
  isPicked,
}: PropsWithChildren<CardProps>) => {
  const cardClickHandler: MouseEventHandler<HTMLElement> = (ev) => {
    if (isPicked || isGuessed) {
      ev.stopPropagation();
    }
  };

  return (
    <MuiCard
      onClickCapture={cardClickHandler}
      elevation={isGuessed ? 0 : 11}
      sx={[
        {
          borderRadius: 5,
          overflow: "hidden",
          aspectRatio: "1 / 1",
          maxWidth: "150px",
          backgroundColor: "inherit",
          position: "relative",
        },
        isGuessed && { visibility: "hidden" },
      ]}
    >
      <Fade in={isPicked} timeout={500}>
        <CardMedia
          component="img"
          src={imageUrl}
          alt={cardValue.toString()}
          sx={{
            aspectRatio: "1/1",
            objectFit: "cover",
            objectPosition: "center",
          }}
        ></CardMedia>
      </Fade>
      <Box
        data-index={cardIndex}
        sx={[
          {
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            aspectRatio: "1 / 1",
            backgroundImage: `url(${CardVerso})`,
            opacity: 1,
            transition: "opacity ",
          },
          isPicked && { opacity: 0 },
        ]}
      />
    </MuiCard>
  );
};

export default Card;
