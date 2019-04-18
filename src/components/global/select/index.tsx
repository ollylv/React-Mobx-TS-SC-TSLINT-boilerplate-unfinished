import React from 'react';
import Wrapper from '../../ui/select';

interface IProps {
  eventHandler: (event: React.ChangeEvent<HTMLSelectElement>, keyName?: string) => void;
  options?: any[];
  propertyKey?: string;
}

export const Select = ({ eventHandler, propertyKey, options }: IProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>, propertyKey: string): void => {
    eventHandler(event, propertyKey);
  };
  return (
    <Wrapper>
      <select onChange={event => handleChange(event, propertyKey)}>
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </Wrapper>
  );
};
