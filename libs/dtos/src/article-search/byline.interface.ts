import { IArticleSearchPerson } from "./person.interface";

export interface IArticleSeacrhByline {
  original: string;
  person: IArticleSearchPerson[];
  organization?: any;
}
