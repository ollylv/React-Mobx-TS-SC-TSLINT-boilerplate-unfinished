import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { inject, observer } from 'mobx-react';
import { AppState } from './stores/app-state';
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

export const App: React.SFC<{}> = (): JSX.Element => (
  <>
    <GlobalStyle />
    <Preview />
  </>
);
