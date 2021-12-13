import { ITopStoriesResult } from '@base/dtos';

export type StoryProps = Partial<ITopStoriesResult>;

export function Story(props: StoryProps) {
  return (
    <div>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-2xl text-gray-800 cursor-pointer"
      >
        {props.title}
      </a>
      <p className="font-sans text-sm text-gray-500 mt-1 mb-4">
        {props.abstract}
      </p>
    </div>
  );
}

export default Story;
