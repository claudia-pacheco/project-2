import React from "react"
import gnome from '../assets/Gnome-removebg-preview.png'

function RacesDisplay() {
   // const [race, updateRace] = React.useState(undefined)
   // const [raceImg, updateRaceImg]
   // async function fetchRace() {
   //    const resp = await fetch('https://www.dnd5eapi.co/api/races/')
   //    const race = await resp.json()
   //    updateRace(race)
   // }
   // fetchRace()
   return <>
   <h1>Races </h1>
   <div>
       <img src={gnome}></img>
       {/* <p>{race.name}</p> */}
   </div>
  
   </>
   
}

export default RacesDisplay