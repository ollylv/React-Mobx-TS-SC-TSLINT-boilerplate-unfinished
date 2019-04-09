import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { SideBar } from '../components/side-bar';
import { PreviewBox } from '../components/preview-box';

export interface Props {
  store?: any;
}

const View = styled.section`
  display: flex;
  padding: 4em;
  background: green;
`;

// @inject('store')
// @observer
// class Preview extends Component<Props> {
//   public render(): JSX.Element {
//     return (

//     );
//   }
// }

export const Preview = inject('store')(
  observer(
    (props: Props): JSX.Element => {
      const { settings } = props.store;
      return (
        <View>
          <SideBar settings={settings} />
          <PreviewBox />
        </View>
      );
    },
  ),
);
