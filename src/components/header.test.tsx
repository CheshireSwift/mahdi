import * as React from 'react';
import { render } from 'enzyme';

import Header from './header';

describe('the header', () => {
  it('matches the snapshot', () => {
    expect(render(<Header siteTitle="Title Goes Here" />)).toMatchSnapshot();
  });
});
