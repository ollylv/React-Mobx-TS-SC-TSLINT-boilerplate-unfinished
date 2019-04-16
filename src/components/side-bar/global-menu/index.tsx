import React from 'react';
import styled from 'styled-components';
import { IGlobalSettings } from '../../../stores/app-state';

export const Menu = styled('div')`
  display: flex;
  flex: 1;
  border: 1px solid #2a9fd8;
  background-color: #95bce1;
`;

interface IProps {
  settings?: IGlobalSettings;
}

export const GlobalMenu = (props: IProps): JSX.Element => {
  console.log(props);
  return <Menu>This is Global</Menu>;
};
