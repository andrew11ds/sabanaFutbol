import { render, screen } from '@testing-library/react';

import Ui from './ui';
test('renders Title', () => {
  render(<Ui />);
  expect(
    screen.getByRole('heading', { name: /sabana futbol/i })
  ).toBeTruthy();
 });