import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { SideBar } from '../components/side-bar';
import { PreviewBox } from '../components/preview-box';
import { AppState } from '../stores/app-state';

const View = styled('section')`
  width: 100%;
  display: flex;
  flex: 1 1 100%;
  flex-wrap: no-wrap;
  align-items: stretch;
`;

export const Preview = inject('store')(
  observer(
    ({ store: appState }): JSX.Element => {
      console.log(appState);
      const { sideBarSettings } = appState;
      return (
        <View>
          <SideBar settings={sideBarSettings} />
          <PreviewBox />
        </View>
      );
    },
  ),
);
