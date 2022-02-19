import React from "react";
import gnome from "../assets/Gnome-removebg-preview.png";
import dragonborn from '../assets/dragonborn-removebg-preview.png'
import dwarf from '../assets/dwarf-removebg-preview.png'
import elf from '../assets/elf-removebg-preview.png'
import halfelf from '../assets/halfelf-removebg-preview.png'
import halforc from '../assets/Half-Orc-removebg-preview.png'
import halfling from '../assets/Halfling.webp'
import human from '../assets/Human.webp'
import tiefling from '../assets/Tiefling-removebg-preview.png'

function RacesDisplay() {
  const [raceDisplay, updateRaceDisplay] = React.useState([])
   React.useEffect(() => {
  async function fetchRace() {
     const resp = await fetch('https://www.dnd5eapi.co/api/races/')
     const raceDisplay = await resp.json()
     updateRaceDisplay(raceDisplay)
  }
  fetchRace()}, [])
   function displayImage(raceDisplay) {
      if (raceDisplay.index === "gnome") {
         return gnome;
      }
      if (raceDisplay.index === "dragonborn") {
         return dragonborn;
      }
      if (raceDisplay.index === "elf") {
         return elf;
      }
      if (raceDisplay.index === "dwarf") {
         return dwarf;
      }
      if (raceDisplay.index === "halfelf") {
         return halfelf;
      }
      if (raceDisplay.index === "halforc") {
         return halforc;
      }
      if (raceDisplay.index === "halfling") {
         return halfling;
      }
      if (raceDisplay.index === "human") {
         return human;
      }
      if (raceDisplay.index === "tiefling") {
         return tiefling;
      }
    
   }
  return (
    <>
      <h1>Races </h1>
        {raceDisplay.length !== 0 ? (
           raceDisplay.results.map((elem) => (
              <div key={elem.index}>
                 <img src={displayImage(elem)}></img>
                 <p>{elem.name}</p>
              </div>
           ))
        ) : (
           <p>... loading</p>
        )}
    </>
  );
}

export default RacesDisplay;
