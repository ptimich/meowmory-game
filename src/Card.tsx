import { MouseEventHandler, PropsWithChildren } from "react";

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
    <div
      className={`card${isPicked ? " card-revealed" : ""} ${isGuessed ? " card-guessed" : ""}`}
      onClickCapture={cardClickHandler}
    >
      {!isGuessed && (
        <>
          <img
            className="memo-img"
            src={imageUrl}
            alt={cardValue.toString()}
            data-value={cardValue}
          />
          <span data-index={cardIndex} className="card-verso" />
        </>
      )}
    </div>
  );
};

export default Card;
