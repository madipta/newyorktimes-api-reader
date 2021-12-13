import { ITopStoriesResult } from '@base/dtos';
import Image from 'next/image';

export interface MainHeadlineProps {
  data: ITopStoriesResult[];
}

export function MainHeadline(props: MainHeadlineProps) {
  const { data } = props;
  return (
    <>
      <div className="col-span-12 md:col-span-3 p-4 md:pl-0">
        {data &&
          data.map((data) => {
            const { url, title, byline, multimedia } = data;
            const image = multimedia.find((val) => val.type === 'image');
            return (
              <div key={data.url} className="mb-8">
                <a
                  href={data.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-xl text-gray-800 cursor-pointer"
                >
                  {data.title}
                </a>
                <p className="font-sans text-sm text-gray-500 mt-1 mb-2">
                  {data.abstract}
                </p>
                {image && (
                  <Image
                    src={image.url}
                    alt={image.caption}
                    width={image.width}
                    height={image.height}
                  ></Image>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default MainHeadline;
