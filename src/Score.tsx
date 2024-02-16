import { PropsWithChildren } from "react";
import { Backdrop, Stack, Typography } from "@mui/material";
import { formatMillis } from "./utils/duration";

interface ScoreProps {
  tries: number;
  timePlayed: number;
  clickHandler: () => void;
}

export const Score = ({
  tries,
  timePlayed,
  clickHandler,
}: PropsWithChildren<ScoreProps>) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      onClick={clickHandler}
    >
      <Stack spacing={4}>
        <Typography variant="h5">Number of tries {tries}</Typography>
        <Typography variant="h5">
          Time played {formatMillis(timePlayed)}
        </Typography>
      </Stack>
    </Backdrop>
  );
};
