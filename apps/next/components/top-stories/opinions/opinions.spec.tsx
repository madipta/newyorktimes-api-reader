import { render } from '@testing-library/react';

import Opinions from './opinions';

describe('Opinions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Opinions />);
    expect(baseElement).toBeTruthy();
  });
});
