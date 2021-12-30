import { render } from '@testing-library/react';

import Story from './story';

describe('Story', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Story />);
    expect(baseElement).toBeTruthy();
  });
});
