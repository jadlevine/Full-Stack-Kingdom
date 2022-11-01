import axios from 'axios'
import React from 'react'

const BASE_URL = '/api'
const AttractionCard = ({attraction}) => {

  //We are here
// const addToList=async(e)=>{
//   e.preventDefault()
//   const newAttraction=await axios.put(`${BASE_URL}/schedule`)


// }



  return (
  <div className="card">
    <h1>Name: {attraction.name}</h1>
    <h2>Height Restriction: {attraction.heightRestriction}</h2>
    <h2>Description: {attraction.description}</h2>
    <h2>Rating: {attraction.rating}</h2>
    <h2>Current Wait Time: {attraction.waitTime}</h2>
    <div className="button-container">
    <button>Add To List</button>
    <button>See Attraction Details</button>
    </div>
  
  </div>
)}

export default AttractionCard
