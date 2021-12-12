import StoryDto from './story-dto';
import './story.module.css';

export type StoryProps = StoryDto;

export function Story(props: StoryProps) {
  return (
    <div>
      <a
        href={props.url}
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
