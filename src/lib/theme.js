import { extendTheme } from "@chakra-ui/core";

const newTheme = extendTheme({
  colors: {
    primary: "#319795",
    primaryDark: "#2C7A7B"
  },
  fonts: {
    body: "Crimson Text, serif",
    heading: "Crimson Text, serif",
    mono: "Crimson Text, serif"
  }
});

export default newTheme;
