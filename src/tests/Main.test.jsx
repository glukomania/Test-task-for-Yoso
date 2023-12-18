import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Main from '../Main';

jest.mock('../utils/localStorageService', () => ({
  getAllUsers: jest.fn().mockReturnValue([]),
}));
test('renders Table component', () => {
  const { getByText } = render(<Main />);
  const tableTitle = getByText('Employee');
  expect(tableTitle).toBeInTheDocument();
});

test('opens AddUserModal when the "+" icon is clicked', () => {
  const { getByText, container } = render(<Main />)
  const addUserModalIcon = container.getElementsByClassName('table-title__menuIcon')[0]
  fireEvent.click(addUserModalIcon)

  const addUserModal = getByText("Name")
  expect(addUserModal).toBeInTheDocument()
});