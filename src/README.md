# PROEJECT 2 - DUNGEONS & DRAGONS CHARACTER BUILDER

This project was built for project two of General Assembly's Full-Stack Software Engineering course. 
The project brief's focus was on utilising our knowledge of React as well as fetching and using data from selected API's. 
This project is a paired project. 


### Table of contents 

1. How it works
2. Planning 
3. Build
4. Styling
5. Challenges and Wins
6. Future improvements

#### How it works

The Dungeons & Dragons Character Builder is a generator that fetches random data from an API and displays it to the user. The random data returned is race, class and skill.
It also fetches the description of the randomised data if the user wishes to see it. (Description of returned race, class and skill,
including the languages spoken by the race and their aging attributes)
The purpose of the generator is for player's to have a random character generated for them to play the game.
The player's can randomise their character as many times as they wish. 

#### Planning

We were given the task to find and play around with a list of avaliable API's and others we could find online. 
We first tested the API's using Insomnia and the D&D API documentation (https://www.dnd5eapi.co/).
Once agreed on what the project would do and display, we started to experiment with creating wireframes.

![planning screenshot](/src/assets/psuedo.png)

We also kept track of the things we had to do for each day.

![planning screenshot](/src/assets/psuedo2.png)

#### Build

The project utilises React, HTML and SCSS. We started by testing the API's behaviour using <font color="blue">**console.logs**</font> and using the 
terminal in the Chrome browser to see how we could access different data points. Then we fetched the data within our code.

```
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
```

Our next step was to be able to return a random character, which we tackled by using the <font color="blue">**Math.random()**</font> function. 

```
  function generateCharacter() {
    randomClass = classes.results[Math.floor(Math.random() * classes.results.length)]
    fetchClassInfo(randomClass)
    displayingClassImg(randomClass)
    updateRandomClass(randomClass)

    randomRace = races.results[Math.floor(Math.random() * races.results.length)]
    fetchRaceInfo(randomRace)
    updateRandomRace(randomRace)

    randomSkill = skills.results[Math.floor(Math.random() * skills.results.length)]
    fetchSkillInfo(randomSkill)
    updateRandomSkill(randomSkill)
  }
  }
```

The main logic in this project is wihin our generator which is the code we exanded above.  

#### Styling

We wanted the styling to reflect classic D&D characteristcs and aesthetics but still have a modern feel. 
We added extra styling functionality like hover effects to give the project more character. 
We used different art styles such as AI created digital art as well as classic drawings.
We also used classic D&D iconography such as the D20 infamous dice.



![planning screenshot](/src/assets/stylescreen.png)
![dice](/src/assets/dice3.png)

#### Challenges and Wins

A few challenges appeared during the building of this project. But with every challenge there was a win. The biggest challenge 
was getting the favorites functionality to work. We discovered that there are many ways to do it and the simplest way would
come with a lot of caveats, such as losing the data from each pay when clicked onto a new page. The biggest challenge that we
faced was during the deployment stage, we discovered that we had to fix a number of bugs for it to be successfuly deployed online,
that we would not have known until the deployment stage. 

#### Future improvememts 

Originally we had planned to have a Favorites page for the user's to save up to four character's. (4 character's plus the Dungeon Master). Another option would be to have an infinite amount of favorites for the player's to potentially round up their 
favorite generated character's and choose. The addition of favorites would have been a relevant feature to our project as it would emphasise the concept of generating a character for the user to potentially play with in a campaign. The player's would be able to see their favorite's in the favorite's page as well as which user favorited it. We would also have the option to expand details
of the class, race and skills so that it is not lost in the home-page. 
In terms of styling, having the expansions more concise and in clear sections would be the finishing touch. 





