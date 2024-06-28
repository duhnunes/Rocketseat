import { StyleSheetManager, ThemeProvider } from "styled-components";
import emotionIsPropValid from "@emotion/is-prop-valid";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { GithubUserProvider } from "./contexts/GitHubUserContex";

export function App() {
  return (
    <StyleSheetManager
      shouldForwardProp={prop => emotionIsPropValid(prop)}
    >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <BrowserRouter>
          <GithubUserProvider>
            <Router />
          </GithubUserProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  )
}
