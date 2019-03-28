import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import SideBar from './components/SideBar';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: green;
  }
`;

class App extends Component {
  public settings = {
    color: 'red',
  };

  public render() {
    return (
      <div className="App">
        <GlobalStyle />
        <SideBar settings={this.settings} />
      </div>
    );
  }
}

export default App;
