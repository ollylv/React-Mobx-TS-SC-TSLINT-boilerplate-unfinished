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

@inject('store')
@observer
class PreviewBox extends Component<Props> {
  public render(): JSX.Element {
    return <Wrapper>I am a wrapper</Wrapper>;
  }
}

export default PreviewBox;
