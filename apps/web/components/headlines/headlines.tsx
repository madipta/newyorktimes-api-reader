import { headlineDto } from './headline-dto';
import Headline from './headline/headline';
import './headlines.module.css';

export interface HeadlinesProps {
  data: headlineDto[]
}

export function Headlines(props: HeadlinesProps) {
  return (
    <>
      <div className="col-span-12 md:col-span-3 px-4 md:pl-0">
        <Headline
          url="news"
          title="title"
          abstract="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
laudantium autem tempore assumenda dolor dicta laborum, tempora quod
commodi in impedit, at provident suscipit est voluptatum ipsam repellat
ad magnam.
"
        ></Headline>
      </div>
      <div className="col-span-12 md:col-span-6 px-4 md:border-l md:border-r md:border-gray-200">
        <Headline
          url="news"
          title="title"
          abstract="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
laudantium autem tempore assumenda dolor dicta laborum, tempora quod
commodi in impedit, at provident suscipit est voluptatum ipsam repellat
ad magnam.
"
        ></Headline>
      </div>
      <div className="col-span-12 md:col-span-3 px-4 md:pr-0">
        <Headline
          url="news"
          title="title"
          abstract="
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
laudantium autem tempore assumenda dolor dicta laborum, tempora quod
commodi in impedit, at provident suscipit est voluptatum ipsam repellat
ad magnam.
"
        ></Headline>
      </div>
    </>
  );
}

export default Headlines;
