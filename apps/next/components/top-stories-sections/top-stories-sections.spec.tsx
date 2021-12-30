import { render } from '@testing-library/react';

import TopStoriesSections from './top-stories-sections';

describe('TopStoriesSections', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopStoriesSections />);
    expect(baseElement).toBeTruthy();
  });
});
