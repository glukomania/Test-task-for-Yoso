import * as React from 'react'

const Table = () => {

  const data = [
    { id: 1, name: 'John Brown', email: 'j.brown@company.com', position: 'Frontend Developer', workingTime:'full-time' },
    { id: 2, name: 'Jaane Smith', email: 'j.smith@company.com', position: 'Backend Developer', workingTime:'full-time' },
    { id: 3, name: 'Bob Darly', email: 'b.darly@company.com', position: 'Tester', workingTime:'full-time' },
    { id: 4, name: 'Anna Katz', email: 'a.katz@company.com', position: 'System Architect', workingTime:'part-time' },
  ];

  return (
    ( 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job position</th>
            <th>Working Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.position}</td>
              <td>{user.workingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};


export default Table

