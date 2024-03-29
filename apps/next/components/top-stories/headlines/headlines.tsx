import { ITopStoriesResult } from '@base/dtos';
import Image from 'next/image';

export interface HeadlineProps {
  data: ITopStoriesResult[];
}

export function Headlines(props: HeadlineProps) {
  const { data } = props;
  return (
    <div className="col-span-12 md:col-span-9 pt-8 px-4 md:pl-0 md:pr-10 md:border-r border-gray-200">
      {data &&
        data.map((data) => {
          const { abstract, byline, multimedia, title, url } = data;
          const image = multimedia.find((val) => val.type === 'image');
          return (
            <div key={url} className="grid grid-cols-12 gap-x-8 mb-10">
              <div className="col-span-7">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-none font-medium text-xl text-gray-800 cursor-pointer"
                >
                  {title}
                </a>
                <p className="text-sm text-gray-500 mt-2">{abstract}</p>
              </div>
              <div className="col-span-5">
                {image && (
                  <>
                    <div className="max-h-52 overflow-hidden">
                      <Image
                        src={image.url}
                        alt={image.caption}
                        width={image.width}
                        height={image.height}
                        layout="responsive"
                        className="object-cover"
                      ></Image>
                    </div>
                    <p className="leading-none font-sans text-xs text-right text-gray-400 mt-1">
                      {byline}
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Headlines;
