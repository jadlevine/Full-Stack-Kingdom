import Schedule from './Schedule'
import AttractionsList from './AttractionsList'
import { useState } from 'react'



const Home = () => {
  const [schedule,setSchedule]=useState({})


  return (
    <div>
      <div id="schedule">
        <Schedule schedule={schedule} setSchedule={setSchedule}/>
      </div>
      <div id="attractionList">
        <AttractionsList setSchedule={setSchedule} schedule={schedule}/>
      </div>
    </div>
  )
}

export default Home
