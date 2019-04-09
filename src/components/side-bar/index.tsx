import React, { SFC } from 'react';
import Button from '../ui/button';
import { observer } from 'mobx-react';

export interface SettingProps {
  content?: any;
  layout?: any[];
  style?: any;
}

export const SideBar: React.FC<{ settings: SettingProps }> = observer(
  (props): JSX.Element => {
    const { content, layout, style } = props;
    console.log(content);
    return (
      <div>
        These are settings This is a button <Button>Yeh</Button>
      </div>
    );
  },
);
