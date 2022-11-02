import Schedule from './Schedule'
import AttractionsList from './AttractionsList'
import { useState } from 'react'

const Home = () => {
  const [schedule, setSchedule] = useState({})

  return (
    <div className="home-container">
      <div id="schedule">
        {/* <div className="section-title">SCHEDULE</div> */}
        <Schedule schedule={schedule} setSchedule={setSchedule} />
      </div>
      <div id="attractionList">
        <div className="section-title">ATTRACTIONS</div>
        <AttractionsList setSchedule={setSchedule} schedule={schedule} />
      </div>
    </div>
  )
}

export default Home
