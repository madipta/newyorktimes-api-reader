import { IMostPopularMediaMetadata } from "./media-metadata";

export interface IMostPopularMedia {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  'media-metadata': IMostPopularMediaMetadata[];
}