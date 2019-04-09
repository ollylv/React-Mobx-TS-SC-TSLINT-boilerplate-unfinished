import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { inject, observer } from 'mobx-react';
import { AppState } from './stores/app-state';
import { Preview } from './views/preview';
import { jSXAttribute } from 'babel-types';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
  }
`;

// export interface AppProps {
//   store?: AppState;
// }

// @inject('store')
// @observer
// class App extends Component<AppProps, {}> {
//   public render(): JSX.Element {
//     return (

//     );
//   }
// }

export const App: React.SFC<{}> = (): JSX.Element => (
  <div className="app">
    <GlobalStyle />
    <Preview />
  </div>
);
