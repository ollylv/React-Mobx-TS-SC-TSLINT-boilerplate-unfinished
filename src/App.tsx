import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { inject, observer } from 'mobx-react';
import { AppState } from './stores/app-state';
import Preview from './views/preview';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: red;
  }
`;

export interface AppProps {
  store?: AppState;
}

@inject('store')
@observer
class App extends Component<AppProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="App">
        <GlobalStyle />
        <Preview />
      </div>
    );
  }
}

export default App;
