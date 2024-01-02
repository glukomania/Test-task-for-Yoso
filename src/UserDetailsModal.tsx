import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';


const UserDetailsModal = (props) => {

  return (
    <div className="modal">
      <div className="modalContentStyle">
        <div className="userData">
          <div className='userData-title'>
            <div className="userData-value">{props.selectedUser.name}</div>
            <div className="addUser-close" onClick={props.handleClose}>
              <FontAwesomeIcon icon={faClose} style={{ height: "20px", color: '#ccc' }}/>
            </div>
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
        <div className="button" onClick={props.handleEdit}>Edit</div>
        <div className="deteleUser" onClick={props.handleDelete}>Delete this user</div>
      </div>
    </div>
  )
}

export default UserDetailsModal