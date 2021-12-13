import { ITopStoriesResult, TOP_STORIES_SECTIONS } from '@base/dtos';
import axios from 'axios';
import TopStories from '../components/top-stories/top-stories';
import TopStoriesSections from '../components/top-stories-sections/top-stories-sections';

export function Index(props: {
  topStoriesSections: string[];
  topHeadlines: ITopStoriesResult[];
}) {
  return (
    <>
      <TopStoriesSections
        sections={props.topStoriesSections}
        selected="home"
      ></TopStoriesSections>
      <TopStories data={props.topHeadlines}></TopStories>
    </>
  );
}

export async function getStaticProps() {
  const topStoriesSections = TOP_STORIES_SECTIONS;

  const topStoriesUrl = `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}/api/top-stories`;

  const response = await axios.get(topStoriesUrl, {
    timeout: 5000,
    validateStatus: () => {
      return true;
    },
  });

  const topHeadlines = response.data?.result?.results || [];

  return {
    props: {
      topStoriesSections,
      topHeadlines,
    },
  };
}

export default Index;
