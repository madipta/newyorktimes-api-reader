import { IArticleSeacrhByline } from "./byline.interface";
import { IArticleSearchHeadline } from "./headline.interface";
import { IArticleSearchKeyword } from "./keyword.interface";
import { IArticleSearchMultimedia } from "./multimedia.interface";

export interface IArticleSearchDoc {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  print_section?: string;
  print_page?: string;
  source: string;
  multimedia: IArticleSearchMultimedia[];
  headline: IArticleSearchHeadline;
  keywords: IArticleSearchKeyword[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  subsection_name?: string;
  byline: IArticleSeacrhByline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}
