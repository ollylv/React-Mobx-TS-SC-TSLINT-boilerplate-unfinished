import React, { FC } from 'react';
import Button from '../ui/button';
import { observer } from 'mobx-react';
import { SideBarSettings } from '../../stores/app-state';
import { Header } from '../../stores/app-state';

export interface SideBarProps {
  settings?: SideBarSettings;
}

export const SideBar: FC<{ settings: SideBarProps }> = observer(
  ({ settings }): JSX.Element => {
    console.log(settings);
    return (
      <div>
        These are settings
        {settings.headers.map((item: Header) => (
          <div key={item.title}>{item.title}</div>
        ))}
        This is a button <Button>Yeh</Button>
      </div>
    );
  },
);
