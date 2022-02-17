import React from "react";
import dragon from "../assets/wp4786826.png";
import diceImg from "../assets/dice3.png";

function Home() {
  const [classes, updateClasses] = React.useState(undefined);
  const [races, updateRaces] = React.useState(undefined);
  const [skills, updateSkills] = React.useState(undefined);

  let [randomClass, updateRandomClass] = React.useState(undefined);
  let [randomRace, updateRandomRace] = React.useState(undefined);
  let [randomSkill, updateRandomSkill] = React.useState(undefined);
  let [classInfo, updateClassInfo] = React.useState(undefined);
 
  // let [userFav, updateUserFav] = React.useState();

  React.useEffect(() => {
    async function fetchClasses() {
      const resp = await fetch("https://www.dnd5eapi.co/api/classes");
      const classes = await resp.json();
      updateClasses(classes);
      generateCharacter(classes);
    }
    async function fetchRaces() {
      const respTwo = await fetch("https://www.dnd5eapi.co/api/races");
      const races = await respTwo.json();
      updateRaces(races);
      generateCharacter(races);
    }
    async function fetchSkills() {
      const respThree = await fetch("https://www.dnd5eapi.co/api/skills");
      const skills = await respThree.json();
      updateSkills(skills);
      generateCharacter(skills);
    }
    fetchClasses();
    fetchRaces();
    fetchSkills();
  }, []);
  async function fetchClassInfo(randomClass) {
    const respFour = await fetch(
      ` https://www.dnd5eapi.co/api/classes/${randomClass.index}`
    );
    const classInfo = await respFour.json();
    updateClassInfo(classInfo);

  }

  function generateCharacter() {
    randomClass = classes.results[Math.floor(Math.random() * classes.results.length)];
    fetchClassInfo(randomClass);
    updateRandomClass(randomClass);

    randomRace =
      races.results[Math.floor(Math.random() * races.results.length)];
    updateRandomRace(randomRace);

    randomSkill =
      skills.results[Math.floor(Math.random() * skills.results.length)];
    updateRandomSkill(randomSkill);


    console.log(
      `this is a character with race ${randomRace.name} class ${randomClass.name} and skill ${randomSkill.name}`
    );
  }

  // console.log("this is the random class", randomClass.name)
  console.log('this is class infooo', classInfo)
  // console.log("this is the class info of the random class", classInfo.starting_equipment.map(elem => {console.log(elem.equipment.name)}) );
  // console.log("5 this is a character", randomClass);
  // console.log("6 this is a character", randomRace);
  // console.log("this is a character", randomSkill);
  return (
    <>
      <div className="headings">
        <h1>A Dungeons &amp; Dragons</h1>
        <h2>Character Builder</h2>
      </div>
      <div className="image">
        <img className="dragon" src={dragon} />
        <p>
          Welcome to the D&amp;D Character Builder! <br /> The purpose of this
          project is to help players pick a character using a randomization
          tool. <br />
          Saving players time and possibly making the campaign more interesting.
          <br />
          Click the button below to generate a random class, race and skill set.{" "}
          <br />
          You can generate as many times as you like. <br />
          Once satisfied, you can attach your name to your chosen character, and
          add up to four favorites. One for each player.
          <br />
          Happy playing!
        </p>
      </div>
      <h3>Click below to Generate a character</h3>
      <div className="button-container">
        <button onClick={generateCharacter}>
          <img className="dice" src={diceImg} />
        </button>
      </div>

      {randomRace && <div><p>You've been given the race {randomRace.name} with the class of {randomClass.name}
         and the skills {randomSkill.name} . </p> </div>}

      <form>
        <label>
          Enter player's name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <button onClick={addToFaves}>Add Character to Favorites</button> */}

      {/* {function addToFaves() {
        let userResult = userResult // store all of the data returned from the random generator into a variable, including the string and expanders, that variable which has all the data returned will be the "user favorite"
        // once that has been stored, it can be displayed in the favorites component until the user removes it as a favorite . could pos
        let userFavorite = 
        
      }} */}
    </>
  );
}

export default Home;
