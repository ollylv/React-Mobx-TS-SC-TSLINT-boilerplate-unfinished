import React, { PureComponent } from 'react';
import Button from '../ui/Button';

class SideBar extends PureComponent<{ settings: any }> {
  constructor(props: { settings: any }) {
    super(props);
  }

  public render() {
    return (
      <div>
        These are settings {this.props.settings.color}
        This is a button <Button>Yeh</Button>
      </div>
    );
  }
}

export default SideBar;
