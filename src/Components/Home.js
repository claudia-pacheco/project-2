import React from "react"

function Home() {
  const [classes, updateClasses] = React.useState(undefined)
  const [races, updateRaces] = React.useState(undefined)

   React.useEffect(() => {
    async function fetchData() {
      const resp = await fetch("https://www.dnd5eapi.co/api/classes") 
      const classes = await resp.json()
      updateClasses(classes)

      const respTwo = await fetch("https://www.dnd5eapi.co/api/races")
      const races = await respTwo.json()
      updateRaces(races)
    }
    fetchData()
  }, [])

console.log('this is races' , races)
console.log('this is classes', classes)

  
function generateCharacter() {

  console.log('this is a character')
  

  // return chars.map(char => {
  //   <div key={char.class.index}> 
  //     <h1>{char.classes.name}</h1>
  //     {/* <p>{char.classes.}</p> */}
  //   </div>
  // } )
}
  return (
    <>
      <h1>Dungeons and Dragons</h1>
      <p>
        Welcome to the Dungeons and Dragons Character Builder. The purpose of
        this site is to...
      </p>
      <main>
       <h2>Generate below </h2>
       <button onClick={generateCharacter}>Click to generate</button>
      </main>
    </>
  )
  
}

export default Home;
