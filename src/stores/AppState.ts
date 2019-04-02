import { observable, action } from 'mobx';

export class AppState {
  @observable
  public color = 'red';

  @action
  public changeColor = (color: string) => {
    this.color = color;
  };
}
