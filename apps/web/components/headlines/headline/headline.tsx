import { headlineDto } from '../headline-dto';
import './headline.module.css';

export type HeadlineProps = headlineDto;

export function Headline(props: HeadlineProps) {
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

export default Headline;
