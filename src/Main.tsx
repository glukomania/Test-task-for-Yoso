import * as React from 'react'
import Table from './Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const handleIconPress = () => {
  console.log('press add')
}

const Main = () => {

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
            {<Table />}
          </div>
      </div>
    </div>
  )
}

export default Main