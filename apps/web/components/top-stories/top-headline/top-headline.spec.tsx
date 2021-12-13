import { render } from '@testing-library/react';

import TopHeadline from './top-headline';

describe('TopHeadline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopHeadline />);
    expect(baseElement).toBeTruthy();
  });
});
