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

export const Wrapper = styled('div')`
  display: flex;
  flex: 1;
  width: 360px;
  border: 1px solid #2a9fd8;
  background-color: #95bce1;
`;

export const SearchInput = styled('div')`
  display: block;
  width: 360px;
  height: 15px;
`;

export interface IStore {
  appState?: AppState;
}

// export interface ISideBarProps {
//   sectionSettings: ISectionSettings;
//   globalSettings: IGlobalSettings;
// }

@inject('appState')
@observer
export default class SideBar extends React.Component<IStore, object> {
  public static defaultProps = {
    sectionSettings: {},
  };

  public render(): JSX.Element {
    const { appState } = this.props;
    console.log(appState);
    // const { sectionSettings } = appState;
    return (
      <Wrapper>
        These are settings
        <SectionMenu />
        This is a button <Button>Yeh</Button>
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
