import React from 'react';
import Wrapper from '../../ui/input';

interface IProps {
  eventHandler: (keyName?: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  propertyKey?: string;
}

export const Input = ({ eventHandler, placeholder, propertyKey }: IProps): JSX.Element => {
  return (
    <Wrapper>
      <input type="number" placeholder={placeholder} onChange={eventHandler(propertyKey)} />
    </Wrapper>
  );
};
