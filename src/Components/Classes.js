import React from "react";

function ClassesDisplay() {

    const [classDisplay, updateClassDisplay] = React.useState(undefined)

    async function fetchClass() {
        const resp = await fetch("https://www.dnd5eapi.co/api/classes")
        const classDisplay = await resp.json()
        updateClassDisplay(classDisplay)
    }

fetchClass()
    if (classDisplay.index=== "barbarian") {
        classImg = barbarian
    } if (classDisplay.index=== "bard") {
        classImg = bard
    } if (classDisplay.index=== "cleric") {
        classImg = cleric
    } if (classDisplay.index=== "druid") {
        classImg = druid
    } if (classDisplay.index=== "fighter") {
        classImg = fighter
    } if (classDisplay.index=== "monk") {
        classImg = monk
    } if (classDisplay.index=== "paladin") {
        classImg = paladin
    } if (classDisplay.index=== "ranger") {
        classImg = ranger
    } if (classDisplay.index=== "rogue") {
        classImg = rogue
    } if (classDisplay.index=== "sorcerer") {
        classImg = sorcerer
    } if (classDisplay.index=== "warlock") {
        classImg = warlock
    } if (classDisplay.index=== "wizard") {
        classImg = wizard
    }
    updateClassImg(classImg)


    return (
        <>
            <h1>Classes</h1>
            {classDisplay.name}
            {/* <img src={}></img> */}
        </>
    );
}

export default ClassesDisplay;
