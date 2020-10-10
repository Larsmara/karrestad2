import { theme } from "@chakra-ui/theme";

const newTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044"
    }
  },
  fonts: {
    body: "Crimson Text, serif",
    heading: "Crimson Text, serif"
  },
  fontSizes: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "22px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px"
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
};

export default newTheme;
