import * as React from 'react'
import {useState, useEffect} from 'react'
import Table from './Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UserFormModal from './UserForm';

const handleIconPress = () => {
  console.log('press add')
}

const Main = () => {

  const [isUserFormOpen, setIsUserFormOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  

  const handleCloseModal = () => {
    setIsUserFormOpen(false)
  }

  const handleOpenModal = (user) => {
    setIsUserFormOpen(true)
  }

  useEffect(() => {
  if (selectedUser) {
    setIsUserFormOpen(true)
  }
  }, [selectedUser])

  return (
    <div className="wrapper">
      <div className="table">
        <div className="table-title">
          <div className="table-title__text">Employee</div>
          <div className="table-title__menuIcon" onClick={handleIconPress}>
              <FontAwesomeIcon icon={faPlus} style={{ height: "20px" }}/>
          </div>
        </div>
        <div>
            {<Table setSelectedUser={setSelectedUser}/>}
        </div>
      </div>
      <div>
        {isUserFormOpen && <UserFormModal handleClose={handleCloseModal} selectedUser={selectedUser}/>}
      </div>
    </div>
  )
}

export default Main