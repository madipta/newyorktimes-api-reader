import { IArticleSearchDoc } from "./doc.interface";
import { IArticleSearchMeta } from "./meta.interface";

export interface IArticleSearchResponse {
  docs: IArticleSearchDoc[];
  meta: IArticleSearchMeta;
}