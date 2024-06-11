import { StyleSheetManager, ThemeProvider } from "styled-components";
import emotionIsPropValid from "@emotion/is-prop-valid";

import { Home } from "./pages/Home";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";

export function App() {
  return (
    <StyleSheetManager
      shouldForwardProp={prop => emotionIsPropValid(prop)}
    >
      <ThemeProvider theme={defaultTheme}>
        <Home />
        
        <GlobalStyle />
      </ThemeProvider>
    </StyleSheetManager>
  )
}
