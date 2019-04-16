import React from 'react';
import styled from 'styled-components';
import { Input } from '../global/input';
import { Select } from '../global/select';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex: 1;
  border: 1px solid #2a9fd8;
  background-color: #95bce1;
`;

const selectOptions = ['English', 'Russian', 'Latvian'];

// const handleChange = (keyName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
//   eventHandler(event, keyName);
// };

export const handleChange = (keyName: string) => (
  event: React.ChangeEvent<HTMLInputElement>,
): void => {
  console.log(event.target.value);
  console.log(keyName);
};

const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>, keyName: string): void => {
  console.log(event.target.value);
  console.log(keyName);
};

export const TopBar = (): JSX.Element => {
  return (
    <Wrapper>
      <Input eventHandler={handleChange} placeholder="Company Name" keyName="companyName" />
      <Input eventHandler={handleChange} placeholder="Report Number" keyName="reportNumber" />
      <Input eventHandler={handleChange} placeholder="Report Name" keyName="reportName" />
      <Select eventHandler={handleSelect} keyName="langSelect" options={selectOptions} />
    </Wrapper>
  );
};
