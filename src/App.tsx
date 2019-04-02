import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { SideBar } from './components/SideBar';
import { inject, observer } from 'mobx-react';
import { AppState } from './stores/AppState';

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
        <SideBar color={''} size={''} />
      </div>
    );
  }
}

export default App;
