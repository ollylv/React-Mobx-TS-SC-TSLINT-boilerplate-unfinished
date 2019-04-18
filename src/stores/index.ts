import { SettingsStore } from './settings-store';
import ApiStore from './api-store';
import { ReportStore } from './report-store';

class RootStore {
  public settingsStore: SettingsStore;
  public apiStore: ApiStore;
  public reportStore: ReportStore;

  public constructor() {
    this.settingsStore = new SettingsStore();
    this.apiStore = new ApiStore();
    this.reportStore = new ReportStore();
  }
}

export const rootStore = new RootStore();
