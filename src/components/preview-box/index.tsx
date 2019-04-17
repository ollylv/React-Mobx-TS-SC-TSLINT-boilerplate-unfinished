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
  background: #fff;
  box-shadow: 3px 3px 12px 0px #ccc;
`;

export const PreviewBox = observer((): JSX.Element => <Wrapper>I am a wrapper</Wrapper>);
