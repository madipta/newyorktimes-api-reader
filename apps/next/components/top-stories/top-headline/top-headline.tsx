import { ITopStoriesResult } from '@base/dtos';
import Image from 'next/image';

export interface TopHeadlineProps {
  data: ITopStoriesResult;
}

export function TopHeadline(props: TopHeadlineProps) {
  const { url, title, abstract, byline, multimedia } = props.data;
  const image = multimedia.find((val) => val.type === 'image');
  return (
    <div className="col-span-12 md:col-span-6 p-4 md:px-10 md:border-l md:border-r md:border-gray-200 mb-8">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="leading-none font-black text-xl text-gray-800 cursor-pointer"
      >
        {title}
      </a>
      <p className="font-sans text-sm text-gray-500 mb-3">{abstract}</p>
      {image && (
        <Image
          src={image.url}
          alt={image.caption}
          width={image.width}
          height={image.height}
          layout="responsive"
        ></Image>
      )}
      <p className="leading-none font-sans text-xs text-right text-gray-400 mt-1">
        {byline}
      </p>
    </div>
  );
}

export default TopHeadline;
