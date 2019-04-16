import React from 'react';
import Wrapper from '../../ui/select';

interface IProps {
  eventHandler: (event: React.ChangeEvent<HTMLSelectElement>, keyName?: string) => void;
  options?: any[];
  keyName?: string;
}

export const Select = ({ eventHandler, keyName, options }: IProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, keyName: string): void => {
    eventHandler(event, keyName);
  };
  return (
    <Wrapper>
      <select onChange={event => handleChange(event, keyName)}>
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </Wrapper>
  );
};
