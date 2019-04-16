import React from 'react';
import Wrapper from '../../ui/input';
import { IEventHandler } from '../../top-bar';

interface IProps {
  eventHandler: IEventHandler;
  // eventHandler: (keyName?: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  keyName?: string;
}

export const Input = ({ eventHandler, placeholder, keyName }: IProps): JSX.Element => {
  return (
    <Wrapper>
      <input type="text" placeholder={placeholder} onChange={eventHandler(keyName)} />
    </Wrapper>
  );
};
