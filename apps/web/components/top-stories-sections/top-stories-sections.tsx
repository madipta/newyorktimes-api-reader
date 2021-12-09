import './top-stories-sections.module.css';
import TopStoriesSectionsItem from './top-stories-sections-item/top-stories-sections-item';

/* eslint-disable-next-line */
export interface TopStoriesSectionsProps {
  sections: string[];
  selected: string;
}

export function TopStoriesSections(props: TopStoriesSectionsProps) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 justify-center capitalize font-sans text-sm px-4 sm:px-8 md:px-10 py-12">
      {props.sections.map((section) => (
        <TopStoriesSectionsItem
          key={section}
          section={section}
          selected={section === props.selected}
        ></TopStoriesSectionsItem>
      ))}
    </ul>
  );
}

export default TopStoriesSections;
