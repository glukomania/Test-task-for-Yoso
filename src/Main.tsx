import * as React from 'react'
import {useState, useEffect} from 'react'
import Table from './Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UserDetailsModal from './UserDetailsModal';
import AddUserModal from './AddUserModal';
import {getAllUsers} from './utils/localStorageService'


const Main = () => {

  const [data, setData] = useState(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  

  const handleCloseUserForm = () => {
    setIsUserModalOpen(false)
  }

  const handleCloseAddUserModal = () => {
    setIsAddUserModalOpen(false)
  }

  useEffect(() => {
    if (selectedUser) {
      setIsUserModalOpen(true)
    }
  }, [selectedUser])

  return (
    <div className="wrapper">
      <div className="table">
        <div className="table-title">
          <div className="table-title__text">Employee</div>
          <div className="table-title__menuIcon" onClick={()=> setIsAddUserModalOpen(true)}>
              <FontAwesomeIcon icon={faPlus} style={{ height: "20px" }}/>
          </div>
        </div>
        <div>
            {<Table setSelectedUser={setSelectedUser} getAllUsers={getAllUsers} data={data} setData={setData} />}
        </div>
      </div>
      <div>
        {isUserModalOpen && <UserDetailsModal handleClose={handleCloseUserForm} selectedUser={selectedUser}/>}
      </div>
      <div>
        {isAddUserModalOpen && <AddUserModal handleClose={handleCloseAddUserModal} getAllUsers={getAllUsers} setData={setData} />}
      </div>
    </div>
  )
}

export default Main