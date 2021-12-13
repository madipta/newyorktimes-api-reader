import { ITopStoriesResult } from '@base/dtos';
import Image from 'next/image';

export interface TopHeadlineProps {
  data: ITopStoriesResult;
}

export function TopHeadline(props: TopHeadlineProps) {
  const { url, title, abstract, byline, multimedia } = props.data;
  const image = multimedia.find((val) => val.type === 'image');
  return (
    <div className="col-span-12 md:col-span-6 p-4 md:border-l md:border-r md:border-gray-200">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="font-black text-xl text-gray-800 cursor-pointer"
      >
        {title}
      </a>
      <p className="font-sans text-sm text-gray-500 mt-1 mb-2">{abstract}</p>
      {image && (
        <Image
          src={image.url}
          alt={image.caption}
          width={image.width}
          height={image.height}
        ></Image>
      )}
      <p className="leading-none font-sans text-xs text-right text-gray-400 mb-4">
        {byline}
      </p>
    </div>
  );
}

export default TopHeadline;
