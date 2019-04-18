import React from 'react';
import styled from 'styled-components';
import { ISectionSettings } from '../../../stores/settings-store';

export const Menu = styled('div')`
  display: flex;
  flex: 1;
  width: 360px;
`;

interface IProps {
  settings?: ISectionSettings;
}

export const SectionMenu = (props: IProps): JSX.Element => {
  console.log(props);
  return <Menu>This is a Section Menu</Menu>;
};
