import { render } from '@testing-library/react';

import TopHeader from './top-header';

describe('TopHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopHeader />);
    expect(baseElement).toBeTruthy();
  });
});
