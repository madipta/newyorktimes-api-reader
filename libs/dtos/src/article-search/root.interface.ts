import { IArticleSearchResponse } from "./response.interface";

export interface IArticleSearchRoot {
  status: string;
  copyright: string;
  response: IArticleSearchResponse;
}