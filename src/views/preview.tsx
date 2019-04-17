import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from '../components/side-bar';
import { PreviewBox } from '../components/preview-box';
import { TopBar } from '../components/top-bar';

const View = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 5;
`;

export const Preview = (): JSX.Element => (
  <View>
    <SideBar />
    <Wrapper>
      <TopBar />
      <PreviewBox />
    </Wrapper>
  </View>
);
