import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
