import { render } from '@testing-library/react';

import TopStories from './top-stories';

describe('TopStories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopStories />);
    expect(baseElement).toBeTruthy();
  });
});
