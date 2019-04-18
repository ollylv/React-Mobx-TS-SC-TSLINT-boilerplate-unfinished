import React from 'react';
import styled from 'styled-components';
import { Input } from '../global/input';
import { Select } from '../global/select';
import { inject, observer } from 'mobx-react';
import { ReportStore } from '../../stores/report-store';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 6px;
  background-color: #eef6ff;
`;

const selectOptions = ['English', 'Russian', 'Latvian'];

// const handleChange = (keyName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
//   eventHandler(event, keyName);
// };

export interface IStore {
  reportStore?: ReportStore;
}

@inject('reportStore')
@observer
export class TopBar extends React.Component<IStore, {}> {
  public constructor(props: IStore) {
    super(props);
  }
  public handleChange = (propertyKey: string) => (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    this.props.reportStore.setCurrentReport(propertyKey, event.target.value);
    console.log(event.target.value);
    console.log(propertyKey);
  };

  public handleSelect = (
    event: React.ChangeEvent<HTMLSelectElement>,
    propertyKey: string,
  ): void => {
    this.props.reportStore.setCurrentReport(propertyKey, event.target.value);
    console.log(event.target.value);
    console.log(propertyKey);
  };

  public render(): JSX.Element {
    return (
      <Wrapper>
        <Input
          eventHandler={this.handleChange}
          placeholder="Company Name"
          propertyKey="companyName"
        />
        <Input
          eventHandler={this.handleChange}
          placeholder="Report Number"
          propertyKey="reportNumber"
        />
        <Input
          eventHandler={this.handleChange}
          placeholder="Report Name"
          propertyKey="reportName"
        />
        <Select
          eventHandler={this.handleSelect}
          propertyKey="reportLanguage"
          options={selectOptions}
        />
      </Wrapper>
    );
  }
}
