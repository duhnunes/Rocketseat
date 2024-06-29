import { StyleSheetManager, ThemeProvider } from "styled-components";
import emotionIsPropValid from "@emotion/is-prop-valid";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { GithubUserProvider } from "./contexts/GitHubUserContex";
import { GithubIssuesProvider } from "./contexts/GithubIssuesContext";

export function App() {
  return (
    <StyleSheetManager
      shouldForwardProp={prop => emotionIsPropValid(prop)}
    >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <BrowserRouter>
          <GithubUserProvider>
            <GithubIssuesProvider>
              <Router />
            </GithubIssuesProvider>
          </GithubUserProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  )
}
