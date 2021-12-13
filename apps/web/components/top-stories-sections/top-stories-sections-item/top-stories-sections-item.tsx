export interface TopStoriesSectionsItemProps {
  section: string;
  selected: boolean;
}

export function TopStoriesSectionsItem(props: TopStoriesSectionsItemProps) {
  if (!props.selected)
    return (
      <li className="flex-none mx-1">
        <a href={`?section=${props.section}`} className="underline">
          {props.section}
        </a>
      </li>
    );
  return <li className="flex-none text-red-800 mx-1">{props.section}</li>;
}

export default TopStoriesSectionsItem;
