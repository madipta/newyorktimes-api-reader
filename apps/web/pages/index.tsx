import { TOP_STORIES_SECTIONS } from '@base/dtos';
import axios from 'axios';
import { useState } from 'react';
import StoryDto from '../components/story/story-dto';
import TopStories from '../components/top-stories/top-stories'
import TopStoriesSections from '../components/top-stories-sections/top-stories-sections';

export function Index(props: {
  topStoriesSections: string[];
  topHeadlines: StoryDto[];
}) {
  const [topStoriesSection, setTopStoriesSection] = useState('home');
  return (
    <div className="font-serif pb-16">
      <div className="relative bg-gray-900 tracking-tight py-4">
        <h1 className="leading-none text-2xl text-center text-gray-200 font-black">
          The New York Times
        </h1>
        <p className="absolute left-0 top-0 leading-none tracking-wide mt-4 ml-4">
          <a
            href="https://github.com/madipta/newyorktimes-api-reader"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-center italic text-gray-600 hover:text-indigo-200"
          >
            <svg
              height="26"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="26"
              data-view-component="true"
              className="inline fill-current"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </p>
      </div>
      <div className="container bg-indigo-50 text-gray-600 px-4 py-8 sm:my-12 mx-auto">
        <p className="text-xl sm:text-2xl tracking-tight text-indigo-900 font-extrabold mb-2">
          Built with @Nrwl/Nx monorepo
        </p>
        <p className="leading-tight font-sans text-sm">
          Frontend: React/NextJS, TailwindCSS
        </p>
        <p className="leading-tight font-sans text-sm">
          Backend: NestJs, Redis
        </p>
        <p className="leading-tight font-sans text-sm">
          By:{' '}
          <a href="https://github.com/madipta" className="text-indigo-800">
            Madipta
          </a>
        </p>
      </div>
      <div className="container mx-auto">
        <div className="h-0 border-b border-gray-300"></div>
        <TopStoriesSections
          sections={props.topStoriesSections}
          selected={topStoriesSection}
        ></TopStoriesSections>
      </div>
      <div className="container mx-auto">
        <div className="h-0 border-b border-gray-400"></div>
        <div className="grid grid-cols-12 mt-4">
          <h2 className="col-span-12 tracking-wider uppercase font-bold px-4 md:px-0 mb-8">
            Top Stories
          </h2>
          <TopStories data={props.topHeadlines}></TopStories>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const topStoriesSections = TOP_STORIES_SECTIONS;

  const topStoriesUrl = `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}/api/top-stories`;

  const response = await axios.get(topStoriesUrl, {
    timeout: 5000,
    // validateStatus: () => {
    //   return true;
    // },
  });

  const topHeadlines = response.data.result.results || [];

  return {
    props: {
      topStoriesSections,
      topHeadlines,
    },
  };
}

export default Index;
