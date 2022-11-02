import axios from 'axios'
import { useState } from 'react'

const BASE_URL = '/api'

const Schedule = (props) => {
  const initialState = {
    date: '',
    timeBudget: '',
    notes: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [scheduleExists, setScheduleExists] = useState(false)
  // const [schedule,setSchedule]=useState({})

  const handleChange = (e) => {
    // console.log(e)
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(`${BASE_URL}/schedule`, formState)
    console.log(response)
    props.setSchedule(response.data)
    setFormState(initialState)
    setScheduleExists(true)
  }

  const deleteSchedule = async (e) => {
    e.preventDefault()
    const response = await axios.delete(
      `${BASE_URL}/schedule/${props.schedule._id}`
    )
    props.setSchedule(initialState)
    setScheduleExists(false)
  }
  if (scheduleExists) {
    return (
      <div className="schedule-text">
        <div className="section-title">SCHEDULE </div>
        <div>Date: {props.schedule.date}</div>
        <div>Notes: {props.schedule.notes}</div>
        <br />
        <div className="attraction-list">
          <div className="attraction-title">Scheduled Attractions </div>
          {props.schedule?.attractions?.map((attraction) => (
            <p>{attraction.name}</p>
          ))}
        </div>
        <button onClick={deleteSchedule}>Delete Schedule</button>
      </div>
    )
  } else {
    return (
      <div className="schedule-text section-title">
        {' '}
        CREATE A SCHEDULE
        <form className="form" onSubmit={handleSubmit}>
          <label className="label dateField" htmlFor="date">
            Date:{' '}
          </label>
          <input
            className="input"
            type="text"
            id="date"
            placeholder="MM/DD/YY (Required)"
            cols="30"
            onChange={handleChange}
            value={formState.date}
            required
          />
          <label className="label notesField" htmlFor="notes">
            Schedule Notes:
          </label>
          <textarea
            className=" notesField"
            id="notes"
            placeholder="Add Notes Here (Optional)"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formState.notes}
          ></textarea>
          <button className="submit-button" type="submit">
            Create Schedule
          </button>
        </form>
      </div>
    )
  }
}

export default Schedule
