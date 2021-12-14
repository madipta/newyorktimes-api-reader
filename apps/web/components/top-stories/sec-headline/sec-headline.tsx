import { ITopStoriesResult } from '@base/dtos';

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
              <div key={data.url} className="mb-10">
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-none font-medium text-xl text-gray-800 cursor-pointer"
                >
                  {data.title}
                </a>
                <p className="font-sans text-sm text-gray-500">
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
