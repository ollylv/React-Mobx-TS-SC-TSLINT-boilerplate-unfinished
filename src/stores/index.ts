import { AppState } from './app-state';
import ApiStore from './api-store';

class RootStore {
  public appState: AppState;
  public apiStore: ApiStore;

  public constructor() {
    this.appState = new AppState();
    this.apiStore = new ApiStore();
  }
}

export const rootStore = new RootStore();
