import AttractionCard from './AttractionCard'
import axios from 'axios'
const BASE_URL = '/api'
import { useState } from 'react'

const AttractionsList = () => {
  const [attractions, setAttractions] = useState([])

  //axios call to grab attractions
  const getAllAttractions = async () => {
    const response = await axios.get(`${BASE_URL}/attractions`)
    setAttractions(response.data)
    console.log(response)
  }

  getAllAttractions()

  return (
    <div>
      <div className="container">
        {attractions.map((attraction) => (
          <AttractionCard key={attraction._id} attraction={attraction} />
        ))}
      </div>
    </div>
  )
}

export default AttractionsList
