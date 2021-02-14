import { IMostPopularResult } from "./result.interface";

export interface IMostPopularRoot {
  status: string;
  copyright: string;
  num_results: number;
  results: IMostPopularResult[];
}
