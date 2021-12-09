import './top-stories-sections-item.module.css';

/* eslint-disable-next-line */
export interface TopStoriesSectionsItemProps {
  section: string;
  selected: boolean;
}

export function TopStoriesSectionsItem(props: TopStoriesSectionsItemProps) {
  if (!props.selected)
    return (
      <li className="leading-tight flex-none text-gray-600 py-2 mx-1">
        {props.section}
      </li>
    );
  return (
    <li className="leading-tight flex-none bg-indigo-50 text-indigo-900 py-2 px-5 rounded-full">
      {props.section}
    </li>
  );
}

export default TopStoriesSectionsItem;
