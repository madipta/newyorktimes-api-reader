import TopStoriesSectionsItem from './top-stories-sections-item/top-stories-sections-item';

export interface TopStoriesSectionsProps {
  sections: string[];
  selected: string;
}

export function TopStoriesSections(props: TopStoriesSectionsProps) {
  return (
    <div className="container font-semibold font-sans text-xs text-black py-8 mx-auto">
      <ul className="flex flex-wrap gap-x-3 gap-y-1 justify-center capitalize px-4 sm:px-8 md:px-10">
        {props.sections.map((section) => (
          <TopStoriesSectionsItem
            key={section}
            section={section}
            selected={section === props.selected}
          ></TopStoriesSectionsItem>
        ))}
      </ul>
    </div>
  );
}

export default TopStoriesSections;
