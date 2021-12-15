import Link from 'next/link';

export interface TopStoriesSectionsItemProps {
  section: string;
  selected: boolean;
}

export function TopStoriesSectionsItem(props: TopStoriesSectionsItemProps) {
  if (!props.selected)
    return (
      <li className="flex-none mx-1">
        <Link href={`/section/${props.section}`} passHref>
          <a className="underline">{props.section}</a>
        </Link>
      </li>
    );
  return <li className="flex-none text-red-800 mx-1">{props.section}</li>;
}

export default TopStoriesSectionsItem;
