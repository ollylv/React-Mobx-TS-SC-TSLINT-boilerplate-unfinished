import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { SideBar } from '../components/side-bar';
import PreviewBox from '../components/preview-box';

export interface Props {
  route?: string;
  settings?: string;
}

const View = styled.section`
  display: flex;
  padding: 4em;
  background: blue;
`;

@inject('store')
@observer
class Preview extends Component<Props> {
  public render(): JSX.Element {
    return (
      <View>
        <SideBar color={''} size={''} />
        <PreviewBox />
      </View>
    );
  }
}

export default Preview;
