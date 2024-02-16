import { MouseEventHandler, PropsWithChildren } from "react";
import MuiCard from "@mui/material/Card";
import { CardMedia, Fade } from "@mui/material";
import CardVersoPath from "./assets/cardVerso.svg";

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
      <CardMedia
        component="div"
        image={CardVersoPath}
        data-index={cardIndex}
        sx={[
          {
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            aspectRatio: "1 / 1",
            opacity: 1,
          },
          isPicked && { opacity: 0 },
        ]}
      />
    </MuiCard>
  );
};

export default Card;
