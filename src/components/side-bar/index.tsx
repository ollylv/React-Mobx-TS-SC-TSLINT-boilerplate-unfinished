import React from 'react';
import styled from 'styled-components';
import Button from '../ui/button';
import { observer, inject } from 'mobx-react';
import { Chart } from '../../stores/settings-store';
import { SectionMenu } from './section-menu';
import { ISectionSettings } from '../../stores/settings-store';
import { IGlobalSettings } from '../../stores/settings-store';
import { SettingsStore } from '../../stores/settings-store';
import ApiStore from '../../stores/api-store';
import { GlobalStylesMenu } from './global-styles-menu';
import { ReportStore } from '../../stores/report-store';

export const Wrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex: 1;
  background-color: #eef6ff;
`;

export interface IStore {
  settingsStore?: SettingsStore;
  reportStore?: ReportStore;
}

@inject('settingsStore')
@observer
export default class SideBar extends React.Component<IStore, {}> {
  public render(): JSX.Element {
    const { sectionSettings, globalSettings } = this.props.settingsStore;
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
