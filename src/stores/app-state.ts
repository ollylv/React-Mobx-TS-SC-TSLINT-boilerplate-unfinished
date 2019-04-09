import { observable, action } from 'mobx';

export interface Header {
  title: string;
}

export interface Introduction {
  title: string;
}
export interface ReportKey {
  title: string;
}
export interface Charts {
  title: string;
}
export interface Question {
  title: string;
}
export interface Score {
  title: string;
}
export interface Competency {
  title: string;
}
export interface Footer {
  title: string;
}

export interface SideBarSettings {
  headers?: Header[];
  introductions?: Introduction[];
  reportKeys?: ReportKey[];
  charts?: Charts[];
  questions?: Question[];
  scores?: Score[];
  competencies?: Competency[];
  footers?: Footer[];
}

export class AppState {
  @observable
  public sideBarSettings: SideBarSettings = {
    headers: [{ title: 'dwawd' }],
    introductions: [],
    reportKeys: [],
    charts: [],
    questions: [],
    scores: [],
    competencies: [],
    footers: [],
  };

  @action
  public setSideBarSettings = (settings: SideBarSettings) => {
    this.sideBarSettings = settings;
  };
}

// export class SideBarSettings {
//   @observable
//   public settings = {
//     header: [],
//     introduction: [],
//     reportKey: [],
//     charts: [],
//     questions: [],
//     scores: [],
//     competency: [],
//     footer: [],
//   };
// }
