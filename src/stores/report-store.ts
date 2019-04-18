import { observable, action } from 'mobx';

export interface ICurrentReportStore {
  companyName: string;
  reportNumber: number;
  reportName: string;
  reportLanguage: string;
  [propertyKey: string]: string | number;
}

export class ReportStore {
  @observable public currentReport: ICurrentReportStore = {
    companyName: 'SHL',
    reportNumber: 1234,
    reportName: '3242423',
    reportLanguage: 'Swenglish',
  };

  @action
  public setCurrentReport = (propertyKey: string, value: string | number): void => {
    this.currentReport[propertyKey] = value;
  };
}
