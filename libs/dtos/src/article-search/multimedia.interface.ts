import { IArticleSearchLegacy } from "./legacy.interface";

export interface IArticleSearchMultimedia {
  rank: number;
  subtype: string;
  caption?: any;
  credit?: any;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: IArticleSearchLegacy;
  subType: string;
  crop_name: string;
}
