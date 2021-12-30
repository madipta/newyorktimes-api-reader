import { render } from '@testing-library/react';

import TopStoriesSectionsItem from './top-stories-sections-item';

describe('TopStoriesSectionsItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopStoriesSectionsItem />);
    expect(baseElement).toBeTruthy();
  });
});
