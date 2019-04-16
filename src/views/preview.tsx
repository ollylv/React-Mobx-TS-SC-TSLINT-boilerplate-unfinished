import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from '../components/side-bar';
import { PreviewBox } from '../components/preview-box';

const View = styled('section')`
  width: 100%;
  height: 100%;
  padding: 18px;
  display: flex;
  flex: 1 1 100%;
  flex-wrap: no-wrap;
  align-items: stretch;
  box-sizing: border-box;
`;

export const Preview = (): JSX.Element => (
  <View>
    <SideBar />
    <PreviewBox />
  </View>
);
