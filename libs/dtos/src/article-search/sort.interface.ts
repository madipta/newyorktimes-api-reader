export const ArticleSearchSortList = ['newest', 'oldest', 'relevance'] as const;

export type ArticleSearchSortType = typeof ArticleSearchSortList[number];
