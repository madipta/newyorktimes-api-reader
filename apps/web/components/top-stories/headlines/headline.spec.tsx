import { render } from '@testing-library/react';

import Headlines from './headlines';

describe('Headlines', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Headlines />);
    expect(baseElement).toBeTruthy();
  });
});
