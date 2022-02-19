import React from "react";
//importing images to display
import barbarian from "../assets/barbarian.JPG";
import bard from "../assets/bard.JPG";
import cleric from "../assets/cleric.JPG";
import druid from "../assets/druid.JPG";
import fighter from "../assets/fighter.JPG";
import monk from "../assets/monk.JPG";
import paladin from "../assets/paladin.JPG";
import ranger from "../assets/ranger.JPG";
import rogue from "../assets/rogue.JPG";
import sorcerer from "../assets/sorcerer.JPG";
import warlock from "../assets/warlock.JPG";
import wizard from "../assets/wizard.JPG";

function ClassesDisplay() {
  const [classDisplay, updateClassDisplay] = React.useState([]);

  React.useEffect(() => {
    async function fetchClass() {
      const resp = await fetch("https://www.dnd5eapi.co/api/classes");
      const classDisplay = await resp.json();
      updateClassDisplay(classDisplay);
    }
    fetchClass();
  }, []);

  function displayImage(classDisplay) {
    if (classDisplay.index === "barbarian") {
      return barbarian;
    }
    if (classDisplay.index === "bard") {
      return bard;
    }
    if (classDisplay.index === "cleric") {
      return cleric;
    }
    if (classDisplay.index === "druid") {
      return druid;
    }
    if (classDisplay.index === "fighter") {
      return fighter;
    }
    if (classDisplay.index === "monk") {
      return monk;
    }
    if (classDisplay.index === "paladin") {
      return paladin;
    }
    if (classDisplay.index === "ranger") {
      return ranger;
    }
    if (classDisplay.index === "rogue") {
      return rogue;
    }
    if (classDisplay.index === "sorcerer") {
      return sorcerer;
    }
    if (classDisplay.index === "warlock") {
      return warlock;
    }
    if (classDisplay.index === "wizard") {
      return wizard;
    }
  }
  return (
    <>
      <h1>Classes</h1>

      {classDisplay.length !== 0 ? (
        classDisplay.results.map((elem) => (
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

export default ClassesDisplay;
