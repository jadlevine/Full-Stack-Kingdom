import axios from 'axios'
import React from 'react'

const BASE_URL = '/api'
const AttractionCard = ({ setSchedule, attraction, scheduleId }) => {
  //We are here
  const addToList = async (e) => {
    e.preventDefault()

    const validateSchedule = async () => {
      if (scheduleId === undefined) {
        alert('Create your scheudle first, then add attractions')
      } else {
        const newAttraction = await axios.put(
          `${BASE_URL}/schedule/${scheduleId}`,
          attraction
        )
        const updateList = await axios.get(`${BASE_URL}/schedule/${scheduleId}`)
        console.log(updateList)
        setSchedule(updateList.data)
      }
    }
    validateSchedule()
  }

  return (
    <div className="card">
      <div className="attraction-name">{attraction.name}</div>
      <div className="attraction-description">{attraction.description}</div>
      <div className="attraction-details">
        <div>Height Restriction: {attraction.heightRestriction} in</div>
        <div>
          Rating:<br></br>{' '}
          <span className="details-large">{attraction.rating}</span>
        </div>
        <div>Current Wait Time:</div>
        <div>
          <span className="details-large">{attraction.waitTime} min</span>
        </div>
      </div>
      <div className="button-container">
        <button onClick={addToList}>Add To Schedule</button>
      </div>
    </div>
  )
}

export default AttractionCard
