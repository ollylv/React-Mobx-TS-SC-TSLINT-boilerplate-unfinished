import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Preview } from './views/preview';

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
  }

  body {
    width: 100%;
    display: flex;
    padding: 4em;
    background: #eef6ff;
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
