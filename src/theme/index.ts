import { createTheme } from '@mui/material';
import { orange } from "@mui/material/colors";
import { darkModePallete, lightModePallete } from './palette';
import { breakpoints } from "./breakpoints";
import { transitions } from "./transitions";
import { components } from "./components";
import { typography } from "./typography";
import { spacing } from "./spacing";

export enum ThemeVariantsProps {
  light = 'light',
  dark = 'dark',
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    }
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    }
  }
}

export const theme = (mode: ThemeVariantsProps) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "dark" ? darkModePallete : lightModePallete)
    },
    breakpoints,
    transitions,
    components,
    typography,
    spacing,
    status: {
      danger: orange[500]
    }
  })
};

