import * as React from 'react'
import {useState, useEffect} from 'react'
import {addUser} from './utils/localStorageService'

const AddUserModal = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('Fronend Developer')
  const [workingTime, setWorkingTime] = useState('Full-time')


  const verifyData = () => {
    console.log('here should be fields verification')
    return true
  }
  const handleSubmit = () => {
    if (verifyData()) {
      const newUser = {
        name, email, position, workingTime
      }

      addUser(newUser)
      const updatedData = props.getAllUsers()
      console.log('updatedData', updatedData)
      props.setData(updatedData)
      
      props.handleClose()
    }
  }

  return (
    <div className="modal">
      <div className="modalContentStyle">
        <form onSubmit={handleSubmit}>
          <div className='addUser-title'>
            <div className="addUser-value">Add new employee:</div>
          </div>
          <div className="fields-container">
            <label className='label' htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="fields-container">
            <label className='label' htmlFor="name">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="fields-container">
            <label className='label' htmlFor="position">Position:</label>
            <select
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="Fronend Developer">Fronend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Tester">Tester</option>
              <option value="System Architect">System Architect</option>
            </select>
          </div>

          <div className="fields-container">
            <label className='label' htmlFor="position">Working Time:</label>
            <select
              id="workingTime"
              name="workingTime"
              value={workingTime}
              onChange={(e) => setWorkingTime(e.target.value)}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          <div className='buttons'>
            <div className="button" onClick={handleSubmit}>Save</div>
            <div className="button" onClick={props.handleClose}>close</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUserModal