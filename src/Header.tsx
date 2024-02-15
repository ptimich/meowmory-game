import { PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {}

export const Header = (props: PropsWithChildren<HeaderProps>) => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ fontSize: "3rem", fontWeight: 400, mt: 4, mb: 2 }}
      >
        Meow-morize This!{" "}
      </Typography>
    </Box>
  );
};
