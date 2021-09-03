import "../styles.css";

// import {news} from "./news";

import { Home } from "./Home";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </>
  );
}
