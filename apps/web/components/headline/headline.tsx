import Link from 'next/link';
import './headline.module.css';

/* eslint-disable-next-line */
export interface HeadlineProps {}

export function Headline(props: HeadlineProps) {
  return (
    <div>
      <Link href="news" passHref>
        <a className="font-medium text-2xl text-gray-700">Title</a>
      </Link>
      <p className="font-serif text-sm text-gray-500 mt-1 mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        laudantium autem tempore assumenda dolor dicta laborum, tempora quod
        commodi in impedit, at provident suscipit est voluptatum ipsam repellat
        ad magnam.
      </p>
    </div>
  );
}

export default Headline;
