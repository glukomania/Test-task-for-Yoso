import React, { useEffect } from 'react'
import Main from './Main'
import { saveTableData } from './utils/localStorageService'

const mockInitialData = {
  1: {
    id: 1,
    name: 'John Brown',
    email: 'j.brown@company.com',
    position: 'Frontend Developer',
    workingTime: 'full-time',
  },
  2: {
    id: 2,
    name: 'Jaane Smith',
    email: 'j.smith@company.com',
    position: 'Backend Developer',
    workingTime: 'full-time',
  },
  3: {
    id: 3,
    name: 'Bob Darly',
    email: 'b.darly@company.com',
    position: 'Tester',
    workingTime: 'full-time',
  },
  4: {
    id: 4,
    name: 'Anna Katz',
    email: 'a.katz@company.com',
    position: 'System Architect',
    workingTime: 'part-time',
  },
}

const App = () => {
  useEffect(() => {
    saveTableData(mockInitialData)
  })

  return (
    <div>
      <Main />
    </div>
  )
}
export default App
