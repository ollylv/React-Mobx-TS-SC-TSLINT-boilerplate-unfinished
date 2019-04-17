import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Preview } from '../../views/preview';

export const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box; 
  }

  body, html {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
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
