import { PropsWithChildren } from "react";
import { Box } from "@mui/material";

interface HeaderProps {}

export const Header = (props: PropsWithChildren<HeaderProps>) => {
  return (
    <Box>
      <h1>Meow-morize This! </h1>
    </Box>
  );
};
