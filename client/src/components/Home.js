import Schedule from './Schedule'
import AttractionsList from './AttractionsList'

const Home = () => {
  return (
    <div>
      <div id="schedule">
        <Schedule />
      </div>
      <div id="attractionList">
        <AttractionsList />
      </div>
    </div>
  )
}

export default Home
