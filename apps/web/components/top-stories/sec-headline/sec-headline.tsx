import { ITopStoriesResult } from '@base/dtos';

/* eslint-disable-next-line */
export interface SecHeadlineProps {
  data: ITopStoriesResult[];
}

export function SecHeadline(props: SecHeadlineProps) {
  const { data } = props;
  return (
    <>
      <div className="col-span-12 md:col-span-3 p-4 md:pr-0">
        {data &&
          data.map((data) => {
            return (
              <div key={data.url}>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-xl text-gray-800 cursor-pointer"
                >
                  {data.title}
                </a>
                <p className="font-sans text-sm text-gray-500 mt-1 mb-8">
                  {data.abstract}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SecHeadline;
