import HeadlineDto from './headline-dto';
import Headline from './headline/headline';
import './headlines.module.css';

export interface HeadlinesProps {
  data: HeadlineDto[];
}

export function Headlines(props: HeadlinesProps) {
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
                <Headline
                  url={data.url}
                  title={data.title}
                  abstract={data.abstract}
                ></Headline>
              </div>
            );
          }
          if (colIndex === 1) {
            return (
              <div
                key={data.url}
                className="col-span-12 md:col-span-6 p-4 md:border-l md:border-r md:border-gray-200"
              >
                <Headline
                  url={data.url}
                  title={data.title}
                  abstract={data.abstract}
                ></Headline>
              </div>
            );
          }
          return (
            <div
              key={data.url}
              className="col-span-12 md:col-span-3 p-4 md:pr-0"
            >
              <Headline
                url={data.url}
                title={data.title}
                abstract={data.abstract}
              ></Headline>
            </div>
          );
        })}
    </>
  );
}

export default Headlines;
