import React from 'react';
import Button from '../ui/Button';
import { observer } from 'mobx-react';

export interface SettingProps {
  color?: string;
  size?: string;
}

export const SideBar: React.SFC<SettingProps> = observer(
  (props): JSX.Element => {
    const { color } = props;
    return (
      <div>
        These are settings {color}
        This is a button <Button>Yeh</Button>
      </div>
    );
  },
);
