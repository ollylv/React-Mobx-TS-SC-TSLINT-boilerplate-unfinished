import { observable, action } from 'mobx';

export interface IQueries {
  url?: string[];
}

export default class ApiStore {
  @observable
  public queries: IQueries = { url: ['http://api-endpoint.com'] };
}
