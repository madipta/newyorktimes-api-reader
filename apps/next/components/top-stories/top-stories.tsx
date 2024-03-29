import { ITopStoriesResult } from '@base/dtos';
import Headlines from './headlines/headlines';
import MainHeadline from './main-headline/main-headline';
import Opinions from './opinions/opinions';
import TopHeadline from './top-headline/top-headline';
import SecHeadline from './sec-headline/sec-headline';

export interface TopStoriesProps {
  data: ITopStoriesResult[];
}

export function TopStories(props: TopStoriesProps) {
  const { data } = props;
  const topHeadline = data.shift();
  const mainHeadlines = [data.shift(), data.shift()];
  const secHeadlines = [data.shift(), data.shift(), data.shift(), data.shift()];
  const opinions = data.filter((val) => val.section === 'opinion');
  const other = data.filter((val) => val.section !== 'opinion');
  return (
    <div className="container mx-auto">
      <div className="h-0 border-b border-gray-400"></div>
      <div className="grid grid-cols-12 mt-4">
        <h2 className="col-span-12 tracking-wider uppercase font-bold px-4 md:px-0 mb-8">
          Top Stories
        </h2>
        {mainHeadlines && <MainHeadline data={mainHeadlines}></MainHeadline>}
        {topHeadline && <TopHeadline data={topHeadline}></TopHeadline>}
        {secHeadlines && <SecHeadline data={secHeadlines}></SecHeadline>}
      </div>
      <div className="grid grid-cols-12 my-8">
        <div className="col-span-12 h-0 border-b border-gray-300 mb-4"></div>
        <h3 className="col-span-12 tracking-wider uppercase font-bold px-4 md:px-0 mb-4">
          More Articles
        </h3>
        <Headlines data={other}></Headlines>
        <Opinions data={opinions}></Opinions>
      </div>
    </div>
  );
}

export default TopStories;
