import * as React from 'react'
import {useState, useEffect} from 'react'
import Table from './Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UserDetailsModal from './UserDetailsModal';
import AddUserModal from './AddUserModal';
import {getAllUsers, addUser, updateUser, deleteUser} from './utils/localStorageService'


const Main = () => {

  const [data, setData] = useState(null)
  const [isUserModalOpen, setIsUserModalOpen] = useState(false)
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  

  const handleCloseUserForm = () => {
    setSelectedUser(null)
    setIsUserModalOpen(false)

  }

  const handleCloseAddUserModal = () => {
    setIsAddUserModalOpen(false)
  }

  const handleEdit = () => {
    setIsUserModalOpen(false)
    setIsAddUserModalOpen(true)
  }

  const handleSubmit = (newUser) => {
    data[newUser.id] ? updateUser(newUser) : addUser(newUser)
    
    const updatedData = getAllUsers()
    setData(updatedData)
    
    handleCloseAddUserModal()
  }

  const handleDelete = () => {
    deleteUser(selectedUser.id)
    const updatedData = getAllUsers()
    setData(updatedData)
    handleCloseUserForm()
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
        <Table setSelectedUser={setSelectedUser} getAllUsers={getAllUsers} data={data} setData={setData} />
      </div>
      <div>
        {isUserModalOpen && <UserDetailsModal handleEdit={handleEdit} handleClose={handleCloseUserForm} selectedUser={selectedUser}  handleDelete={handleDelete}/>}
      </div>
      <div>
        {isAddUserModalOpen && <AddUserModal user={selectedUser} handleClose={handleCloseAddUserModal} handleSubmit={handleSubmit} />}
      </div>
    </div>
  )
}

export default Main