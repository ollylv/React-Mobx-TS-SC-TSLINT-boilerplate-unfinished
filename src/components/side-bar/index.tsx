import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../ui/button';
import { observer, inject } from 'mobx-react';
import { Chart } from '../../stores/app-state';
import { SectionMenu } from './section-menu';
import { ISectionSettings } from '../../stores/app-state';
import { IGlobalSettings } from '../../stores/app-state';
import { AppState } from '../../stores/app-state';
import ApiStore from '../../stores/api-store';
import { GlobalStylesMenu } from './global-styles-menu';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #eef6ff;
`;

export interface IStore {
  appState?: AppState;
}

@inject('appState')
@observer
export default class SideBar extends React.Component<IStore, object> {
  public render(): JSX.Element {
    const { sectionSettings, globalSettings } = this.props.appState;
    return (
      <Wrapper>
        <SectionMenu settings={sectionSettings} />
        {/* <GlobalStylesMenu settings={globalSettings} /> */}
        {/* This is a button <Button>Yeh</Button> */}
      </Wrapper>
    );
  }
}

// export const SideBar: FC<ISideBarProps> = observer(
//   ({ sectionsSettings, globalSettings }): JSX.Element => {
//     console.log(sectionsSettings);
//     return (
//       <SideBarUi>
//         These are settings
//         {sectionsSettings.charts.map((item: Chart) => (
//           <div key={item.name}>{item.name}</div>
//         ))}
//         This is a button <Button>Yeh</Button>
//       </SideBarUi>
//     );
//   },
// );
