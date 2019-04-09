import { observable, action } from 'mobx';

export class AppState {
  @observable
  public settings = {
    layout: [],
    style: {},
    content: {},
  };

  @action
  public setSettings = (settings: any) => {
    this.settings = settings;
  };
}
