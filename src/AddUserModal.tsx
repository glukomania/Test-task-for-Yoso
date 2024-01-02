import * as React from 'react'
import {useState, useEffect} from 'react'
import {addUser} from './utils/localStorageService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons';


type User = {
  id?: string
  name: string,
  email: string,
  position: string,
  workingTime: string
}
const AddUserModal = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('Fronend Developer')
  const [workingTime, setWorkingTime] = useState('Full-time')
  const [isOk, setIsOk] = useState(true)


  const verifyData = (newUser: User) => {

    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!namePattern.test(newUser.name)){
      return false
    }
    if (!emailPattern.test(newUser.email)){
      return false
    }

    return true
  }


  const handleSubmit = () => {

      let newUser: User = {
        name, email, position, workingTime
      }

      if (props.user) {
        newUser.id = props.user.id
      }

      if (verifyData(newUser)) {
        props.handleSubmit(newUser)
      } else {
        setIsOk(false)
      }
  }

  useEffect(() => {
    if (props.user) {
      setName(props.user.name)
      setEmail(props.user.email)
      setPosition(props.user.position)
      setWorkingTime(props.user.workingTime)
  
    }

  }, [props.user])

  return (
    <div className="modal">
      <div className="modalContentStyle">
        <form onSubmit={handleSubmit}>
          <div className='addUser-title'>
            <div className="addUser-value">Add new employee:</div>
            <div className="addUser-close" onClick={props.handleClose}>
              <FontAwesomeIcon icon={faClose} style={{ height: "20px", color: '#ccc' }}/>
            </div>
          </div>
          <div className='field-container'>
            <div className="field">
              <label className='label' htmlFor="name">Name:</label>
              <input
                className="inputText"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="field">
              <label className='label' htmlFor="name">Email:</label>
              <input
                className="inputText"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field">
              <label className='label' htmlFor="position">Position:</label>
              <select
                className="inputText"
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

            <div className="field">
              <label className='label' htmlFor="position">Working Time:</label>
              <select
                className="inputText"
                id="workingTime"
                name="workingTime"
                value={workingTime}
                onChange={(e) => setWorkingTime(e.target.value)}
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-Time">Part-Time</option>
              </select>
            </div>
          </div>
          {!isOk && <div className='warning'>Check your inputs</div>}
          <div className='buttons'>
            <div className="button" onClick={handleSubmit}>Save</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUserModal