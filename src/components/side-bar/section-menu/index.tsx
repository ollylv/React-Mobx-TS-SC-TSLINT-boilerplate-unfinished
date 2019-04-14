import React from 'react';
import styled from 'styled-components';
import { ISectionSettings } from '../../../stores/app-state';

export const Menu = styled('div')`
  display: flex;
  flex: 1;
  width: 360px;
  border: 1px solid #2a9fd8;
  background-color: #95bce1;
`;

export const SectionMenu = (props: { settings?: ISectionSettings }): any => {
  if (props) {
    console.log(props);
    return <Menu>This is menu</Menu>;
  }
};
