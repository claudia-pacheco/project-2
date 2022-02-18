import React from 'react'
import dragon from '../assets/wp4786826.png'
import diceImg from '../assets/dice3.png'

function Home() {
  const [classes, updateClasses] = React.useState(undefined)
  const [races, updateRaces] = React.useState(undefined)
  const [skills, updateSkills] = React.useState(undefined)

  let [randomClass, updateRandomClass] = React.useState(undefined)
  let [randomRace, updateRandomRace] = React.useState(undefined)
  let [randomSkill, updateRandomSkill] = React.useState(undefined)
  let [classInfo, updateClassInfo] = React.useState(undefined)
  let [renderClassInfo, updateRenderClassInfo] = React.useState([])
  let [hitDie, updateHitDie] = React.useState(undefined)

  // let [userFav, updateUserFav] = React.useState()

  React.useEffect(() => {
    //fetching classes 
    async function fetchClasses() {
      const resp = await fetch('https://www.dnd5eapi.co/api/classes')
      const classes = await resp.json()
      updateClasses(classes)
      generateCharacter(classes)
    }
    //fetching races
    async function fetchRaces() {
      const respTwo = await fetch('https://www.dnd5eapi.co/api/races')
      const races = await respTwo.json()
      updateRaces(races)
      generateCharacter(races)
    }
    //fetching skills
    async function fetchSkills() {
      const respThree = await fetch('https://www.dnd5eapi.co/api/skills')
      const skills = await respThree.json()
      updateSkills(skills)
      generateCharacter(skills)
    }
    fetchClasses()
    fetchRaces()
    fetchSkills()
  }, [])
  //fetching individual class information
  async function fetchClassInfo(randomClass) {
    const respFour = await fetch(`https://www.dnd5eapi.co/api/classes/${randomClass.index}`)
    const classInfo = await respFour.json()
    updateClassInfo(classInfo)
    displayClassInfoFunction(classInfo)
    hitDieDisplay(classInfo)
  }

  //GENERATING A RANDOM CHARACTER WITH RANDOM CLASS, RACE & SKILL
  function generateCharacter() {
    randomClass = classes.results[Math.floor(Math.random() * classes.results.length)]
    fetchClassInfo(randomClass)
    updateRandomClass(randomClass)

    randomRace = races.results[Math.floor(Math.random() * races.results.length)]
    updateRandomRace(randomRace)

    randomSkill = skills.results[Math.floor(Math.random() * skills.results.length)]
    updateRandomSkill(randomSkill)
  }

  //DISPLAYING THE STARTING EQUIPMENT AND HIT DIE OF A CHARACTER 
  function displayClassInfoFunction(classInfo) {
    if (classInfo.starting_equipment.length != 0) {
      renderClassInfo = classInfo.starting_equipment.map(elem => (
        <li key={elem.equipment}>
          {elem.equipment.name}
        </li>))
      updateRenderClassInfo(renderClassInfo)
    }
    else {
      renderClassInfo = <li>There is no starting equipment for this class.</li>
      updateRenderClassInfo(renderClassInfo)
    }
    hitDie = classInfo.hit_die
  }
  //TOGGLE CLASS DISPLAY BUTTON
  function hitDieDisplay() {
    hitDie = !hitDie
    updateHitDie(hitDie)
  }

  // console.log('6 this is a character random race', randomRace)
  // console.log('this is a character random skill', randomSkill)
  return (
    <>
      <div className='headings'>
        <h1>A Dungeons &amp; Dragons</h1>
        <h2>Character Builder</h2>
      </div>
      <div className='image'>
        <img className='dragon' src={dragon} />
        <p>
          Welcome to the D&amp;D Character Builder! <br /> The purpose of this
          project is to help players pick a character using a randomization
          tool. <br />
          Saving players time and possibly making the campaign more interesting.
          <br />
          Click the button below to generate a random class, race and skill set.{' '}
          <br />
          You can generate as many times as you like. <br />
          Once satisfied, you can attach your name to your chosen character, and
          add up to four favorites. One for each player.
          <br />
          Happy playing!
        </p>
      </div>
      <h3>Click below to Generate a character</h3>
      <div className='button-container'>
        <button onClick={generateCharacter}>
          <img className='dice' src={diceImg} />
        </button>
      </div>

      {randomRace && <div><p>You've been given the race <b>{randomRace.name}</b> with the class of <b>{randomClass.name} </b> and
        the skills <b>{randomSkill.name}</b>.</p>
        <button onClick={hitDieDisplay}>Click to know more about your class</button>
        <button>Click to know more about your race</button></div>}

      {hitDie && <p><h3>More about the {randomClass.name} class.</h3>
        <br />
        Your class has the following starting equipment: <ol>{renderClassInfo}</ol>
        <br />
        {randomClass.name} has a {classInfo.hit_die} hit die level.
        <br />
        <p>Hit die refers to the number of dice rolled to calculate how many hit points a character begins to play with.
          This determines how difficult they are to kill.</p>
      </p>}

      <form>
        <label>
          Enter player's name:
          <input type='text' name='name' />
        </label>
        <input type='submit' value='Submit' />
      </form>
      {/* <button onClick={addToFaves}>Add Character to Favorites</button> */}

      {/* {function addToFaves() {
        let userResult = userResult // store all of the data returned from the random generator into a variable, including the string and expanders, that variable which has all the data returned will be the 'user favorite'
        // once that has been stored, it can be displayed in the favorites component until the user removes it as a favorite . could pos
        let userFavorite = 
        
      }} */}
    </>
  )
}

export default Home
