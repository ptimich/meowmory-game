import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

const useIsLargerThan = (breakpoint: Breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
};

const useIsSmallerThen = (breakpoint: Breakpoint) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
};

export { useIsLargerThan, useIsSmallerThen };
