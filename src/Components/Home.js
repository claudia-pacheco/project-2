import React from 'react'
import dragon from '../assets/wp4786826.png'
import diceImg from '../assets/dice3.png'

function Home() {
  const [classes, updateClasses] = React.useState(undefined)
  const [races, updateRaces] = React.useState(undefined)
  const [skills, updateSkills] = React.useState(undefined)

  let [name, updateName] = React.useState('')

  let [randomClass, updateRandomClass] = React.useState(undefined)
  let [randomRace, updateRandomRace] = React.useState(undefined)
  let [randomSkill, updateRandomSkill] = React.useState(undefined)
  let [classInfo, updateClassInfo] = React.useState(undefined)
  let [renderClassInfo, updateRenderClassInfo] = React.useState([])
  let [hitDie, updateHitDie] = React.useState(undefined)
  let [raceInfo, updateRaceInfo] = React.useState(undefined)
  let [raceDisplay, updateRaceDisplay] = React.useState(undefined)
  let [skillInfo, updateSkillInfo] = React.useState(undefined)
  let [skillDisplay, updateSkillDisplay] = React.useState(undefined)



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
  //fetching individual race information
  async function fetchRaceInfo(randomRace) {
    const respFive = await fetch(`https://www.dnd5eapi.co/api/races/${randomRace.index}`)
    const raceInfo = await respFive.json()
    updateRaceInfo(raceInfo)
  }
  async function fetchSkillInfo(randomSkill) {
    const respSix = await fetch(`https://www.dnd5eapi.co/api/skills/${randomSkill.index}`)
    const skillInfo = await respSix.json()
    updateSkillInfo(skillInfo)
  }

  //GENERATING A RANDOM CHARACTER WITH RANDOM CLASS, RACE & SKILL
  function generateCharacter() {
    randomClass = classes.results[Math.floor(Math.random() * classes.results.length)]
    fetchClassInfo(randomClass)
    updateRandomClass(randomClass)

    randomRace = races.results[Math.floor(Math.random() * races.results.length)]
    fetchRaceInfo(randomRace)
    updateRandomRace(randomRace)

    randomSkill = skills.results[Math.floor(Math.random() * skills.results.length)]
    fetchSkillInfo(randomSkill)
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
    } else {
      renderClassInfo = <li>There is no starting equipment for this class.</li>
      updateRenderClassInfo(renderClassInfo)
    }
    hitDie = classInfo.hit_die
  }
  //TOGGLE DISPLAY BUTTONS
  function hitDieDisplay() {
    hitDie = !hitDie
    updateHitDie(hitDie)
  }
  function raceInfoDisplay() {
    raceDisplay = !raceDisplay
    updateRaceDisplay(raceDisplay)
  }
  function skillInfoDisplay() {
    skillDisplay = !skillDisplay
    updateSkillDisplay(skillDisplay)
  }
  //handle input name
  function handleChange(e) {
    name = e.target.value
    updateName(e.target.value)
  }
  function addName(event) {
    event.preventDefault()
    console.log('clicked!', name)
    updateName(name)
  }


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

      <form onSubmit={addName}>
        <label>
          Enter player's name:
          <input type='text' name='name' onChange={handleChange} value={name} />
        </label>
        <input type='submit' />
      </form>

      <div className='button-container'>
        <div className='button-border'>
          <h3>Click below to Generate a character</h3>
          <div className="button-1-container">
            <button className="button-1" onClick={generateCharacter}>
              <img className='dice' src={diceImg} />
            </button>
          </div>
        </div>
      </div>
      {/* CHARACTER INFORMATION */}
      {randomClass && <div><p className='user-result'><li>{name}</li> <br />
        You've been given the race <b>{randomRace.name}</b> with the class of <b>{randomClass.name} </b> and
        the skills <b>{randomSkill.name}</b>.</p>
      <div className='info-container'>
        <button className="info" onClick={hitDieDisplay}>Expand class</button>
        <button className="info" onClick={raceInfoDisplay}>Expand race</button>
        <button className="info" onClick={skillInfoDisplay}>Expand skills</button></div></div>}

      {/* CLASSES INFORMATION */}
      {hitDie && <p><h3>More about the {randomClass.name} class.</h3>
        <br />
        {randomClass.name} has the following starting equipment: <ol>{renderClassInfo}</ol>
        <br />
        {randomClass.name} has a {classInfo.hit_die} hit die level.
        <br />
        <p>Hit die refers to the number of dice rolled to calculate how many hit points a character begins to play with.
          This determines how difficult they are to kill.</p>
      </p>}
      {/* RACES INFORMATION */}
      {raceDisplay && <p><h3>More about the {randomRace.name} race.</h3>
        <br /><br />
        <b>Age:</b> {raceInfo.age}
        <br /><br />
        <b>Alignment:</b> {raceInfo.alignment}
        <br /><br />
        <b>Languages:</b> {raceInfo.language_desc}
        <br /><br />
        <b>Size:</b> {raceInfo.size_description}
        <br /><br />
        <b>Speed:</b> {raceInfo.speed}
      </p>}
      {/* SKILLS INFORMATION */}
      {skillDisplay && <p><h3>More about the {randomSkill.name} skill</h3>
        <br />
        <b>{randomSkill.name}: </b>{skillInfo.desc[0]}</p>}




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
