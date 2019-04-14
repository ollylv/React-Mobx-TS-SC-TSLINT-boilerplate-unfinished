import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from '../components/side-bar';
import { PreviewBox } from '../components/preview-box';

const View = styled('section')`
  width: 100%;
  display: flex;
  flex: 1 1 100%;
  flex-wrap: no-wrap;
  align-items: stretch;
`;

export const Preview = (): JSX.Element => (
  <View>
    <SideBar />
    <PreviewBox />
  </View>
);
