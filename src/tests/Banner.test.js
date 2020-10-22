import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../components/banner/banner';

test('renders banner text', () => {
  const { getByText } = render(<Banner/>);
  const introText = getByText(/Bringing your nearest Healthcare facilities closer to you. Be it a Pharmacy or Hospital./i);
  expect(introText).toBeInTheDocument();
});
