import * as React from 'react'
import {useState, useEffect} from 'react'

const UserFormModal = (props) => {

  return (
    <div className="modal" onClick={props.handleClose}>
      <div className="modalContentStyle">
        <div className="userData">
          <div className='userData-title'>
            <div className="user-value">{props.selectedUser.name}</div>
          </div>
          <div className='userData-data'>
            <div className='userData-data__row'>
              <div className="user-label">Email: </div>
              <div className="user-value">{props.selectedUser.email}</div>
            </div>
            <div className='userData-data__row'>
              <div className="user-label">Position: </div>
              <div className="user-value">{props.selectedUser.position}</div>
            </div>
            <div className='userData-data__row'>
              <div className="user-label">Working Time: </div>
              <div className="user-value">{props.selectedUser.workingTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserFormModal