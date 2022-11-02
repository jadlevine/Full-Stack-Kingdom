import AttractionCard from './AttractionCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = '/api'
const AttractionsList = (props) => {
  const [attractions, setAttractions] = useState([])

  //axios call to grab attractions
  const getAllAttractions = async () => {
    const response = await axios.get(`${BASE_URL}/attractions`)
    setAttractions(response.data)
    // console.log(response)
  }

  useEffect(() => {
    getAllAttractions()
  }, [])
  return (
    <div>
      <div className="container">
        {attractions.map((attraction) => (
          <AttractionCard
            key={attraction._id}
            attraction={attraction}
            setSchedule={props.setSchedule}
            scheduleId={props.schedule._id}
          />
        ))}
      </div>
    </div>
  )
}

export default AttractionsList
