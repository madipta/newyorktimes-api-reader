import { render } from '@testing-library/react';

import SecHeadline from './sec-headline';

describe('SecHeadline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecHeadline />);
    expect(baseElement).toBeTruthy();
  });
});
