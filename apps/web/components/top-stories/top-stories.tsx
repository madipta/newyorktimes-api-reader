import Story from '../story/story'
import StoryDto from '../story/story-dto';
import './top-stories.module.css';

export interface TopStoriesProps {
  data: StoryDto[];
}

export function TopStories(props: TopStoriesProps) {
  return (
    <>
      {props.data &&
        props.data.map((data, index) => {
          const colIndex = index % 3;
          if (colIndex === 0) {
            return (
              <div
                key={data.url}
                className="col-span-12 md:col-span-3 p-4 md:pl-0"
              >
                <Story
                  url={data.url}
                  title={data.title}
                  abstract={data.abstract}
                ></Story>
              </div>
            );
          }
          if (colIndex === 1) {
            return (
              <div
                key={data.url}
                className="col-span-12 md:col-span-6 p-4 md:border-l md:border-r md:border-gray-200"
              >
                <Story
                  url={data.url}
                  title={data.title}
                  abstract={data.abstract}
                ></Story>
              </div>
            );
          }
          return (
            <div
              key={data.url}
              className="col-span-12 md:col-span-3 p-4 md:pr-0"
            >
              <Story
                url={data.url}
                title={data.title}
                abstract={data.abstract}
              ></Story>
            </div>
          );
        })}
    </>
  );
}

export default TopStories;
