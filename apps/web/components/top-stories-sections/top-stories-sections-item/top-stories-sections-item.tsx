import './top-stories-sections-item.module.css';

/* eslint-disable-next-line */
export interface TopStoriesSectionsItemProps {
  section: string;
  selected: boolean;
}

export function TopStoriesSectionsItem(props: TopStoriesSectionsItemProps) {
  if (!props.selected)
    return (
      <li className="leading-snug flex-none text-gray-900 py-1 mx-1">
        <a href={`?section=${props.section}`} className="underline">{props.section}</a>
      </li>
    );
  return (
    <li className="leading-snug flex-none bg-gray-700 text-gray-100 italic py-1 px-3 rounded-sm">
      {props.section}
    </li>
  );
}

export default TopStoriesSectionsItem;
