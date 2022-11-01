import axios from 'axios'
import { useState } from "react"

const BASE_URL = '/api'

const Schedule = (props) => {
const initialState={
  date:'',
  timeBudget:'',
  notes:''
}
const [formState, setFormState]=useState(initialState)
// const [schedule,setSchedule]=useState({})

const handleChange=(e)=>{
  console.log(e)
  setFormState({ ...formState, [e.target.id]: e.target.value })
}

const handleSubmit= async (e)=>{
  e.preventDefault()
  const response=await axios.post(`${BASE_URL}/schedule`, formState)
  console.log(response)
  props.setSchedule(response.data)

  setFormState(initialState)
}



  return (
  <div>
  <div>No Schedule Yet</div>
<form className='form' onSubmit={handleSubmit}>
    <label className="label dateField" htmlFor="date">Date: </label>
    <input className="input" type="text" id="date" cols="30" onChange={handleChange} value={formState.date} />
    <label className="label timeBudgetField" htmlFor="timeBudget">Time Budget: </label>
    <input className="input" type="text" id="timeBudget" cols="30" onChange={handleChange} value={formState.timeBudget} />
    <label className="label notesField" htmlFor="notes">Schedule Notes</label>
    <textarea className=" notesField" id="notes" cols="30" rows="10" onChange={handleChange} value={formState.summary}></textarea>
    <button className="submit-button" type="submit">Create Schedule</button>
</form>
 <div>Date:{props.schedule.date}</div>
 <div>Time Budget:{props.schedule.timeBudget}</div>
 <div>Notes: {props.schedule.notes}</div>

<ul>List Of Attractions:
{props.schedule?.attractions?.map((attraction)=>(
  <li>{attraction.name}</li>
))}
</ul>


  </div>
)}

export default Schedule
