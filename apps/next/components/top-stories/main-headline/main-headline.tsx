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
            const { url, title, abstract, byline, multimedia } = data;
            const image = multimedia.find((val) => val.type === 'image');
            return (
              <div key={url} className="mb-10">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-none font-medium text-xl text-gray-800 cursor-pointer"
                >
                  {title}
                </a>
                <p className="font-sans text-sm text-gray-500 mb-3">
                  {abstract}
                </p>
                {image && (
                  <>
                    <Image
                      src={image.url}
                      alt={image.caption}
                      width={image.width}
                      height={image.height}
                      layout="responsive"
                    ></Image>
                    <p className="leading-none font-sans text-xs text-right text-gray-400 mt-1">
                      {byline}
                    </p>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default MainHeadline;
