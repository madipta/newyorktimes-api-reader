import { ITopStoriesResult, TOP_STORIES_SECTIONS } from '@base/dtos';
import axios from 'axios';
import Image from 'next/image';
import TopStoriesSections from '../../components/top-stories-sections/top-stories-sections';

export interface SectionProps {
  id: string;
  data: ITopStoriesResult[];
  topStoriesSections: string[];
}

export function Section(props: SectionProps) {
  const { data } = props;
  return (
    <>
      <TopStoriesSections
        sections={props.topStoriesSections}
        selected={props.id}
      ></TopStoriesSections>
      <div className="container grid grid-cols-12 md:gap-x-14 px-4 mt-10 mx-auto">
        {data &&
          data.map((data) => {
            const { abstract, byline, multimedia, title, url } = data;
            if (!url || !title || !abstract) {
              return;
            }
            const image = multimedia?.find((val) => val.type === 'image');
            return (
              <div
                key={url}
                className="col-span-12 md:col-span-6 grid grid-cols-12 mb-12"
              >
                <div className="col-span-12 md:col-span-8">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="leading-snug font-semibold text-lg text-gray-800 cursor-pointer"
                  >
                    {title}
                  </a>
                  <p className="text-sm text-gray-600 mt-2">{abstract}</p>
                </div>
                {image && (
                  <div className="col-span-12 md:col-span-4 md:pl-4 mt-4 md:mt-0">
                    <div className="md:max-h-48 overflow-hidden">
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
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const topStoriesSections = TOP_STORIES_SECTIONS;
  const topStoriesUrl = `${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}/api/top-stories?section=${context.params.id}`;
  const response = await axios.get(topStoriesUrl, {
    timeout: 5000,
    validateStatus: () => {
      return true;
    },
  });
  const data = response.data?.result?.results || [];
  return {
    props: {
      id: context.params.id,
      topStoriesSections,
      data,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const paths = [];
  TOP_STORIES_SECTIONS.forEach((section) =>
    paths.push({ params: { id: section } })
  );
  return {
    paths,
    fallback: false,
  };
}

export default Section;
