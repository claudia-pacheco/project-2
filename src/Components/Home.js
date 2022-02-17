import React from "react"
import dragon from '../assets/wp4786826.png'
import diceImg from '../assets/dice3.png'

function Home() {
  const [classes, updateClasses] = React.useState(undefined)
  const [races, updateRaces] = React.useState(undefined)
  
  let [randomClass, updateRandomClass] = React.useState(undefined)
  let [randomRace, updateRandomRace] = React.useState(undefined)

  React.useEffect(() => {
    async function fetchClasses() {
      const resp = await fetch("https://www.dnd5eapi.co/api/classes")
      const classes = await resp.json()
      updateClasses(classes)
      generateCharacter(classes)
    }
    async function fetchRaces() {
      const respTwo = await fetch("https://www.dnd5eapi.co/api/races")
      const races = await respTwo.json()
      updateRaces(races)
      generateCharacter(races)
    }
    fetchClasses()
    fetchRaces()
  }, [])

  // console.log('1 this is races', races)
  // console.log('2 this is classes', classes)



  function generateCharacter() {
  console.log('3' , races.results)
  console.log('4', classes.results)

  randomClass = classes.results[Math.floor(Math.random() * classes.results.length)]
  updateRandomClass(randomClass)

  randomRace = races.results[Math.floor(Math.random() * races.results.length)]
  updateRandomRace(randomRace)

  console.log('5 this is a character', randomClass)
  console.log('6 this is a character', randomRace)
  console.log(`this is a character with race ${randomRace.name} and class ${randomClass.name}`)
    




  }
  return (
    <>
      <div className="headings">
        <h1>A Dungeons &amp; Dragons</h1>
        <h2>Character Builder</h2>
      </div>
      <div className="image">
        <img className="dragon" src={dragon} />
        <p>
          Welcome to the D&amp;D Character Builder! <br /> The purpose of
          this project is to help players pick a character using a randomization tool. <br />
          Saving players time and possibly making the campaign more interesting.<br />
          Click the button below to generate a random class, race and skill set. <br />
          You can generate as many times as you like. <br />Once satisfied, you can attach your name
          to your chosen character, and add up to four favorites. One for each player.<br />
          Happy playing!
        </p>
      </div>
      <h3>Click below to Generate a character</h3>
      <div className="button-container">
        <button onClick={generateCharacter}><img className="dice" src={diceImg} /></button>
      </div>
      
    </>
  )

}

export default Home;
