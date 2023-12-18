import * as React from 'react'
import {useEffect, useState} from 'react'

type User = { 
  id: number, 
  name: string,
  email: string, 
  position: string, 
  workingTime: string 
}

const Table = (props) => {



  const hanleRowClick = (user) => {
    props.setSelectedUser(user)
  }
 
  const renderRow = (data) => {
    return data.map((user: User) => (
      <tr key={user.id} onClick={() => hanleRowClick(user)}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.position}</td>
        <td>{user.workingTime}</td>
      </tr>
    ))
  }

  useEffect(() => {
    const allUsersData = props.getAllUsers()
    props.setData(allUsersData)
  }, [])

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
          {props.data && renderRow(props.data)}
        </tbody>
      </table>
    )
  )
}


export default Table

