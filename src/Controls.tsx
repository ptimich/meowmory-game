import { PropsWithChildren } from "react";
import { Box, Button } from "@mui/material";

export interface ControlsProps {
  startGame: () => void;
}
export const Controls = ({ startGame }: PropsWithChildren<ControlsProps>) => {
  return (
    <Box alignItems="center" sx={{ flexBasis: "4rem", minHeight: "4rem" }}>
      <Button variant="contained" onClick={startGame}>
        New Game!
      </Button>
    </Box>
  );
};
