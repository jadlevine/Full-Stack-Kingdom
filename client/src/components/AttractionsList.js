import AttractionCard from './AttractionCard'
import axios from 'axios'
const BASE_URL = '/api'

const AttractionsList = () => {
  //axios call to grab attractions
  const getAllAttractions = async () => {
    const response = await axios.get(`${BASE_URL}/attractions`)
    console.log(response)
  }

  getAllAttractions()

  return (
    <div>
      {/* map through attractions array and render for each AttractionsList */}
      <AttractionCard />
    </div>
  )
}

export default AttractionsList
