import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

export interface Props {
  route?: string;
}

const Wrapper = styled.section`
  display: flex;
  flex: 3;
  padding: 4em;
  background: papayawhip;
`;

export const PreviewBox = observer((): JSX.Element => <Wrapper>I am a wrapper</Wrapper>);
