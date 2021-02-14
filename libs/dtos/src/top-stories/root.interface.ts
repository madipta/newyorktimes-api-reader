import { ITopStoriesResult } from './result.interface';

export interface ITopStoriesRoot {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: ITopStoriesResult[];
}
