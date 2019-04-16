import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Preview } from './views/preview';

export const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
  }

  body {
    display: flex;
    padding: 4em;
    background: #eef6ff;
  }

  body > div {
    width: 100%;
  }
`;

class App extends Component {
  public render(): JSX.Element {
    return (
      <>
        <GlobalStyle />
        <Preview />
      </>
    );
  }
}

export default App;
