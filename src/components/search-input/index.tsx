import React, { Component } from 'react';
import styled from 'styled-components';

export interface Props {
  route?: string;
}

export const Wrapper = styled.div`
  width: 360px;
  height: 60px;
  background: papayawhip;
`;

export const SearchInput = (): JSX.Element => (
  <Wrapper>
    <input type="text" placeholder="Search Building Blocks" />
  </Wrapper>
);
