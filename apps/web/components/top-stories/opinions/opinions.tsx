import { ITopStoriesResult } from '@base/dtos';
import Image from 'next/image';

export interface OpinionsProps {
  data: ITopStoriesResult[];
}

export function Opinions(props: OpinionsProps) {
  const { data } = props;
  return (
    <div className="col-span-12 md:col-span-3 pt-8 md:pt-0 px-4 md:pr-0">
      <h4 className="tracking-wider uppercase font-bold mb-4">Opinions</h4>
      {data &&
        data.map((data) => {
          const { abstract, byline, multimedia, title, url } = data;
          const image = multimedia.find((val) => val.type === 'image');
          return (
            <div key={data.url} className="text-sm mb-10">
              <p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-none font-semibold text-gray-700 cursor-pointer"
                >
                  {title}
                </a>
              </p>
              <p className="text-gray-400">{abstract}</p>
              {image && (
                <>
                  <div className="max-h-52 overflow-hidden mt-2">
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
          );
        })}
    </div>
  );
}

export default Opinions;
