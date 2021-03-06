import { observable, action } from 'mobx';

export interface Header {
  language: string;
  name: string;
}

export interface Introduction {
  title: string;
}
export interface ReportKey {
  title: string;
}

export interface Chart {
  language?: string;
  name?: string;
  imgUrl?: string;
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

export interface ISectionSettings {
  headers?: Header[];
  introductions?: Introduction[];
  reportKeys?: ReportKey[];
  charts?: Chart[];
  questions?: Question[];
  scores?: Score[];
  competencies?: Competency[];
  footers?: Footer[];
}

// interface ITitle {
//   name: string;
//   text: string;
// }

// interface ITextBox {
//   name: string;
//   text: string;
// }

// interface IPhoto {
//   name: string;
//   url: string;
// }

// interface ITitleWithTextBox {
//   title: ITitle;
//   textBox: ITextBox;
// }

// interface ITitleWithTextBoxAndPhoto extends ITitleWithTextBox {
//   photo: IPhoto;
// }

// class TitleWithTextBox implements ITitleWithTextBox {
//   public title = {
//     name: 'heaferTitle',
//     text: 'man Sossage',
//   };
//   public textBox = {
//     name: 'textBoxTitle',
//     text: 'man Sossage with text',
//   };
// }

export interface IGlobalSettings {
  theme: string;
}

export class SettingsStore {
  @observable
  public sectionSettings: ISectionSettings = {
    headers: [{ language: 'EN', name: 'Header' }],
    introductions: [],
    reportKeys: [],
    charts: [
      { language: 'EN', name: 'summary', imgUrl: 'http://something.com' },
      { language: 'EN', name: 'competency', imgUrl: 'http://something.com' },
      { language: 'EN', name: 'detail', imgUrl: 'http://something.com' },
    ],
    questions: [],
    scores: [],
    competencies: [],
    footers: [],
  };

  @observable
  public globalSettings: IGlobalSettings = {
    theme: 'black',
  };

  @action
  public setSectionSettings = (settings: ISectionSettings) => {
    this.sectionSettings = settings;
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
