import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Table from '../Table';

test('renders the table component', () => {
  const { getByText } = render(<Table getAllUsers={() => jest.fn()} setData={() => jest.fn()} />);
  
  const tableElement = getByText(/Name/i);
  expect(tableElement).toBeInTheDocument();
})

test('handles row click correctly', () => {
  const mockSetSelectedUser = jest.fn();
  const mockData = [
    { id: 1, name: 'John', email: 'john@company.com', position: 'Fronend Developer', workingTime: 'Full-time' },
  ];

  const { getByText } = render(<Table setSelectedUser={mockSetSelectedUser} data={mockData} getAllUsers={() => jest.fn()} setData={() => jest.fn()} />);

  fireEvent.click(getByText('John'));

  expect(mockSetSelectedUser).toHaveBeenCalledWith(mockData[0]);
});