import axios from 'axios'
import React from 'react'

const BASE_URL = '/api'
const AttractionCard = ({ setSchedule, attraction, scheduleId }) => {
  //We are here
  const addToList = async (e) => {
    e.preventDefault()

    const newAttraction = await axios.put(
      `${BASE_URL}/schedule/${scheduleId}`,
      attraction
    )
    const updateList = await axios.get(`${BASE_URL}/schedule/${scheduleId}`)
    console.log(updateList)
    setSchedule(updateList.data)
  }

  return (
    <div className="card">
      <h1>Name: {attraction.name}</h1>
      <h2>Height Restriction: {attraction.heightRestriction}</h2>
      <h2>Description: {attraction.description}</h2>
      <h2>Rating: {attraction.rating}</h2>
      <h2>Current Wait Time: {attraction.waitTime}</h2>
      <div className="button-container">
        <button onClick={addToList}>Add To List</button>
      </div>
    </div>
  )
}

export default AttractionCard
