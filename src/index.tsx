import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { globalStore } from "./redux";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.getElementById("root")
);
