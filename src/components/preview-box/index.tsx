import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

export interface Props {
  route?: string;
}

const Wrapper = styled.section`
  display: flex;
  padding: 4em;
  background: papayawhip;
`;

export const PreviewBox = inject('store')(
  observer((): JSX.Element => <Wrapper>I am a wrapper</Wrapper>),
);
